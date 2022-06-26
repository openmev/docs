## MEV Bundles

Searchers that use Flashbots can also use OpenMEV with minimal changes. You can submit bundles to miners (bock synchronizers/producers) for inclusion in blocks.

Bundles are one or more transactions that are grouped together and executed in the order they are provided. In addition to the searcher's transaction(s) a bundle can also potentially contain other users' pending transactions from the mempool, and bundles can target specific blocks for inclusion as well. Here's an example:

```typescript
const blockNumber = await provider.getBlockNumber()
const minTimestamp = (await provider.getBlock(blockNumber)).timestamp
const maxTimestamp = minTimestamp + 120
const signedBundle = flashbotsProvider.signBundle(
    [
      {
        signedTransaction: SIGNED_ORACLE_UPDATE_FROM_PENDING_POOL // serialized signed transaction hex
      },
      {
        signer: wallet, // ethers signer
        transaction: transaction // ethers populated transaction object
      }
    ])
const bundleReceipt = await flashbotsProvider.sendRawBundle(
    signedBundle, // bundle we signed above
    targetBlockNumber, // block number at which this bundle is valid
    {
      minTimestamp, // optional minimum timestamp at which this bundle is valid (inclusive)
      maxTimestamp, // optional maximum timestamp at which this bundle is valid (inclusive)
      revertingTxHashes: [tx1, tx2] // optional list of transaction hashes allowed to revert. Without specifying here, any revert invalidates the entire bundle.
    }
  )
);
```

## Bundle Signing Key

Typescript function `getDefaultRelaySigningKey` searches for your key, if unable to find a valid key it will generate a random signing key.

```typescript
export function getDefaultRelaySigningKey(): string {
    console.warn(
        "[#Error]: BUNDLE_SIGNING_KEY environment variable. Creating random signing key, this searcher will not be building a reputation for next run",
    );
    const key = Wallet.createRandom().privateKey;
    console.log(key);
    return key;
}
```

# `coinbase.transfer()`

Flashbots allows you to pay miners for your transactions through a smart contract by using block.coinbase.transfer(AMOUNT_TO_TRANSFER). This smart contract function transfers Ethereum from the contract to the coinbase address of the miner who mines that block. Miners running MEV-Geth will treat fees through coinbase transfers in the same way they do normal transaction fees, which is to say that 1 wei of coinbase payments is equivalent to 1 wei paid through transaction fees. This provides significant benefits to Flashbots users:

You can condition payment to the miner on some criteria being met Related, you can only pay for successful transactions, not failures You can pay for a transaction from account X with ETH from account Y Here's an example from our open source simple arbitrage bot of how paying through coinbase transfers work:

```solidity
function uniswapWeth(uint256 _wethAmountToFirstMarket, uint256 _ethAmountToCoinbase, address[] memory _targets, bytes[] memory _payloads) external onlyExecutor payable {
    require (_targets.length == _payloads.length);
    uint256 _wethBalanceBefore = WETH.balanceOf(address(this));
    WETH.transfer(_targets[0], _wethAmountToFirstMarket);
    for (uint256 i = 0; i < _targets.length; i++) {
        (bool _success, bytes memory _response) = _targets[i].call(_payloads[i]);
        require(_success); _response;
    }

    uint256 _wethBalanceAfter = WETH.balanceOf(address(this));
    require(_wethBalanceAfter > _wethBalanceBefore + _ethAmountToCoinbase);
    if (_ethAmountToCoinbase == 0) return;

    uint256 _ethBalance = address(this).balance;
    if (_ethBalance < _ethAmountToCoinbase) {
        WETH.withdraw(_ethAmountToCoinbase - _ethBalance);
    }
    block.coinbase.transfer(_ethAmountToCoinbase);
}

```

The above smart contract code will attempt to capitalize on arbitrage opportunities.

If it does not make money doing, so then the transaction will fail. Moreover, since the searcher is paying the miner via block.coinbase.transfer() on the last line then the searcher won't pay any transaction fees.

For more information on how coinbase transfers are priced see the bundle pricing page.

Managing payments to coinbase. Address when it is a contract# Miners will occasionally have a smart contract listed as their block.coinbase address. This changes the expected behavior of the making payments to block.coinbase. Specifically it costs more gas to transfer ETH to block.coinbase if it is a contract than if it is an EOA, and as such many searchers will underestimate their gas consumption and their bundles will fail for miners who use contracts instead.

To handle this edge case searchers can up their gas limit to accommodate the additional payment to miners and call block.coinbase in the following way:

```solidity
block.coinbase.call{value: _ethAmountToCoinbase}(new bytes(0));
```

However, searchers should be acutely aware of the risk of reentrancy attacks, as calling coinbase in this way temporarily gives execution to a third party, and typically payments to coinbase are made after checks for profit. Moreover, searchers should be aware that supporting payments to coinbase addresses that are contracts will cause their gas consumption to go up, and as a result their bundle gas price to go down. This is a trade off that should be considered.
