---
title: Transaction Status
description: API Endpoint for Querying your Transaction Status
version: v2022.05
sidebar_position: 5
---

# Transaction Status API

> API Endpoint for Querying your Transaction Status

Transactions that you submit to OpenMEV won't be observable in the public mempool.

<!-- prettier-ignore -->
:::caution 
This documentation refers to the latest version of OpenMEV ([v2.0.0-draft](#)), which is still being drafted 
:::

## Potential statuses

- `PENDING` - The transaction was received and is currently being submitted to miners
- `INCLUDED` - The transaction was included on-chain
- `FAILED` - The transaction was submitted for 25 blocks and failed to be included on-chain
- `CANCELLED` - The transaction was cancelled by the user and not included on-chain
- `UNKNOWN` - The transaction was not received

## Privacy

In order to receive a response from the status API you must provide a valid transaction hash to look up.

## Response Message

OpenMEV Status API is flashbots compatible, meaning it covers at least version 0.6+ of Flashbots API.

To check the status of your transactions query the OpenMEV API Endpoint. Response messages are formatted as follows:

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

## Typescript Library

```ts twoslash
// @see {@link https://github.com/manifoldfinance/libsushi/blob/master/src/SushiGuard/index.ts}
/**
 * @package OpenMevTxState
 * @version 2022.04
 * @see {@link docs.openmev.org}
 * @notice This is a flashbots-api compatible interface ( ~v0.6 )
 *
 * - UNCHECKED -> Tx status has not been checked and there's no information about it.
 * - PROCESSING -> Tx checks are in place until a resolution happens: OK, INDETERMINATE, ERROR.
 * - OK -> Relay received the Tx && all downstream miners accepted without complains && tx mined successfully
 * - INDETERMINATE -> Relay received correctly the Tx && at least one miner accepted the TX && TX potentially mineable
 * - ERROR -> Relay hasn't received the TX || none of the miners accepted the Tx || Tx was not mined successfully
 *
 */

/**
 * @export
 * @interface JsonRpcError
 */
export interface JsonRpcError {
  code: number;
  message: string;
  data?: unknown;
}

/**
 * @export
 * @interface JsonRpcResponse
 * @template T
 */
export interface JsonRpcResponse<T> {
  jsonrpc: '2.0';
  id?: number | string | null;
  result?: T;
  error?: JsonRpcError;
}

export enum PrivateTxState {
  UNCHECKED = 'UNCHECKED',
  PROCESSING = 'PROCESSING',
  OK = 'OK',
  INDETERMINATE = 'INDETERMINATE',
  ERROR = 'ERROR',
}

export type RelayResponses = Record<string, RelayResponse>;

export interface RelayResponse {
  response: JsonRpcResponse<any>;
  error?: string;
}

export interface PrivateTxStatus {
  transactionHash: string;
  receivedAt: string;
  relayedAt?: string;
  minedAt?: string;
  relayFailure?: boolean;
  relayResponses?: RelayResponses;
}
```

