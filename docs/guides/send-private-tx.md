# Private Transactions

How to send a single transaction using SecureRPC

If you want to send a single transaction privately, without sending it as a bundle, you can use the `eth_sendPrivateTransaction` method.

This method attempts to send your transaction to miners on every block for a maximum of 25 blocks. No need to listen for the next block and re-send yourself.

Private transactions can be cancelled with the `eth_cancelPrivateTransaction` method. Once a transaction is submitted from the relay to a miner we cannot "recall" it. However, we can cancel submitting transactions for future blocks.

See RPC endpoint for JSON-RPC definitions of the methods.

These methods are currently implemented in the `libmev` library.

```javascript
// ethers.js
const signer = Wallet.createRandom();
const provider = new providers.JsonRpcProvider('http://localhost:8545');
const flashbotsProvider = await FlashbotsBundleProvider.create(provider, signer);

const transaction = {
  from: signer.address,
  to: signer.address,
  value: '0x42',
  gasPrice: BigNumber.from(99).mul(1e9),
  gasLimit: BigNumber.from(21000),
};

const res = await flashbotsProvider.sendPrivateTransaction(
  {
    transaction,
    signer,
  },
  {
    maxBlockNumber: (await provider.getBlockNumber()) + 5, // only allow tx to be mined for the next 5 blocks
  },
);

const waitRes = await res.wait();
if (waitRes === FlashbotsTransactionResolution.TransactionIncluded) {
  console.log('Private transaction successfully mined.');
} else if (waitRes === FlashbotsTransactionResolution.TransactionDropped) {
  console.log('Private transaction was not mined and has been removed from the system.');
}
```

## Sending a Private Transaction

To send a _single_ transaction without having to send it as a bundle, use the `sendPrivateTransaction` function. This method allows us to process transactions faster and more efficiently than regular bundles. When you send a transaction using this method, we will try to send it to miners over the next 25 blocks (up to, but not past the target block number).

```js
const tx = {
  from: wallet.address,
  to: wallet.address,
  value: '0x42',
  gasPrice: BigNumber.from(99).mul(1e9), // 99 gwei
  gasLimit: BigNumber.from(21000),
};
const privateTx = {
  transaction: tx,
  signer: wallet,
};
const res = await flashbotsProvider.sendPrivateTransaction(privateTx);
```

Optionally, you can set the following parameters to fine-tune your submission:

```js
// highest block number your tx can be included in
const maxBlockNumber = (await provider.getBlockNumber()) + 10;
// timestamp for simulations
const minTimestamp = 1645753192;
const res = await flashbotsProvider.sendPrivateTransaction(privateTx, { maxBlockNumber, minTimestamp });
```
