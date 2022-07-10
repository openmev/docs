---
sidebar_position: 1
id: docs-guidelines
title: Contributing and Community Dogma
description: Contributing and Community Dogma and Social Rules
---

# Contributing and Community Dogma

:::caution

These guidelines are a **living document**

:::

## Preface

This document is **largely** taken from/inspired by John A. De Goes. More specifically, the articles, ["ZIO Professionalism"](https://degoes.net/articles/zio-professionalism), ["Big Tent"](https://degoes.net/articles/big-tent), and ["Travis Brown, Abuser"](https://degoes.net/articles/travis-brown-abuser). Without his insight, this guideline would not be where it is today.

## Motivation

Manifold Finance (and by extension, OpenMEV) supports the right of every OSS engineer/developer to contribute on their terms, whatever those terms may be. Non-paying users of free software should not get to dictate these terms.

Moreover, OpenMEV's stated objective of being a credible neutral org means that we must explicitly codify and formalize our ideals so that as it 'expands', there is a codified expectation of behavior from all contributors. _See 'Conquest's Second Law'_

There is an ongoing effort to corrupt effort the fundamental premises of the open-source culture. Instead of meritocracy and "show me the code"; we are now urged to behave so that no one will ever feel uncomfortable.

The effect – **the intended effect – is to diminish the prestige and autonomy of people who do the work** – write the code – in favor of self-appointed tone-policers. In the process, the freedom to speak necessary truths even when how they are expressed is unpleasant is being gradually strangled.

> This is undesirable as it both directly damages our self-correction process – and in its second-order effects. The habit of institutional tone policing, even when well-intentioned, too easily slides into the active censorship of disfavored views. --_The Right to be Rude_

The cost of a culture in which avoiding offense trumps the liberty to speak is that subverters control the discourse. As such we must not internalize anticipatory surrender to these subverters.

### Conquest’s Second Law.

1. Everyone is conservative about what he knows best.

2. Any organization not explicitly right-wing sooner or later becomes left-wing.

3. The simplest way to explain the behavior of any bureaucratic organization is to assume that it is controlled by a cabal of its enemies.

We can take this 'Second Law' in the contrapositive argument to mean:

> Any organization that does not wish to end up left-wing must become explicitly and constitutionally right-wing.

Which we can reduce to the following principle:

> Any organization that does not wish to end up corrupted by ideological malcontents must explicitly codify and aggressively enforce its ideals.

Any organization that does not wish to end up corrupted by ideological malcontents must explicitly codify and aggressively enforce its ideals. As an organization grows and becomes more complex, it ends up acting primarily to ensure its perpetuation. The purpose for which it was founded becomes secondary to its survival. In fact, for many in the organization, possibly the vast majority, its continued survival becomes confused with the purpose it was originally founded to deliver. This can lead to behaviors that seem rational when viewed from the perspective of perpetuating the organization but look counter-intuitive when considered from the perspective of what the organization ostensibly exists to do. [^3, Tracking down conquests' [law on ](https://vogelwakefield.com/2018/12/tracking-down-conquests-law-on-organisations/)organizations](https://vogelwakefield.com/2018/12/tracking-down-conquests-law-on-organisations/)

:::info

An example is when **DerbyCon** shutdown [citing the increasing difficulty of holding conferences in the face of "a small, yet vocal group of people creating negativity, polarization, and disruption](https://web.archive.org/web/20190428142347/https://www.derbycon.com/blog/derbycon-9-0-every-beginning-has-an-end/#:~:text=This%20year%2C%20we,were%20in%20tears).[^4]

:::

## Principles

We must recognize that the actions of other organizations, protocols, etc. may have undesirable side effects on the OpenMEV community (and Ethereum at large):

-   They undermine the trust that end-users and companies place in Ethereum
-   They increase the risk involved in deploying solutions based on Ethereum
-   They decrease the network value of Ethereum
-   They make OpenMEV look unprofessional to many developers, especially compared to the Ethereum/other ecosystems where major OSS projects would never behave in such a fashion

Effective immediately, OpenMEV shall codify and will support the following:

### Pro Community

-   **Pro-Community**. All OpenMEV projects will gladly accept and host integrations for Flashbots, Eden Network, and other MEV or EVM ecosystems, without consideration of the relationships, dispositions, or politics between these projects and those ecosystems, and they will provide non-discriminatory support for end-users, regardless of their disposition to or affiliation or association with other OpenMEV community members or ecosystems.

-   _pro-community_, as OpenMEV hosts integrations for Sushiswap projects _swaps_ and _bentobox_, and hosts integrations for _OlympusDAO_,_LayerZero_ to date. Conflicting incentives should be considered and debated if it is possible that adding support for another project would conflict with existing integrations. However, I believe that making this behavior official will further increase trust and expand integrations, and also clearly set expectations for new projects being integrated into the OpenMEV solution sets.

### Pro Professionalism

-   **Pro-Professionalism**. Although behavior within the OpenMEV organization projects is already governed by the [OpenMEV Code of Conduct](#), I want to strengthen this code of conduct by making it clear that ad hominem and career sabotage have no place within the community. Projects in the OpenMEV organization exist only to help engineers and developers solve problems, regardless of their religion, political affiliation, race, or disposition to or affiliation or association with other OpenMEV community members or ecosystems.

-   _pro-professionalism_, within OpenMEV official spaces (GitHub, Discourse, etc.), I have only ever seen welcoming, inclusive, and non-discriminatory behavior, without ad hominem or career sabotage. But explicitly committing to this high standard of professionalism can only help to set expectations and provide guidance for everyone as the organization continues to grow.

### The Ethereum Ecosystem

It is not necessary that open source contributors have the same views or even like each other. We must put Ethereum first, and by being pro-community and pro-professionalism, we can find a way to co-exist peacefully inside this big tent, and together, we can, in different ways and with different audiences, show the world that Ethereum is a force to reckon with.

## Social Rules

[These rules are adopted from recurse.com/manual#sec-environment](https://www.recurse.com/manual#sec-environment)

-   No well-actually's
-   No feigning surprise
-   No back-seat driving
-   No subtle -isms
-   Remember that everyone was new to Ethereum at some point.

### Why have social rules?

These rules are designed to help all of us build a pleasant, productive, and robust community. Part of being a credible neutral environment is having a baseline of interactions so that the environment does not introduce undesirable effects (social, political, drama, etc.)

## Coding Dogma

1. Warn the users about what’s buggy and unstable in your release notes and the rest of your documentation.

2. Document your assumptions where the user can see them.

3. Keep a `HACKING`/`ENGINEERING NOTES` somewhere accessible.

4. Make your build reproducible, or offer a packaged distribution of your code. Consider using [nix](https://nixos.org).

5. Have fun!

## License

This document is distributed under a [Creative Commons Attribution-ShareAlike license](https://creativecommons.org/licenses/by-sa/3.0/).

## Citations

> Citations and Attributions

<!-- prettier-ignore-start -->

The Scala Community, https://scala-lang.org/conduct/; 2022 June 10 <br /> 
The ZIO Community, https://github.com/zio; 2022 June 10 <br /> 
The Rust Code of Conduct, https://www.rust-lang.org/policies/code-of-conduct 2022 June 10 <br /> 
The Node.js Policy on Trolling, https://blog.izs.me/post/30036893703/policy-on-trolling 
<br /> ["ZIO Professionalism"](https://degoes.net/articles/zio-professionalism), 2022 June 10 <br /> 
["Big Tent"](https://degoes.net/articles/big-tent). 2022 June 10 <br /> 
["Travis Brown, Abuser"](https://degoes.net/articles/travis-brown-abuser). 2022 June 10 <br /> 
["The Right to be Rude"](http://esr.ibiblio.org/?p=8609), 2022 July 01 <br /> 
["Tracking down Conquest’s law on organisations", Martin Vogel](https://vogelwakefield.com/2018/12/tracking-down-conquests-law-on-organisations/), 2022 July 01 <br />
[DerbyCon2019 - Every Beginning has an End, DerbyCon Team](https://web.archive.org/web/20190428142347/https://www.derbycon.com/blog/derbycon-9-0-every-beginning-has-an-end/#:~:text=This%20year%2C%20we,were%20in%20tears).

<!-- prettier-ignore-end -->

#### Footnotes

[^4]: [See, DerbyCon Clarifications, Inclusiveness, and Gender](https://web.archive.org/web/20190428142347/https://www.derbycon.com/blog/derbycon-clarifications-inclusiveness-and-gender/#:~:text=However%2C%20we%20do,found%20so%20concerning)
