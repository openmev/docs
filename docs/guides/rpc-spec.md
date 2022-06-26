---
title: SecureRpc API Spec
version: v2022.05
---

# SecureRpc Ethereum API

> Documentation for both SecureRpc/OpenMEV

This API aims to be flashbots **compatible** and ethereum execution API **compatible**.

## eth_sendBundle

### Description

Sends a bundle of transactions to the miner. The bundle has to be executed at the beginning of the block (before any other transactions), with bundle transactions executed exactly in the same order as provided in the bundle. During the Flashbots Alpha this is only called by the Flashbots relay.

| Name              | Type          | Description                                                                                                                                    | Comment                           |
| ----------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| txs               | `Array<Data>` | Array of signed transactions (`eth_sendRawTransaction` style, signed and RLP-encoded)                                                          | a no-op in the light mode         |
| blockNumber       | `Quantity`    | Exact block number at which the bundle can be included.                                                                                        | bundle is evicted after the block |
| minTimestamp      | `Quantity`    | Minimum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable.                  |
| maxTimestamp      | `Quantity`    | Maximum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable.                  |
| revertingTxHashes | Array<`Data`> | Array of tx hashes within the bundle that are allowed to cause the EVM execution to revert without preventing the bundle inclusion in a block. |

### Returns

{`boolean`} - `true` if bundle has been accepted by the node, otherwise `false`

### Example

```bash
# Request
curl -X POST -H 'Content-Type: application/json' --data '{
    "id": 1337,
    "jsonrpc": "2.0",
    "method": "eth_sendBundle",
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

## eth_sendMegabundle

### Description

Sends a megabundle to the miner. The megabundle has to be executed at the beginning of the block (before any other transactions), with bundle transactions executed exactly in the same order as provided in the bundle. Can only be called by a relay listed in the `miner.trustedrelays` config.

| Name              | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Comment                           |
| ----------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| txs               | `Array<Data>` | Array of signed transactions (`eth_sendRawTransaction` style, signed and RLP-encoded)                                                                                                                                                                                                                                                                                                                                                                          | a no-op in the light mode         |
| blockNumber       | `Quantity`    | Exact block number at which the bundle can be included.                                                                                                                                                                                                                                                                                                                                                                                                        | bundle is evicted after the block |
| minTimestamp      | `Quantity`    | Minimum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable.                                                                                                                                                                                                                                                                                                                                  |
| maxTimestamp      | `Quantity`    | Maximum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable.                                                                                                                                                                                                                                                                                                                                  |
| revertingTxHashes | Array<`Data`> | Array of tx hashes within the bundle that are allowed to cause the EVM execution to revert without preventing the bundle inclusion in a block.                                                                                                                                                                                                                                                                                                                 |
| relaySignature    | Array<`Data`> | An secp256k1 signature signed with an address from the `miner.trustedrelays`. Message signed is a Keccak hash of RLP serialized sequence that contains the following items: array of txs (a sequence of byte arrays representing RLP serialized txs); minTimestamp serialized as an int256, like in the devp2p specification; maxTimestamp serialized as an int256, like in the devp2p specification; revertingTxHashes serialized as an array of byte arrays. |

### Returns

{`boolean`} - `true` if megabundle has been accepted by the node, otherwise `false`

### Example

```bash
# Request
curl -X POST -H 'Content-Type: application/json' --data '{
    "id": 1337,
    "jsonrpc": "2.0",
    "method": "eth_sendMegabundle",
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

# Response
{
    "id": 1337,
    "jsonrpc": "2.0",
    "result": true
}
```

## eth_sendPrivateRawTransaction

### Description

Sends a raw transaction to be included for block construction. Transaction is marked as private which means that it will not be broadcast to any other node for as long as the configured `txpool.privatetxlifespan` in hours. Except for the no broadcast rule the transaction should be treated equally with all the public transaction pool transactions.

| Name  | Type          | Description                                                                 |
| ----- | ------------- | --------------------------------------------------------------------------- |
| input | `Array<Data>` | Signed transaction (`eth_sendRawTransaction` style, signed and RLP-encoded) |

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

## eth_callBundle

### Description

Simulate a bundle of transactions at the top of a block.

After retrieving the block specified in the `blockNrOrHash` it takes the same `blockhash`, `gasLimit`, `difficulty`, same `timestamp` unless the `blockTimestamp` property is specified, and increases the block number by `1`. `eth_callBundle` will timeout after `5` seconds.

| Name             | Type                                 | Description                                                                                     |
| ---------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| txs              | `Array<Data>`                        | Array of signed transactions (`eth_sendRawTransaction` style, signed and RLP-encoded)           |
| blockNumber      | `Quantity`                           | A hex encoded block number for which this bundle is valid on                                    |
| stateBlockNumber | `Quantity\|string\|Block Identifier` | Either a hex encoded number or a {Block Identifier} for which state to base this simulation on. |
| timestamp        | `Quantity`                           | Block timestamp to be used in replacement of the timestamp taken from the parent block.         |

### Returns

Map<`Data`, "error|value" : `Data`> - a mapping from transaction hashes to execution results with error or output (value) for each of the transactions

### Example

```bash
# Request
curl -X POST -H 'Content-Type: application/json' --data '{
    "id": 1337,
    "jsonrpc": "2.0",
    "method": "eth_callBundle",
    "params": [
        {
            "txs": [
                "0x02f8b30181b18502cb417800853a352944008307a12094b893a8049f250b57efa8c62d51527a22404d7c9a80b844095ea7b300000000000000000000000093e17e368e82dd24bed931091f831b5bed3f711effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc080a027148354c23bb016147ed68014b2aa13c43a4feef36274be88ef58d25f91e20fa05ccc423d4e9e1de88515adf3245df69db8c05b1ce345a738c75b06c87a96f878",
                "0x02f8b30181b28502cb417800853a352944008307a12094d5281bb2d1ee94866b03a0fccdd4e900c8cb509180b844095ea7b300000000000000000000000093e17e368e82dd24bed931091f831b5bed3f711effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc001a042f32acc8631c8c1c81d3d77a637cdab162477077d5041285ea7d73313d6b02ca07b18b432f4921795f84916b3c9398e2fd65580e372b9fa7e018e543ffbc00375"
            ],
            "blockNumber": "0xce7b22",
            "stateBlockNumber": "0xce7b21"
        }
    ]
}' <url>

# Response
{
  "jsonrpc": "2.0",
  "id": 1337,
  "result": {
    "bundleGasPrice": "12000000000",
    "bundleHash": "0xa1433fce883764809a94a5320e4557102f5a3fdd98dabd8cd48773b0eca00666",
    "coinbaseDiff": "707448000000000",
    "ethSentToCoinbase": "0",
    "gasFees": "707448000000000",
    "results": [
      {
        "coinbaseDiff": "354300000000000",
        "ethSentToCoinbase": "0",
        "fromAddress": "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",
        "gasFees": "354300000000000",
        "gasPrice": "12000000000",
        "gasUsed": 29525,
        "toAddress": "0xB893A8049f250b57eFA8C62D51527a22404D7c9A",
        "txHash": "0x2425790f3031b66981e091cf96e2d29bdd12f47b334557462a0d482b2f057490",
        "value": "0x0000000000000000000000000000000000000000000000000000000000000001"
      },
      {
        "coinbaseDiff": "353148000000000",
        "ethSentToCoinbase": "0",
        "fromAddress": "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",
        "gasFees": "353148000000000",
        "gasPrice": "12000000000",
        "gasUsed": 29429,
        "toAddress": "0xd5281BB2d1eE94866B03A0fcCDd4e900c8Cb5091",
        "txHash": "0xf130358842db89e12d17fe1b35556adbe66497764921a92fda83571d8a2dcc72",
        "value": "0x0000000000000000000000000000000000000000000000000000000000000001"
      }
    ],
    "stateBlockNumber": 13531937,
    "totalGasUsed": 58954
  }
}
```

## Validation and Types

Below type description can also be found in [EIP-1474](https://eips.ethereum.org/EIPS/eip-1474)

### `Quantity`

Values of a field of `QUANTITY` type **MUST** be encoded as a hexadecimal string with a `0x` prefix and the leading 0s stripped (except for the case of encoding the value `0`) matching the regular expression `^0x(?:0|(?:[a-fA-F1-9][a-fA-F0-9]*))$`.

-   A `Quantity` value **MUST** be hex-encoded.
-   A `Quantity` value **MUST** be "0x"-prefixed.
-   A `Quantity` value **MUST** be expressed using the fewest possible hex digits per byte.
-   A `Quantity` value **MUST** express zero as "0x0".

### `Data`

Values of a field of `DATA` type **MUST** be encoded as a hexadecimal string with a `0x` prefix matching the regular expression `^0x(?:[a-fA-F0-9]{2})*$`.

-   A `Data` value **MUST** be hex-encoded.
-   A `Data` value **MUST** be “0x”-prefixed.
-   A `Data` value **MUST** be expressed using two hex digits per byte.

### `Block Identifier`

Since there is no way to clearly distinguish between a `Data` parameter and a `Quantity` parameter, [EIP-1898](https://eips.ethereum.org/EIPS/eip-1898) provides a format to specify a block either using the block hash or block number. The block identifier is a JSON `object` with the following fields:

| Position | Name             | Type       | Description                                                                                                                                                                       |
| -------- | ---------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0A       | blockNumber      | `Quantity` | The block in the canonical chain with this number                                                                                                                                 |
| 0B       | blockHash        | `Data`     | The block uniquely identified by this hash. The blockNumber and blockHash properties are mutually exclusive; exactly one of them must be set.                                     |
| 1B       | requireCanonical | `boolean`  | (optional) Whether or not to throw an error if the block is not in the canonical chain as described below. Only allowed in conjunction with the blockHash tag. Defaults to false. |

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

| **Parameters**              | **Description**                                                                               |
| --------------------------- | --------------------------------------------------------------------------------------------- |
| txs                         | Array[String], A list of signed transactions to execute in an atomic bundle                   |
| blockNumber                 | String, a hex encoded block number for which this bundle is valid on                          |
| minTimestamp(Optional)      | Number, the minimum timestamp for which this bundle is valid, in seconds since the unix epoch |
| maxTimestamp(Optional)      | Number, the minimum timestamp for which this bundle is valid, in seconds since the unix epoch |
| revertingTxHashes(Optional) | Array[String], list of tx hashes within the bundle that are allowed to revert                 |

### References

-   [EIP-1474](https://eips.ethereum.org/EIPS/eip-1474)
-   [Flashbots v0.6](https://github.com/flashbots/flashbots-docs/blob/main/docs/flashbots-auction/miners/mev-geth-spec/v06-rpc.mdx)
-   [EIP 1474 Remote procedure call specification](https://eips.ethereum.org/EIPS/eip-1474)
-   [v0.6.0, flashbots documentation](https://raw.githubusercontent.com/flashbots/flashbots-docs/main/docs/flashbots-auction/miners/mev-geth-spec/v06-rpc.mdx)

-   [v1.0.0-alpha.9, Ethereum Execution API](https://github.com/ethereum/execution-apis)
