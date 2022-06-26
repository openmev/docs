---
title: eth_getUncleByBlockHashAndIndex
version: 2022.04
tags: ["json rpc", "gateway", "api"]
---

#### eth_getUncleByBlockHashAndIndex

##### Description

Returns information about an uncle specified by block hash and uncle index position

##### Parameters

| #   | Type                      | Description     |
| --- | ------------------------- | --------------- |
| 1   | {[`Data`](#data)}         | hash of a block |
| 2   | {[`Quantity`](#quantity)} | index of uncle  |

##### Returns

{`null|object`} - `null` if no block or uncle is found, otherwise an uncle object with the following members:

-   {[`Data`](#data)} `extraData` - "extra data" field of this block
-   {[`Data`](#data)} `hash` - block hash or `null` if pending
-   {[`Data`](#data)} `logsBloom` - logs bloom filter or `null` if pending
-   {[`Data`](#data)} `miner` - address that received this block's mining rewards
-   {[`Data`](#data)} `nonce` - proof-of-work hash or `null` if pending
-   {[`Data`](#data)} `parentHash` - parent block hash
-   {[`Data`](#data)} `receiptsRoot` -root of the this block's receipts trie
-   {[`Data`](#data)} `sha3Uncles` - SHA3 of the uncles data in this block
-   {[`Data`](#data)} `stateRoot` - root of this block's final state trie
-   {[`Data`](#data)} `transactionsRoot` - root of this block's transaction trie
-   {[`Quantity`](#quantity)} `difficulty` - difficulty for this block
-   {[`Quantity`](#quantity)} `gasLimit` - maximum gas allowed in this block
-   {[`Quantity`](#quantity)} `gasUsed` - total used gas by all transactions in this block
-   {[`Quantity`](#quantity)} `number` - block number or `null` if pending
-   {[`Quantity`](#quantity)} `size` - size of this block in bytes
-   {[`Quantity`](#quantity)} `timestamp` - unix timestamp of when this block was collated
-   {[`Quantity`](#quantity)} `totalDifficulty` - total difficulty of the chain until this block
-   {`Array<Transaction>`} `uncles` - list of uncle hashes

##### Example

```sh
# Request
curl -X POST --data '{
    "id": 1337,
    "jsonrpc": "2.0",
    "method": "eth_getUncleByBlockHashAndIndex",
    "params": ["0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b", "0x0"]
}' <url>

# Response
{
    "id": 1337,
    "jsonrpc": "2.0",
    "result": {
        "difficulty": "0x027f07",
        "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "gasLimit": "0x9f759",
        "gasUsed": "0x9f759",
        "hash": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
        "logsBloom": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
        "miner": "0x4e65fda2159562a496f9f3522f89122a3088497a",
        "nonce": "0xe04d296d2460cfb8472af2c5fd05b5a214109c25688d3704aed5484f9a7792f2",
        "number": "0x1b4",
        "parentHash": "0x9646252be9520f6e71339a8df9c55e4d7619deeb018d2a3f2d21fc165dde5eb5",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size":  "0x027f07",
        "stateRoot": "0xd5855eb08b3387c0af375e9cdb6acfc05eb8f519e419b874b6ff2ffda7ed1dff",
        "timestamp": "0x54e34e8e"
        "totalDifficulty":  "0x027f07",
        "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "uncles": []
    }
}
```
