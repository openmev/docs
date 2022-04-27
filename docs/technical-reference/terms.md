---
title: Terms
version: 2022.04
---

# Terms

> Define Methods

## Sandwich Attacks

1. `TA1` and `TA2` are included in the same block and in this order.

2. `TA1` and `TA2` have different transaction hashes.

3. `TA1` and `TA2` swap assets in the same liquidity pool, but in opposite directions. The input amount for the swap in `TA2` is equal to the output amount of the swap in `TA1`.

4. Every transaction `TA2` is mapped to exactly one transaction `TA1`.

A sandwich attack can be successful, even if `TA1` and `TA2` are placed in different blocks. 
However, attackers want `TA1` and `TA2` to be included in one block, as additional swaps in the same pool could endanger their profit. 

Heuristic 1 allows us to find a lower bound of all sandwich attacks.

[source, Analyzing and Preventing Sandwich Attacks in Ethereum, Patrick Züst ](https://pub.tik.ee.ethz.ch/students/2021-FS/BA-2021-07.pdf](https://pub.tik.ee.ethz.ch/students/2021-FS/BA-2021-07.pdf)
