---
title: What is OpenMEV?
sidebar_position: 1
slug: /
---

# OpenMEV

> documentation and reference material for OpenMEV

### What is OpenMEV?

OpenMEV aims to provide a credible neutral platform for facilitating both aggregation and direct communication channels
between block validators, block producers and block synchronizers for the Ethereum and EVM-based networks.

Example use cases include:

- users that would like to communicate their preferred transaction order within a block.
- Account abstraction via private mempool

> OpenMEV is built on top of SecureRPC. SecureRPC provides users with an accessible, convenient and secure
> infrastructure for transaction routing and execution.

- More accessible: allow ordinary users to easily discover the trading risk and value on the blockchain network.
- More convenient: enable the arbitrage traders more opportunities to increase profits at a low cost.
- More secure: make transactions on the blockchain network more secure and private.

### What is `credible neutrality`?

> "...that it is not just neutrality that is required here, it is credible neutrality. That is, it is not just enough
> for a mechanism to not be designed to favor specific people or outcomes over others; it's also crucially important for
> a mechanism to be able to convince a large and diverse group of people that the mechanism at least makes that basic
> effort to be fair."
>
> - Vitalik Buterin, [credible neutrality as a guiding principle](https://nakamoto.com/credible-neutrality/)

This ethos is at the heart of OpenMEV. Part of establishing credible neutrality is having a clear and comprehensive rule
book that regulates off-chain behavior and activities. Our assumption concerning governance is that methods and
processes that work in legacy markets may not be applicable in adversarial environments such as permissionless blockchains. With that understanding it is important not to rely solely on such systems and mechanics long term.

> Discuss this and more on our [discourse forums](https://forums.manifoldfinance.com)

:::info
[MEV or Maximal Extractable Value](https://medium.com/-research/we-live-in-a-mempool-backrunning-the-mev-crisis-a4ea0b493b05)
is the value of the ability to order transactions within a block or blocks.

- Tom Schmidt, Dragonfly Capital 
:::

## Getting started

OpenMEV consists of several components. If you want to learn more about the way it works, go to our
[technical overview](/technical-reference/intro). If you have an application or a service that needs a system to prevent
MEV attacks, you can read our guides on how to integrate our SDK.
