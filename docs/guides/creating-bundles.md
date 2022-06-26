---
sidebar_position: 3
title: MEV Bundles
---

# Creating a MEV Bundle

### Authentication

To authenticate your request, the relay requires you sign the payload and include the signed payload in the `X-Manifold-Signature` header of your request.

> [This signature method originates from Flashbots](https://github.com/flashbots/flashbots-docs/blob/fceec9d5a9045d6e2cfa2e26ba63757e5997ed60/docs/flashbots-auction/searchers/advanced/rpc-endpoint.mdx#authentication)

```shell
curl -X POST
-H "Content-Type: application/json" -H " \
X-Manifold-Signature: 0x1234:0xabcd" \
--data '{
  "jsonrpc": "2.0",
  "method": "eth_sendBundle",
  "params": [],
  "id": 1
}'\
 https://api.securerpc.com/v1
```

```json
{
    "jsonrpc": "2.0",
    "method": "eth_sendBundle",
    "params": [],
    "id": 1
}
```

Any valid Ethereum key can be used to sign the payload. The Ethereum address associated with this key will be used by the relay to keep track of your requests over time and provide user statistics. You can change the key you use at any time.

The signature is calculated by taking the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) hash of the json body encoded as UTF-8 bytes.

Here's an example using ethers.js:

```ts twoslash
import { Wallet, utils } from "ethers";
const privateKey = "0x1234";
const wallet = new Wallet(privateKey);
const body = '{"jsonrpc":"2.0","method":"eth_sendBundle","params":[{see above}],"id":1}';
//       ^?
const signature = wallet.address + ":" + wallet.signMessage(utils.id(body));
//       ^?
```
