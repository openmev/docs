---
created: 2022-06-14T20:44:13 (UTC -07:00)
source: https://notes.ethereum.org/@barnabe/rk5ue1WF_
title: maxPriorityFee Calculations
---

# maxPriorityFee

`maxPriorityFee` is calculated using the methodology below.

## Overview

For implemntations such as that used in the Sushiswap frontend, it is currently defined as:

```typescript
  maxPriorityFee: BigNumber.from("1750000000") ?? undefined, // 1_750_000_000 in `wei`
```

> NOTE. Both Ethersjs and Web3js hardcode this value, [see issue for ethersjs](https://github.com/ethers-io/ethers.js/issues/1817), and [for web3js this issue](https://github.com/ChainSafe/web3.js/pull/4277)

## Methodology

> Uncle risk/MEV miner fee calculation - Call `T_` the transaction fees netted by MEV transactions

-   Call $T_{MEV}$ the transaction fees netted by MEV transactions (in Gwei)
-   MEV transactions use an amount of gas $g_{MEV}$
-   Non-MEV transactions pay a miner fee $\delta$ (in Gwei per gas unit)
-   Non-MEV transactions use $g_N$ gas
-   The whole block (MEV + non-MEV) uses $g = g_{MEV} + g_N$ gas
-   The block reward is $R$ (in Gwei)
-   The uncle reward is $U$ (in Gwei)
-   There is a rate $p$ such that for each unit of gas added in the block, the uncle risk increases by $p$. It was once measured that 10M gas adds about 2.5% risk, so we take $p = 2.5 \times 10^{-9}$

The expected revenue from a block including only MEV transactions is

$$
A = (1-pg_{MEV}) (R + T_{MEV}) + pg_{MEV} U
$$

The expected revenue from a block providing $g$ gas in total is

$$
B = (1-pg) (R + T_{MEV} + \delta g_N) + pgU
$$

We look for $\delta$ such that $B \geq A$, which yields

$$
\delta \geq \frac{p(R + T_{MEV} - U)}{1-pg}
$$

Note that as $p$ decreases, so does the required miner fee.

![](https://storage.googleapis.com/ethereum-hackmd/upload_61fd15eacb8798e9efa5ba04fb4d57fc.png)  
_With $p = 2.0 \times 10^{-9}$_

### Jupyter Notebook

[Notebook source](https://github.com/ethereum/abm1559/blob/master/notebooks/uncle_risk.ipynb)

## Citations

Barnabe Monnot, Ethereum Foundation: "Uncle risk/MEV miner fee calculation", <br />
<https://notes.ethereum.org/@barnabe/rk5ue1WF>; Accessed 2022 June 14th.
