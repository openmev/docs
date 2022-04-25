# Flashbots Cheatsheet

> [source via docs.flashbots.net/flashbots-auction/overview](https://docs.flashbots.net/flashbots-auction/overview)

> Notes on the current state of flashbots docs with relevance to assumptions of bundle process.

## Anatomy of a bundle

```ts
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
)
```

## Miner reward through coinbase.transfer()

https://docs.flashbots.net/flashbots-auction/searchers/advanced/coinbase-payment

To include as last action of smart contract

```solidity
block.coinbase.transfer(AMOUNT_TO_TRANSFER)

```

Edge case to deal with sending to a miner contract
```solidity
block.coinbase.call{value: _ethAmountToCoinbase}(new bytes(0));
```
subject to [reentrancy attacks](https://medium.com/coinmonks/protect-your-solidity-smart-contracts-from-reentrancy-attacks-9972c3af7c21)

## Bundle pricing

https://docs.flashbots.net/flashbots-auction/searchers/advanced/bundle-pricing

Conflicting bundles received by flashbots are ordered by the following formula:

![\bg_white \Large score=\frac{minerBribe + totalGasUsed * priorityFeePerGas - mempoolGasUsed * priorityFeePerGas}{totalGasUsed}](https://latex.codecogs.com/png.latex?\bg_white&space;\Large&space;score=\frac{minerBribe&space;+&space;totalGasUsed&space;*&space;priorityFeePerGas&space;-&space;mempoolGasUsed&space;*&space;priorityFeePerGas}{totalGasUsed})

## Eligibility

https://docs.flashbots.net/flashbots-auction/miners/mev-geth-spec/v04

Bundles must have a target `blockNumber` and a `priorityFeePerGas` >= 1 Gwei.

## Reverting txs
https://docs.flashbots.net/flashbots-auction/miners/mev-geth-spec/v04


"When constructing a block the node should reject any bundle or megabundle that has a reverting transaction unless its hash is included in the RevertingTxHashes list of the bundle"

## Debugging

https://docs-staging.flashbots.net/flashbots-auction/searchers/advanced/troubleshooting

1. Transaction failure (ANY within the bundle)
2. Incentives (gas price/coinbase transfers) not high enough to offset value of block space

Simulate bundle:
```ts
  const signedTransactions = await flashbotsProvider.signBundle(transactionBundle)
  const simulation = await flashbotsProvider.simulate(signedTransactions, targetBlockNumber, targetBlockNumber + 1)
  console.log(JSON.stringify(simulation, null, 2))
```

3. Competitors paying more

Get conflicting bundles for a prior block:
```ts
const signedTransactions = await flashbotsProvider.signBundle(transactionBundle)
console.log(await flashbotsProvider.getConflictingBundle(
      signedTransactions,
      13140328 // blockNumber
  ))
```

4. Bundle received too late to appear in target block

Get submission time data and compare to block time:
```ts
console.log(
  await flashbotsProvider.getBundleStats("0x123456789abcdef123456789abcdef123456789abcdef123456789abcdef1234", 13509887)
  )

```

