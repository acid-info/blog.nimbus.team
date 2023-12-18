---
layout: post
title: Nimbus - Execution Layer
description: It is a little known secret that, in addition to our consensus layer (eth2) client we are building out an execution layer (eth1) client - with the objective that it should be ready for the merge.
date: 2021-11-13T10:00
authors: sacha
published: true
---

# Nimbus: Execution Layer

<!-- truncate -->

![header-image](/posts/nimbus-execution-layer/header.png)

It is a little known secret that, in addition to our consensus layer (eth2) client we are building out an execution layer (eth1) client - with the objective that it should be ready for the merge.

Why is this important? One topical reason is client diversity.

> 1/ A diverse execution-layer client ecosystem is at the heart of all that we’re building together.  
> 
> Today, we're excited to announce that [@compoundgrants](https://twitter.com/compoundgrants?ref_src=twsrc%5Etfw), [@krakenfx](https://twitter.com/krakenfx?ref_src=twsrc%5Etfw), [@LidoFinance](https://twitter.com/LidoFinance?ref_src=twsrc%5Etfw), [@synthetix\_io](https://twitter.com/synthetix_io?ref_src=twsrc%5Etfw), [@graphprotocol](https://twitter.com/graphprotocol?ref_src=twsrc%5Etfw) & [@Uniswap](https://twitter.com/Uniswap?ref_src=twsrc%5Etfw) are donating $250K each to support [#Ethereum](https://twitter.com/hashtag/Ethereum?src=hash&ref_src=twsrc%5Etfw) client teams.
> 
> — Ethereum (@ethereum) [August 24, 2021](https://twitter.com/ethereum/status/1430124634104545288?ref_src=twsrc%5Etfw)

To put it simply, the more functional and performant clients we have on both layers (consensus + execution), the better and more resilient Ethereum stands to be.

> \* we already have the most client diversity out of any chain  
> 
> \* but we can do better. the beacon chain was built to incentivise this, and so stakers are pushed to run minority clients  
> 
> \* by having ensuring that no one client is dominant, we harden ourselves against bugs
> 
> — carlbeek.eth (@CarlBeek) [October 15, 2021](https://twitter.com/CarlBeek/status/1449126854498078722?ref_src=twsrc%5Etfw)

While **client diversity is crucial to a resilient Ethereum**, it alone would not warrant such a huge engineering effort on our part.

Our high level vision, and the main reason we're rolling our own execution layer client, is for **easy and seamless integration with Status** - both desktop and mobile.

> I can't wait to run Nimbus straight from Status Desktop [#hyped](https://twitter.com/hashtag/hyped?src=hash&ref_src=twsrc%5Etfw)
> 
> — Jarrad Hope | @ethstatus (@0xc1c4da) [August 12, 2020](https://twitter.com/0xc1c4da/status/1293473249347555334?ref_src=twsrc%5Etfw)

Such an integration requires a custom, embeddable, and ultra-efficient Ethereum client - across both execution and consensus layer environments.

### Relationship with Fluffy

To achieve the above requires us to optimize resource consumption in novel ways. At the execution layer, we aim to offer **a unique combination of lower space usage and faster sync.**

Our method of syncing, which we call beam-ish sync, will allow nodes to participate in the network early, while data sync continues in the background - this behaviour is similar to [Fluffy](https://our.status.im/nimbus-fluffly/) (our [Portal Network](https://www.ethportal.net/) light client) and our work there will be re-used here - the idea is that we'll eventually integrate Fluffy into our execution client.

In addition to integating Fluffy, one of our main design goals is to make it as easy as possible for our consensus and execution clients to be bundled into a single piece of software; this will drastically improve the UX of running a post-merge client, making it very similar to running a pre-merge PoW client today.

This ties into our overarching vision: to significantly lower the barrier to running both full nodes and light clients, and in doing so help make Ethereum as accessible and decentralised as possible.

> Decentralization is the cost to run a full node. Not because running a full node is inherently anything special, but because it's a means to an end: self-soverignty. Being able to detect when block producers try to change the rules that we the community all agree on.
> 
> — John Adler | ✨⛽ (@jadler0) [September 4, 2021](https://twitter.com/jadler0/status/1433985695396282372?ref_src=twsrc%5Etfw)

### Recent progress

Some highlights from the past 6 months include:

* Significantly expanded the team: meet [Jamie](https://github.com/jlokier) and [Jordan](https://github.com/mjfh)
  
* Renewed funding from the EF to accelerate  development
  
* Completed Berlin and London fork compatibility (EIP-1559): we now pass nearly all the EF Hive testsuite, and 100% of contract execution tests (47,951 tests)
  
* New GraphQL and WebSocket APIs, complementing JSON-RPC
  
* EVMC compatibility, supporting third-party optimised EVM plugins. Up to 100x memory saving during contract executions. Asynchronous EVM to execute many contracts in parallel (while they wait for data from the network)
  
* Proof-of-authority validation for the Goerli test network. Updated network protocols, to work with the latest eth/65-66 and snap/1 protocols
  
* A prototype new mechanism for state sync which combines what have been called Fast sync, Snap sync and Beam sync in a self-tuning way, and allows the user to participate in the network (read accounts, run transactions etc.) while sync is still in progress
  
* A working transaction pool
  

> Spotted in the [@ethnimbus](https://twitter.com/ethnimbus?ref_src=twsrc%5Etfw) discord today.. [pic.twitter.com/1Ffqgd1iDz](https://t.co/1Ffqgd1iDz)
> 
> — Jacek Sieka (@jcksie) [October 8, 2021](https://twitter.com/jcksie/status/1446399794243592200?ref_src=twsrc%5Etfw)

Wahay! I can confirm there have been no other issues (consensus, networking) syncing up to the head block of Goerli, and I can finally answer the question: "What happens if you just run `nimbus --goerli` today?"

### Still in progress

While we've made significant progress on many fronts, we still have our work cut out for us in the run up to the merge. As it stands, we are currently working on:

* A significant redesign of the storage database to use less disk space and run faster
  
* The ability to post a transaction for one's own account
  
* Implementing [EIP-3675](https://eips.ethereum.org/EIPS/eip-3675) (aka The Merge)
  

> In a month, we would like to launch a larger Merge devnet with better client distribution, once development stabilizes more.  
> 
> 4/5
> 
> — proto.eth 🚂 🦇 🔊 (@protolambda) [October 11, 2021](https://twitter.com/protolambda/status/1447595072543920132?ref_src=twsrc%5Etfw)

### Stay updated

The plan for this month is to participate in the rolling merge devnets  - one per week - before the more persistent testnet planned for the first week of December. We are working as hard as we can to try to have our execution layer client ready in time. Our immediate goal however is to pass the merge interop milestones in local tests.

If you have any questions or would like to stay updated on our progress, please join our [discord](https://discord.gg/7G5GCMRZ) and or sign up to our [newsletter](http://subscribe.nimbus.team/).