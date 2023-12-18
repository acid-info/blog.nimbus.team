---
layout: post
title: The importance of light nodes in Vitalik's endgame
description: Ethereum can support both full nodes and light clients, it contains a peer to peer layer which allows nodes to send messages to each other.
date: 2021-12-10T10:00
authors: sacha
published: true
---

# Nimbus client 2022 year-end recap

<!-- truncate -->

![header-image](/posts/light-nodes-ethereum-endgame/header.png)


_image courtesy of [Vitalik's endgame post](https://vitalik.ca/general/2021/12/06/endgame.html)_

### Preface

Ethereum can support both full nodes and light clients, it contains a peer to peer layer which allows nodes to send messages to each other. While Ethereum's current architecture is not particularly well-suited to light clients, the beacon chain architecture is. This means that post-merge, they will have an important role to play. A light client is a cheaper alternative to a full node (from a bandwidth and resource consumption perspective) since it only downloads the header from each block and trusts the full nodes to check that the state transitions are correct (in other words, a light client trusts the full nodes it is peered with to verify that the block producer hasn't tried to print new coins,  spend coins from an address for which they don’t have the private key, or make larger blocks than the consensus rules allow them to do). This does beg the question however: under what assumptions are light clients able to protect themselves from malicious block producers?

### Relaxing assumptions

In [the endgame](https://vitalik.ca/general/2021/12/06/endgame.html), we expect that most individuals will transact on Ethereum using light clients without even knowing it. For example, the plan has always been for the [Status mobile app](https://status.im/get/) to come integrated with a light version of Nimbus.  
  
Since light clients typically only download block headers, and don’t verify transactions themselves, we are used to thinking of them as having weak security guarantees compared to full nodes: under the conventional model, they are forced to rely on an honest majority assumption (which means they must assume the chain is valid by default).  
  
However, it turns out that we can do significantly better than that.

Thanks to the magic of [fraud and data availability proofs](https://arxiv.org/abs/1809.09044), we can relax the honest majority assumption, and make a 1/N honesty assumption instead. Practically speaking this means a light client only needs to be peered with a _single_ honest full node in order to inherit almost the same security guarantees. In the rest of this post we will refer to this genre of light client as a _light node_.

### A light sketch

While we won't get into the [gory details](https://dankradfeist.de/ethereum/2019/12/20/data-availability-checks.html) here, here's a light sketch of how this works.

When a light node receives a block header, it [probabilistically samples](https://coinmarketcap.com/alexandria/article/what-is-data-availability) enough shares from the [Merkle tree](https://blog.iden3.io/merkle-trees-visual-introduction.html) that the Merkle root represents to convince itself that the entire tree is indeed available for full nodes to verify (in other words, the light node is able to verify that the block producer has not withheld any data from the network).

At the same time, it listens for fraud proofs – a small, and quickly verifiable proof that a specific transaction in a block is invalid – from the nodes it is peered with. A valid fraud proof convinces that light node that the Merkle root in the block header is in fact incorrect. In the absence of a valid fraud proof, it goes ahead and accepts the block header as truthful.

### What does this tell us?

The key takeaway here is that **as long as a light node is peered with at least one honest full node, it has practically the same security guarantees as that full node** (since it can expect to receive a fraud proof from it if the block header it receives is incorrect).

A more subtle insight to be gleaned here is the following: **light nodes can only offer the same protection as full nodes if enough people run both light and full nodes.** This is true because you need enough light nodes in the network to collectively recover blocks, and enough honest full nodes to give every light client a good chance of being connected to at least one of them.

It follows that to ensure a resilient network, one in which individuals transacting on Ethereum can detect if/when block producers are trying to [change the rules](https://dankradfeist.de/ethereum/2021/05/20/what-everyone-gets-wrong-about-51percent-attacks.html) on them, we need to do two things:

1. Make it dead simple to run a light node on mobile devices (and other resource-restricted devices).
    
2. Make it dead simple to run a full node on low-power commodity hardware (in particular this includes Raspberry Pis and everyday laptops).

These two things become **especially important in a world in which block production is centralised** (the [likely endgame](https://vitalik.ca/general/2021/12/06/endgame.html) we are heading for).

### A means to self-sovereignty

To fork [the words](https://twitter.com/jadler0/status/1433985695396282372?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1433985695396282372%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Four.status.im%2Fp%2Fdbab5f30-9e0b-49fb-84c7-ef7adb9d9455%2F) of John Adler: thanks to fraud proofs and data availability sampling, we can think of decentralisation as some function of the cost to run a full node and the cost to run a light node. Not because running either is anything special, but because they are a means to an end: self sovereignty\*.  
  
\*Self sovereignty in this context means that we, the community, are able to detect when block producers try to change the rules that we all agree on.

### Resources

* [Beacon Chain Light Client Classification](https://ethresear.ch/t/beacon-chain-light-client-classification/11061)

* [Beacon Chain Light Client Networking](https://ethresear.ch/t/beacon-chain-light-client-networking/11063)

* [Beacon Chain Light Client Design Doc](https://notes.ethereum.org/@ralexstokes/S1RSe1JlF)

* [Bootstrapping the Beacon Chain Light Client Ecosystem](https://notes.ethereum.org/@ralexstokes/S1RSe1JlF)

* [Altair: Minimum Light Client Spec](https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/sync-protocol.md)

* [Lodestar Light Client Demo](https://github.com/ChainSafe/eth2-light-client-demo/tree/dapplion/update-to-prater)

* [Nimbus Light Client Syncing Implementation](https://github.com/status-im/nimbus-eth2/issues/2337)

* [Experimental Nimbus Light Client Server](https://github.com/etan-status/nimbus-eth2/compare/merkle-multiproof...etan-status:lightclient-api)  
    (expand the commit description ... for instructions on how to play with it)

* [Run a Nimbus Beacon Node](https://nimbus.guide/quick-start.html)  

_Thanks to Barnabé Monnot and Ștefan Talpalaru for reading drafts of this._