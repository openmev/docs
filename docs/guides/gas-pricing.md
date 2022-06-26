---
sidebar_position: 2
title: Gas Pricing API
---

## `api.txprice.com`

### Usage

#### Get Ethereum Transaction Pricing

```bash
curl -L api.txprice.com
```

#### Get Pricing at 95% confidence interval

```bash
curl -s -L api.txprice.com | jq .blockPrices[0].estimatedPrices[1]
```

```json
{
    "confidence": 95,
    "price": 107,
    "maxPriorityFeePerGas": 2.52,
    "maxFeePerGas": 212.92
}
```

## OpenAPI

Returns a range of confidence intervals for gas prices needed to qualify a transaction for inclusion in the next block. Order of confidence intervals is subject to change.

##### Response

```jsonc
{
    "system": "ethereum",
    "network": "main",
    "unit": "gwei",
    "maxPrice": 123,
    "currentBlockNumber": 13005095,
    "msSinceLastBlock": 3793,
    "blockPrices": [
        {
            "blockNumber": 13005096,
            "baseFeePerGas": 94.647990462,
            "estimatedTransactionCount": 137,
            "estimatedPrices": [
                // json.blockPrices[0].estimatedPrices[0]
                {
                    "confidence": 99, // json.blockPrices[0].estimatedPrices[0].confidence
                    "price": 104, // json.blockPrices[0].estimatedPrices[0].price
                    "maxPriorityFeePerGas": 9.86, // json.blockPrices[0].estimatedPrices[0].maxFeePerGas
                    "maxFeePerGas": 199.16 // json.blockPrices[0].estimatedPrices[0].maxFeePerGas
                },
                {
                    "confidence": 95,
                    "price": 99,
                    "maxPriorityFeePerGas": 5.06,
                    "maxFeePerGas": 194.35
                },
                {
                    "confidence": 90,
                    "price": 98,
                    "maxPriorityFeePerGas": 4.16,
                    "maxFeePerGas": 193.45
                },
                {
                    "confidence": 80,
                    "price": 97,
                    "maxPriorityFeePerGas": 2.97,
                    "maxFeePerGas": 192.27
                },
                {
                    "confidence": 70,
                    "price": 96,
                    "maxPriorityFeePerGas": 1.74,
                    "maxFeePerGas": 191.04
                }
            ]
        }
    ]
}
```
