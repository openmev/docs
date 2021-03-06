---
title: SecureRpc API
description: SecureRpc API and OpenMEV RPC Status and Responses
version: v2022.06.29
---

# SecureRpc and  OpenMEV RPC Status and Responses

> [api.securerpc.com/v1](https://api.securerpc.com/v1)

> This covers both SecureRpc and OpenMEV

Transactions that you submit to OpenMEV won't be observable in the public mempool. We provide a flashbots compatible status API endpoint for both end-users and integrators to use to populate / query user submissions for both transactions and bundles.

- [OpenMEV RPC Status and Responses](#openmev-rpc-status-and-responses)
  * [Potential statuses](#potential-statuses)
  * [Privacy](#privacy)
  * [Response Message](#response-message)
  * [`manifold_sendBundle`](#-manifold-sendbundle-)
    + [Description](#description)
    + [Returns](#returns)
    + [Example](#example)
  * [`manifold_sendMegabundle`](#-manifold-sendmegabundle-)
    + [Description](#description-1)
    + [Returns](#returns-1)
    + [Example](#example-1)
      - [Response](#response)
  * [`manifold_sendPrivateRawTransaction`](#-manifold-sendprivaterawtransaction-)
    + [Returns](#returns-2)
    + [Example](#example-2)
  * [`manifold_callBundle`](#-manifold-callbundle-)
    + [Returns](#returns-3)
  * [Validation and Types](#validation-and-types)
    + [`Quantity`](#-quantity-)
    + [`Data`](#-data-)
    + [`Block Identifier`](#-block-identifier-)
  * [Errors](#errors)
  * [Authorization Error Codes](#authorization-error-codes)
  * [Ethereum Error Codes](#ethereum-error-codes)
    + [References](#references)

## Potential statuses

| **Code**  | **Status Description**                                                           |
| --------- | -------------------------------------------------------------------------------- |
| PENDING   | - The transaction was received and is currently being submitted to miners        |
| INCLUDED  | - The transaction was included on-chain                                          |
| FAILED    | - The transaction was submitted for 25 blocks and failed to be included on-chain |
| CANCELLED | - The transaction was cancelled by the user and not included on-chain            |
| UNKNOWN   | - The transaction was not received                                               |

## Privacy

In order to receive a response from the status API you must provide a valid transaction hash to look up.

## Response Message

OpenMEV Status API is FlashBots compatible, meaning it covers at least version 0.6+ of the Flashbots API Specification.

To check the status of your transactions query either SecureRPC or the OpenMEV API Endpoint. Response messages are formatted as follows:

> NOTE. You can also use: https://api.sushirelay.com/v1

```json
{
  "status": "PENDING",
  "hash": "YOUR_TX_HASH",
  "maxBlockNumber": "latest",
  "transaction": {
    "from": "<SENDER>",
    "to": "<RECEIVER>",
    "gasLimit": "23000",
    "maxFeePerGas": "300",
    "maxPriorityFeePerGas": "10",
    "nonce": "42",
    "value": "1333333333337"
  }
}
```

## `manifold_sendBundle`

### Description

Sends a bundle of transactions to the miner. The bundle has to be executed at the beginning of the block (before any other transactions), with bundle transactions executed exactly in the same order as provided in the bundle.

| **Name** | **Type** | **Description** | **Comment** |
| --- | --- | --- | --- |
| `txs` | `Array<Data>` | Array of signed transactions (`eth_sendRawTransaction` style, signed and RLP-encoded) | a no-op in the light mode |
| `blockNumber` | `Quantity` | Exact block number at which the bundle can be included. | bundle is evicted after the block |
| `minTimestamp` | `Quantity` | Minimum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable. |
| `maxTimestamp` | `Quantity` | Maximum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable. |
| `revertingTxHashes` | Array<`Data`> | Array of tx hashes within the bundle that are allowed to cause the EVM execution to revert without preventing the bundle inclusion in a block. |

### Returns

{`boolean`} - `true` if bundle has been accepted by the node, otherwise `false`

### Example

```bash
# Request
curl -X POST -H 'Content-Type: application/json' --data '{
    "id": 1337,
    "jsonrpc": "2.0",
    "method": "manifold_sendBundle",
    "params": [
        {
          "txs" : [
              "0x02f8b30181b18502cb417800853a352944008307a12094b893a8049f250b57efa8c62d51527a22404d7c9a80b844095ea7b300000000000000000000000093e17e368e82dd24bed931091f831b5bed3f711effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc080a027148354c23bb016147ed68014b2aa13c43a4feef36274be88ef58d25f91e20fa05ccc423d4e9e1de88515adf3245df69db8c05b1ce345a738c75b06c87a96f878",
              "0x02f8b30181b28502cb417800853a352944008307a12094d5281bb2d1ee94866b03a0fccdd4e900c8cb509180b844095ea7b300000000000000000000000093e17e368e82dd24bed931091f831b5bed3f711effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc001a042f32acc8631c8c1c81d3d77a637cdab162477077d5041285ea7d73313d6b02ca07b18b432f4921795f84916b3c9398e2fd65580e372b9fa7e018e543ffbc00375"
          ],
          "blockNumber" : "0xce7b22",
          "minTimestamp" : 0,
          "minTimestamp" : 0,
          "revertingTxHashes": []
        }
    ]
}' <url>

# Response
{
    "id": 1337,
    "jsonrpc": "2.0",
    "result": true
}
```

## `manifold_sendMegabundle`

### Description

Sends a megabundle to the miner. The megabundle has to be executed at the beginning of the block (before any other transactions), with bundle transactions executed exactly in the same order as provided in the bundle. Can only be called by a relay listed in the `miner.trustedrelays` config.

| **Name** | **Type** | **Description** | **Comment** |
| --- | --- | --- | --- |
| `txs` | `Array<Data>` | Array of signed transactions (`eth_sendRawTransaction` style, signed and RLP-encoded) | a no-op in the light mode |
| `blockNumber` | `Quantity` | Exact block number at which the bundle can be included. | bundle is evicted after the block |
| `minTimestamp` | `Quantity` | Minimum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable. |
| `maxTimestamp` | `Quantity` | Maximum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable. |
| `revertingTxHashes` | Array<`Data`> | Array of tx hashes within the bundle that are allowed to cause the EVM execution to revert without preventing the bundle inclusion in a block. |
| `relaySignature` | Array<`Data`> | An secp256k1 signature signed with an address from the `miner.trustedrelays`. Message signed is a Keccak hash of RLP serialized sequence that contains the following items: array of txs (a sequence of byte arrays representing RLP serialized txs); `minTimestamp` serialized as an int256, like in the devp2p specification; `maxTimestamp` serialized as an int256, like in the devp2p specification; `revertingTxHashes` serialized as an array of byte arrays. |

### Returns

{`boolean`} - `true` if megabundle has been accepted by the node, otherwise `false`

### Example

```bash
# Request
curl -X POST -H 'Content-Type: application/json' --data '{
    "id": 1337,
    "jsonrpc": "2.0",
    "method": "manifold_sendMegabundle",
    "params": [
        {
          "txs" : [
              "0x02f8b30181b18502cb417800853a352944008307a12094b893a8049f250b57efa8c62d51527a22404d7c9a80b844095ea7b300000000000000000000000093e17e368e82dd24bed931091f831b5bed3f711effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc080a027148354c23bb016147ed68014b2aa13c43a4feef36274be88ef58d25f91e20fa05ccc423d4e9e1de88515adf3245df69db8c05b1ce345a738c75b06c87a96f878",
              "0x02f8b30181b28502cb417800853a352944008307a12094d5281bb2d1ee94866b03a0fccdd4e900c8cb509180b844095ea7b300000000000000000000000093e17e368e82dd24bed931091f831b5bed3f711effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc001a042f32acc8631c8c1c81d3d77a637cdab162477077d5041285ea7d73313d6b02ca07b18b432f4921795f84916b3c9398e2fd65580e372b9fa7e018e543ffbc00375"
          ],
          "blockNumber" : "0xce7b22",
          "minTimestamp" : 0,
          "minTimestamp" : 0,
          "revertingTxHashes": [],
          "relaySignature" : "0x2a115a51434b6f326b99bf4eefa1226f9eb88241f140545bf2d63c688eb57e9b07c5c3bb15340ecbdcdffd642c0995024bffa397cd313ec1f29c1c331e71187d1b",
        }
    ]
}' <url>
```

#### Response

```json
{
  "id": 1337,
  "jsonrpc": "2.0",
  "result": true
}
```

## `manifold_sendPrivateRawTransaction`

Sends a raw transaction to be included for block construction. Transaction is marked as private which means that it will not be broadcast to any other node for as long as the configured `txpool.privatetxlifespan` in hours. Except for the no broadcast rule the transaction should be treated equally with all the public transaction pool transactions.

| **Name** | **Type**      | **Description**                                                             |
| -------- | ------------- | --------------------------------------------------------------------------- |
| `input`  | `Array<Data>` | Signed transaction (`eth_sendRawTransaction` style, signed and RLP-encoded) |

### Returns

"error|value" : `Data` - txhash or error

### Example

```bash
# Request
curl -X POST -H 'Content-Type: application/json' --data '{
    "id": 1337,
    "jsonrpc": "2.0",
    "method": "eth_sendPrivateRawTransaction",
    "params": [
        "0x02f8b30181b18502cb417800853a352944008307a12094b893a8049f250b57efa8c62d51527a22404d7c9a80b844095ea7b300000000000000000000000093e17e368e82dd24bed931091f831b5bed3f711effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc080a027148354c23bb016147ed68014b2aa13c43a4feef36274be88ef58d25f91e20fa05ccc423d4e9e1de88515adf3245df69db8c05b1ce345a738c75b06c87a96f878"
    ]
}' <url>

# Response
{
    "id": 1337,
    "jsonrpc": "2.0",
    "result": "0xdeadbeef883764809a94a5320e4557102f5a3fdd98dabd8cd48773b0eca00666"
}
```

## `manifold_callBundle`

Simulate a bundle of transactions at the top of a block.

After retrieving the block specified in the `blockNrOrHash` it takes the same `blockhash`, `gasLimit`, `difficulty`, same `timestamp` unless the `blockTimestamp` property is specified, and increases the block number by `1`. `manifold_callBundle` will time out after `5` seconds.

### Note about `callBundle`

This RPC Method was removed without notice by flashbots in v0.4.0 of their client, then added in the most recent release, v0.6.0. We maintain a separate client to ensure availability of this RPC Method

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| `txs` | `Array<Data>` | Array of signed transactions (`eth_sendRawTransaction` style, signed and RLP-encoded) |
| `blockNumber` | `Quantity` | A hex encoded block number for which this bundle is valid on |
| `stateBlockNumber` | `Quantity\|string\|Block Identifier` | Either a hex encoded number or a {Block Identifier} for which state to base this simulation on. |
| `timestamp` | `Quantity` | Block timestamp to be used in replacement of the timestamp taken from the parent block. |

### Returns

Map<`Data`, "error|value" : `Data`> - a mapping from transaction hashes to execution results with error or output (value) for each of the transactions

```jsonc
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "manifold_callBundle", // the same as flashbots `eth_callBundle`
  "params": [
    {
      txs,               // Array[String], A list of signed transactions to execute in an atomic bundle
      blockNumber,       // String, a hex encoded block number for which this bundle is valid on
      stateBlockNumber,  // String, either a hex encoded number or a block tag for which state to base this simulation on. Can use "latest"
      timestamp,         // (Optional) Number, the timestamp to use for this bundle simulation, in seconds since the unix epoch
    }
  ]
}
```

> Example

```jsonc
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_callBundle",
  "params": [
    {
      "txs": ["0x123abc...", "0x456def..."],
      "blockNumber": "0xb63dcd",
      "stateBlockNumber": "latest",
      "timestamp": 1615920932
    }
  ]
}
```

> Example response:

```jsonc
{
  "jsonrpc": "2.0",
  "id": "123",
  "result": {
    "bundleGasPrice": "476190476193",
    "bundleHash": "0x73b1e258c7a42fd0230b2fd05529c5d4b6fcb66c227783f8bece8aeacdd1db2e",
    "coinbaseDiff": "20000000000126000",
    "ethSentToCoinbase": "20000000000000000",
    "gasFees": "126000",
    "results": [
      {
        "coinbaseDiff": "10000000000063000",
        "ethSentToCoinbase": "10000000000000000",
        "fromAddress": "0x02A727155aeF8609c9f7F2179b2a1f560B39F5A0",
        "gasFees": "63000",
        "gasPrice": "476190476193",
        "gasUsed": 21000,
        "toAddress": "0x73625f59CAdc5009Cb458B751b3E7b6b48C06f2C",
        "txHash": "0x669b4704a7d993a946cdd6e2f95233f308ce0c4649d2e04944e8299efcaa098a",
        "value": "0x"
      },
      {
        "coinbaseDiff": "10000000000063000",
        "ethSentToCoinbase": "10000000000000000",
        "fromAddress": "0x02A727155aeF8609c9f7F2179b2a1f560B39F5A0",
        "gasFees": "63000",
        "gasPrice": "476190476193",
        "gasUsed": 21000,
        "toAddress": "0x73625f59CAdc5009Cb458B751b3E7b6b48C06f2C",
        "txHash": "0xa839ee83465657cac01adc1d50d96c1b586ed498120a84a64749c0034b4f19fa",
        "value": "0x"
      }
    ],
    "stateBlockNumber": 5221585,
    "totalGasUsed": 42000
  }
}
```


## JSON-RPC Conformance Reference

Type and data information for validation and conformance.

### Validation and Types

Below type description can also be found in [EIP-1474](https://eips.ethereum.org/EIPS/eip-1474)


### `Quantity`

Values of a field of `QUANTITY` type **MUST** be encoded as a hexadecimal string with a `0x` prefix and the leading 0s stripped (except for the case of encoding the value `0`) matching the regular expression `^0x(?:0|(?:[a-fA-F1-9][a-fA-F0-9]*))$`.

- A `Quantity` value **MUST** be hex-encoded.
- A `Quantity` value **MUST** be "0x"-prefixed.
- A `Quantity` value **MUST** be expressed using the fewest possible hex digits per byte.
- A `Quantity` value **MUST** express zero as "0x0".

### `Data`

Values of a field of `DATA` type **MUST** be encoded as a hexadecimal string with a `0x` prefix matching the regular expression `^0x(?:[a-fA-F0-9]{2})*$`.

- A `Data` value **MUST** be hex-encoded.
- A `Data` value **MUST** be ???0x???-prefixed.
- A `Data` value **MUST** be expressed using two hex digits per byte.

### `Block Identifier`

Since there is no way to clearly distinguish between a `Data` parameter and a `Quantity` parameter, [EIP-1898](https://eips.ethereum.org/EIPS/eip-1898) provides a format to specify a block either using the block hash or block number. The block identifier is a JSON `object` with the following fields:

| **Position** | **Name** | **Type** | **Description** |
| --- | --- | --- | --- |
| `0A` | `blockNumber` | `Quantity` | The block in the canonical chain with this number |
| `0B` | `blockHash` | `Data` | The block uniquely identified by this hash. The blockNumber and blockHash properties are mutually exclusive; exactly one of them must be set. |
| `1B` | `requireCanonical` | `boolean` | (optional) Whether to throw an error if the block is not in the canonical chain as described below. Only allowed in conjunction with the blockHash tag. Defaults to false. |

If the block is not found, the callee SHOULD raise a JSON-RPC error (the recommended error code is `-32001: Resource not found`. If the tag is `blockHash` and `requireCanonical` is `true`, the callee SHOULD additionally raise a JSON-RPC error if the block is not in the canonical chain (the recommended error code is `-32000: Invalid input` and in any case should be different than the error code for the block not found case so that the caller can distinguish the cases). The block-not-found check SHOULD take precedence over the block-is-canonical check, so that if the block is not found the callee raises block-not-found rather than block-not-canonical.


## Errors

The list of error codes introduced by this specification can be found below.

| Code | Message | Meaning |
| - | - | - |
| -32700 | Parse error | Invalid JSON was received by the server. |
| -32600 | Invalid Request | The JSON sent is not a valid Request object. |
| -32601 | Method not found | The method does not exist / is not available. |
| -32602 | Invalid params | Invalid method parameter(s). | 
| -32603 | Internal error | Internal JSON-RPC error. |
| -32000 | Server error | Generic client error while processing request. |
| -38001 | Unknown payload | Payload does not exist / is not available. |
| -38002 | Invalid payload attributes | Payload attributes are invalid / inconsistent. |

Each error returns a `null` `data` value, except `-32000` which returns the `data` object with a `err` member that explains the error encountered.


### Authorization Error Codes

| Code | Possible Return message | Description |
| --- | --- | --- |
| 1 | Unauthorized | Should be used when some action is not authorized, e.g. sending from a locked account. |
| 2 | Action not allowed | Should be used when some action is not allowed, e.g. preventing an action, while another depending action is processing on, like sending again when a confirmation popup is shown to the user (?). |
| 3 | Execution error | Will contain a subset of custom errors in the data field. See below. |

### Ethereum Error Codes

Custom error `3` can contain custom error(s) to further explain what went wrong.  
They will be contained in the `data` field of the RPC error message as follows:

| Code | Possible Return message | Description |
| --- | --- | --- |
| 100 | X doesn???t exist | Should be used when something which should be there is not found. (Doesn???t apply to eth_getTransactionBy\_ and eth_getBlock\_. They return a success with value `null`) |
| 101 | Requires ether | Should be used for actions which require something else, e.g. gas or a value. |
| 102 | Gas too low | Should be used when a to low value of gas was given. |
| 103 | Gas limits exceeded | Should be used when a limit is exceeded, e.g. for the gas limit in a block. |
| 104 | Rejected | Should be used when an action was rejected, e.g. because of its content (too long contract code, containing wrong characters ?, should differ from `-32602` - Invalid params). |
| 105 | Ether too low | Should be used when a to low value of Ether was given. |

| Code | Possible Return message | Description                                                             |
| ---- | ----------------------- | ----------------------------------------------------------------------- |
| 106  | Timeout                 | Should be used when an action timedout.                                 |
| 107  | Conflict                | Should be used when an action conflicts with another (ongoing?) action. |

| **Parameters** | **Description** |
| --- | --- |
| txs | Array[String], A list of signed transactions to execute in an atomic bundle |
| blockNumber | String, a hex encoded block number for which this bundle is valid on |
| minTimestamp(Optional) | Number, the minimum timestamp for which this bundle is valid, in seconds since the unix epoch |
| maxTimestamp(Optional) | Number, the minimum timestamp for which this bundle is valid, in seconds since the unix epoch |
| revertingTxHashes(Optional) | Array[String], list of tx hashes within the bundle that are allowed to revert |

### References

- [EIP-1474](https://eips.ethereum.org/EIPS/eip-1474)
- [Flashbots v0.6](https://github.com/flashbots/flashbots-docs/blob/main/docs/flashbots-auction/miners/mev-geth-spec/v06-rpc.mdx)
- [EIP 1474 Remote procedure call specification](https://eips.ethereum.org/EIPS/eip-1474)
- [v0.6.0, flashbots documentation](https://raw.githubusercontent.com/flashbots/flashbots-docs/main/docs/flashbots-auction/miners/mev-geth-spec/v06-rpc.mdx)

- [v1.0.0-alpha.9, Ethereum Execution API](https://github.com/ethereum/execution-apis)
