---
sidebar_position: 2
title: Transaction Rebating
---

## Contract Functions

> SushiswapV1

## List of Transactions by Contract Function

_Note_: Function calls listed at 0 are not eligible at this time, however we
fully plan on expanding coverage to additional functions in the future

|                    **$function_calls**                    | **%eligible** |
| :-------------------------------------------------------: | :-----------: |
|                 swapExactTokensForTokens                  |      100      |
|                   swapExactTokensForETH                   |      100      |
|                   swapExactETHForTokens                   |      100      |
|                   swapETHForExactTokens                   |      100      |
|                       getAmountsOut                       |       0       |
|                      addLiquidityETH                      |       0       |
|                       addLiquidity                        |       0       |
|                 swapTokensForExactTokens                  |      100      |
|                       getAmountOut                        |       0       |
|               removeLiquidityETHWithPermit                |      100      |
|                   swapTokensForExactETH                   |      100      |
|                 removeLiquidityWithPermit                 |       0       |
|                    removeLiquidityETH                     |       0       |
|                      removeLiquidity                      |       0       |
|                          factory                          |       0       |
|    swapExactTokensForETHSupportingFeeOnTransferTokens     |       0       |
|   swapExactTokensForTokensSupportingFeeOnTransferTokens   |       0       |
|                       getAmountsIn                        |       0       |
|                           WETH                            |       0       |
|    swapExactETHForTokensSupportingFeeOnTransferTokens     |       0       |
|                        getAmountIn                        |       0       |
| removeLiquidityETHWithPermitSupportingFeeOnTransferTokens |       0       |
|      removeLiquidityETHSupportingFeeOnTransferTokens      |       0       |

### Transaction Pricing

For more detailed document detailing the v2 api, [see this specification document](https://hackmd.io/@sbacha/price-network-outage)

**maxPrice** Highest priced transaction in the mempool

**currentBlockNumber** Block number at the time of prediction

**msSinceLastBlock** Milliseconds since the last block was mined relative to
when data was computed

**blockNumber** Block this prediction is for

**baseFeePerGas** Base fee per gas for current block in gwei. (Only type2
transactions Post EIP-1559 have this value and it's burned by the network upon
transaction success). estimatedTransactionCount Number of items we estimate will
be included in next block based on mempool snapshot

**confidence** 0-99 likelihood the next block will contain a transaction with a
gas price >= to the listed price

**Price** Price in Gwei (used for type0 transactions: Pre EIP-1559)

**maxPriorityFeePerGas** Max priority fee per gas in gwei also known as the
"tip" (used for type2 transactions: EIP-1559)

**maxFeePerGas** Max fee per gas in gwei (used for type2 transactions:
EIP-1559). Our current max fee heuristic is Base Fee \* 2 + Priority Fee. This
is to protect against a 'rapid' rise in the base fee while your transaction fee
is pending. In most cases, the actual transaction fee will approximate Base
Fee + Priority Fee.

**networkCongestion** A normalized number that can be used to gauge the congestion level of the network, with 0 meaning not congested and 1 meaning extremely congested

**networkOutage**
networkOutage - A true/false indicating a recognized network outage event. True means we are currently experiencing a network outage
