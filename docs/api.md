---
sidebar_position: 5
---

# SecureRPC and OpenMEV RPC Gateway

> Supported RPC and API Endpoints for SecureRPC and OpenMEV

OpenMEV provides HTTP endpoints to interact with the reputation service and HTTP/WS endpoints to access onchain data
with a subgraph.

:::tip If you want to use the OpenMEV APIs with a JavaScript library you can also use the npm package
[`libmev`](https://github.com/manifoldfinance/libmev). 
:::

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
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 83
});

const config = {
  method: 'post',
  url: 'https://api.sushirelay.com/v1',
  headers: { 
    'Content-Type': 'application/json'
  },
  timeout: 1000,
  data : data
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

Same signature as `eth_sendRawTransaction` but the tx is eligible for arb and goes into our OpenMEV workflow (e.g. gas
rebate). Anything received via `eth_sendRawTransaction` just gets relayed

```
manifold_sendTransaction
```
