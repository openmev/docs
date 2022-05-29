---
title: Minimal API Guide
version: v2022.05
sidebar_position: 5
---

# Minimal API Guide

> Supported RPC and API Endpoints for SecureRPC and OpenMEV

OpenMEV provides HTTP endpoints to interact with the reputation service and HTTP/WS endpoints.

This is a Quick Start like guide, please see the official reference API specification for a full rundown.

:::tip 
If you want to use the OpenMEV APIs with a JavaScript library you can also use the npm package [`libmev`](https://github.com/manifoldfinance/libmev). 
:::

## Block parameters:

When you make requests that might have different results depending on the block accessed, the block parameter specifies the block. Methods such as `eth_getTransactionByBlockNumberAndIndex` have a block parameter.

The block parameter can have the following values:

`blockNumber` : quantity - The block number, specified in hexadecimal or decimal. 0 represents the genesis block.  
`earliest` : tag - The earliest (genesis) block.  
`latest` : tag - The last block mined.  
`pending` : tag - The last block mined plus pending transactions. Use only with `eth_getTransactionCount`.

## Subscribing

Use `eth_subscribe` to create subscriptions for the following event types:

- New headers
- Logs
- Pending transactions
- Dropped transactions
- Synchronizing

> TIP Use `mev_subscribe` to create subscriptions for logs on private transactions.

## Logs

To notify you about logs included in new blocks, use the logs' parameter with `eth_subscribe` or `mev_subscribe`. Specify a filter object to receive notifications only for logs matching your filter.

Logs subscriptions have a filter object parameter with the following fields:

`address` - (optional) Either an address or an array of addresses. Returns only logs created from these addresses. `topics` - (optional) Returns only logs that match the specified topics. `fromBlock` - (optional) The earliest block from which to return logs. `toBlock` - (optional) The last block from which to return logs.

If a chain _reorganization_ occurs, the subscription publishes notifications for logs from the old chain with the removed property in the log object set to true. This means the subscription can publish notifications for multiple logs for the same transaction.

The logs subscription returns log objects.

> For private transactions, the privacy group ID must be specified.

## HEX value encoding

At present there are two key datatypes that are passed over JSON: **unformatted byte arrays and quantities**.

Both are passed with a hex encoding, however with different requirements to formatting:

When encoding **QUANTITIES** (integers, numbers): encode as hex, prefix with “0x”, the most compact representation (slight exception: zero should be represented as “0x0”). Examples:

0x41 (65 in decimal) 0x400 (1024 in decimal) **WRONG**: 0x (should always have at least one digit - zero is “0x0”) **WRONG**: 0x0400 (no leading zeroes allowed) **WRONG**: ff (must be prefixed 0x) When encoding** UNFORMATTED DATA **(byte arrays, account addresses, hashes, bytecode arrays): encode as hex, prefix with “0x”, two hex digits per byte. Examples:

0x41 (size 1, “A”) 0x004200 (size 3, “\0B\0”) 0x (size 0, “”) **WRONG**: 0xf0f0f (must be even number of digits) **WRONG**: 004200 (must be prefixed 0x)

## `Websocket`

> NOTE: You must have `wscat` installed - `npm i -g wscat`

```bash title="Shell"
wscat -c wss://api.sushirelay.com/v1
```

```jsonc title="Response"
< {"method":"manifold_motd","jsonrpc":"2.0","params":{"result":{"notice":"THIS IS A NOTICE OF MONITORING OF MANIFOLD FINANCE, INC NETWORK INFORMATION SYSTEMS  By logging into Manifold Finance, Inc computer systems, you acknowledge and consent to monitoring of this system.  Network Policy <https://docs.manifoldfinance.com/network/policy>  By using this network, you certify that you have read, understand, and agree to abide by the Rules of Behavior for Manifold Finance Network Platform."}}}
>
```

## Response RPC Methods

These are methods we support for which we return static responses to ensure compliance

```
eth_chainId
eth_protocolVersion
eth_mining
eth_hashrate
eth_accounts
eth_syncing
eth_coinbase
net_listening
net_peerCount
net_version
web3_clientVersion
```

## Supported RPC

These are all methods we expose and proxy to our internal eth clients

```
eth_blockNumber
eth_call
eth_estimateGas
eth_gasPrice
eth_getBalance
eth_getBlockByHash
eth_getBlockByNumber
eth_getBlockTransactionCountByHash
eth_getBlockTransactionCountByNumber
eth_getCode
eth_getStorageAt
eth_getTransactionByBlockHashAndIndex
eth_getTransactionByBlockNumberAndIndex
eth_getTransactionByHash
eth_getTransactionCount
eth_getTransactionReceipt
eth_getUncleByBlockHashAndIndex
eth_getUncleByBlockNumberAndIndex
eth_getUncleCountByBlockHash
eth_getUncleCountByBlockNumber
eth_sign
eth_signTypedData
eth_sendRawTransaction
```

#### Example: `eth_blockNumber`

```shell
curl -X POST 'https://api.sushirelay.com/v1' \
-H 'Content-Type: application/json' \
--data-raw '{
	"jsonrpc":"2.0",
	"method":"eth_blockNumber",
	"params":[],
	"id":83
}'
```

> Returns

```jsonc
{
  "id": "83",
  "jsonrpc": "2.0",
  "result": "0xdef739"
}
```

#### Example: Javascript `eth_blockNumber`

```javascript
const axios = require('axios');
let data = JSON.stringify({
  jsonrpc: '2.0',
  method: 'eth_blockNumber',
  params: [],
  id: 83,
});

const config = {
  method: 'post',
  url: 'https://api.sushirelay.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 1000,
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

### OpenMEV Transaction

Same signature as `eth_sendRawTransaction` but the tx is eligible for arb and goes into our OpenMEV workflow (e.g. gas rebate). Anything received via `eth_sendRawTransaction` just gets relayed

```
manifold_sendTransaction
```
