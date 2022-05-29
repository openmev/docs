#### eth_getTransactionCount

##### Description

Returns the number of transactions sent from an address

##### Parameters

| # | Type | Description |
| --- | --- | --- |
| 1 | {[`Data`](#data)} | address to query for sent transactions |
| 2 | {[`Quantity`](#quantity)\|`string`\|[`Block Identifier`](#block-identifier)} | block number, or one of `"latest"`, `"earliest"` or `"pending"`, or a block identifier as described in [`Block Identifier`](#block-identifier) |

##### Returns

{[`Quantity`](#quantity)} - number of transactions sent from the specified address

##### Example

```sh
# Request
curl -X POST --data '{
    "id": 1337,
    "jsonrpc": "2.0",
    "method": "eth_getTransactionCount",
    "params": ["0xc94770007dda54cF92009BFF0dE90c06F603a09f", "latest"]
}' <url>

# Response
{
    "id": 1337,
    "jsonrpc": "2.0",
    "result": "0x1"
}
```
