---
layout: post
title: Nimbus Consensus Layer - past, present, and future
date: 2022-01-13T10:00
authors: sacha
published: true
---

# Nimbus Consensus Layer - past, present, and future

<!-- truncate -->

![header-image](/posts/nimbus-consensus-layer-2122/header.png)

_the image above shows 40 of our dependencies purpose built by us for Nimbus and the wider Status ecosystem_

> It's happening! [#eth2](https://twitter.com/hashtag/eth2?src=hash&ref_src=twsrc%5Etfw) genesis is upon us - stay tuned as we prepare a release with everything necessary to run [@ethnimbus](https://twitter.com/ethnimbus?ref_src=twsrc%5Etfw)!  
> 
> Thanks to researchers, supporters, other client teams and the community - we're in this together!
> 
> — Nimbus (@ethnimbus) [November 24, 2020](https://twitter.com/ethnimbus/status/1331116128870031360?ref_src=twsrc%5Etfw)

One year later, and we've barely had a moment to catch our breath!  
  
Since the launch of the Beacon chain last December, we've made a ton of improvements and added a bunch of features to our software. The difference between running a Nimbus node today and back then is night and day.

### 2021 Highlights

Some high-level highlights from the last 12 months include:

* 26 [releases](https://github.com/status-im/nimbus-eth2/releases) without any major hiccups.  
  
* A close to perfect track record for our internal fleet of validators.  
  
* The first client to release both [doppelganger detection](https://our.status.im/nimbus-update-v1-0-7-release/) and batched attestation verification.  
  
* Successfully shifting the narrative around [the importance of client diversity](https://our.status.im/the-importance-of-client-diversity/) and [Ethereum's green credentials](https://our.status.im/ethereum-is-green/).  
  
* [Influencing the direction](https://eips.ethereum.org/EIPS/eip-3076) and making [contributions](https://github.com/ethereum/consensus-specs/pull/2746#pullrequestreview-817674843) to both the spec and EIPs.  
  
* Pushing the limits of what is possible with respect to both CPU and memory usage.
  
As we touched on in our [last post](https://our.status.im/light-nodes-ethereum-endgame/), Nimbus' resource efficiency is not just a nice to have. If decentralisation is [the cost to run a full node](https://twitter.com/jadler0/status/1433985695396282372?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1433985695396282372%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Four.status.im%2Fp%2Fdbab5f30-9e0b-49fb-84c7-ef7adb9d9455%2F), then resource efficiency is absolutely [crucial to maintaining a sufficiently robust and decentralised network](https://our.status.im/light-nodes-ethereum-endgame/). This is especially true in a post-merge world in which the community is expected to [keep block producers in check](https://vitalik.ca/general/2021/12/06/endgame.html).

To borrow Dankrad's words:

> I don't care about the absolute number of nodes.  
> I care about the amount of transaction value that is fully secured. That means the user is either running a full node or a fraud proof-protected light client.
> 
> — Dankrad Feist (@dankrad) [July 14, 2021](https://twitter.com/dankrad/status/1415424096024858624?ref_src=twsrc%5Etfw)

Today, Nimbus is able to run performantly on a single core of a Raspberry Pi 4 while also running Geth, RocketPool and monitoring software (Prometheus + Grafana) in the background. We expect this to keep holding true post merge.

> We are on it, [@go\_ethereum](https://twitter.com/go_ethereum?ref_src=twsrc%5Etfw) Geth + [@ethnimbus](https://twitter.com/ethnimbus?ref_src=twsrc%5Etfw) in the same [@Raspberry\_Pi](https://twitter.com/Raspberry_Pi?ref_src=twsrc%5Etfw). [https://t.co/s2lg573Njh](https://t.co/s2lg573Njh)
> 
> — Ethereum on ARM 🦇🔊 (@EthereumOnARM) [June 22, 2021](https://twitter.com/EthereumOnARM/status/1407339958046765061?ref_src=twsrc%5Etfw)

Perhaps one final thing worth mentioning here is that our language of choice, Nim, has required us to build out nearly all the [libraries](https://nimbus.team/docs/libraries.html) we rely on ourselves. In the light of recent NPM and Pypi registry attacks, we believe this to be a key strength of ours relative to other clients.  
  
We have very few external dependencies. And these dependencies are all fuzzed, audited, formally verified,  or have similar rock solid guarantees.

> Curious which libraries Nimbus depends on? \`make deps\` shows the full transitive list with the exact version, including the [@nim\_lang](https://twitter.com/nim_lang?ref_src=twsrc%5Etfw) compiler - there is 61 of them right now, counting several that are used only for testing - 40 were purpose-built by [@ethstatus](https://twitter.com/ethstatus?ref_src=twsrc%5Etfw)! [pic.twitter.com/L407vmQKZK](https://t.co/L407vmQKZK)
> 
> — Nimbus (@ethnimbus) [January 10, 2022](https://twitter.com/ethnimbus/status/1480500108810674176?ref_src=twsrc%5Etfw)


### Icing on the cake

Having thought deeply about, and written extensively on [the importance of trustless staking pools](https://medium.com/dappnode/guardians-of-ethereum-a-validator-dao-proposal-d82e76231b45), the icing on the cake for us last year was, without a doubt, the launch of Rocket Pool.

After everything the team has been through, notably the [drama](https://medium.com/rocket-pool/the-merge-0x02-mev-and-the-future-of-the-protocol-c7451337ec40) around `0x02`, it was truly wonderful to see their vision of a trustless and community owned staking pool start to take shape.

We were especially happy to see that, by some estimates, Nimbus is the second most popular Rocket Pool client.

> 218 [@Rocket\_Pool](https://twitter.com/Rocket_Pool?ref_src=twsrc%5Etfw) proposals, four weeks in: [pic.twitter.com/HrLZrjCWWC](https://t.co/HrLZrjCWWC)
> 
> — superphiz.eth 🦇🔊🐼 (@superphiz) [December 6, 2021](https://twitter.com/superphiz/status/1467978840278503429?ref_src=twsrc%5Etfw)

Thank you Joe Clapis for everything you've done to red-pill the community into using Nimbus :)

### Zooming in on last quarter

In case you haven't kept up with our [latest releases](https://github.com/status-im/nimbus-eth2/releases), arguably the three most important features shipped last quarter were:

* Support for the `web3signer` protocol (currently in BETA)
  
* A feature complete `rest` API (still ironing out a few issues)
  
* A `--num-threads` option which allows Nimbus to take advantage of multiple CPU cores
  
`v1.5.5` alone saw three significant optimisations worth highlighting here:

* A 6x speed-up in epoch processing
  
* A 2x speed up in Altair block processing
  
* A 12% reduction in outgoing GossipSub traffic (bandwidth reduction).
  
> A calm-after-the-altair-storm release with lots of polish across the board - big drop in outgoing network traffic thanks to an elegant libp2p optimization, more flexibility in the REST interface allows you to use Nimbus with a growing amount of 3rd party tools, web3signer.. [https://t.co/RTerT29ijA](https://t.co/RTerT29ijA)
> 
> — Jacek Sieka (@jcksie) [December 6, 2021](https://twitter.com/jcksie/status/1467938248936804356?ref_src=twsrc%5Etfw)

Both `web3signer` support and the `rest` API pave the way for wider adoption of Nimbus. `web3signer` by allowing for staking pools and other providers with a custom key handling strategy to use Nimbus. And the `rest` API by allowing for third-party validator clients such as [Vouch](https://www.attestant.io/posts/introducing-vouch/) (or any other validator client for that matter) to use Nimbus as their beacon node.

Special thanks to Jim Mcdonald (@jgm) for helping us test the REST server: It is in large part thanks to your testing that we managed to get to the finish line!

### Going forward

There is so much to look forward to in 2022. Here's a quick overview of our priorities:

* **The merge, then sharding**: the main focus here is on the stellar and timely execution of the [merge](https://github.com/ethereum/consensus-specs/tree/dev/specs/merge) followed by the [sharding](https://github.com/ethereum/consensus-specs/blob/dev/specs/sharding/beacon-chain.md) specs.
  
* **Wider adoption**: we have a new business development unit (welcome [Kausha](https://twitter.com/liftlines)l!) devoted to increasing adoption. The initial focus will be on providing support for staking pools and providers who wish to adopt Nimbus ( a number of which have already committed to running Nimbus this year).
  
* **Diversity++:** this will mainly involve implementing all standards which seek to promote client diversity  (e.g. the development of cross-client UIs, migration tools, and the [SSV](https://ssv.network/) network).
  
* **The great rebranding**: we want people to realise at a glance that Nimbus is great for far more than just resource-restricted devices. And, in particular, that there are important advantages to using it for enterprise grade infrastructure. This requires rethinking our branding and how we talk about ourselves.
  
* **Privacy**: as part of Status, caring about privacy is in our DNA. We plan on exploring how we can leverage our work on [Waku](https://rfc.vac.dev/spec/10/) in order to [bring more privacy to validators at the networking layer](https://github.com/libp2p/specs/issues/374).
  
* **A Nimbus focused UI**: we are committing serious resources towards a Nimbus UI which will be an integral part of the Status product roadmap moving forward. Our focus here is on user-friendly approaches for creating, managing, and monitoring validators (no CLI experience needed).
  
This year will also see us increasingly focused on lowering the technical barriers to running a full node (both consensus and execution) as well as pushing forward with our [light client implementation](https://github.com/etan-status/nimbus-eth2/compare/merkle-multiproof...etan-status:lightclient-api) (keep track of our progress [here](https://github.com/status-im/nimbus-eth2/issues/2337#issuecomment-967153855)).

As we mentioned in our [execution layer recap](https://our.status.im/nimbus-execution-layer/), one of our main design goals is to make it as easy as possible for our consensus and execution clients to be bundled into a single piece of software. With the Nimbus UI, you'll be able  to manage and monitor your node straight from the Status Desktop app.

> I can't wait to run Nimbus straight from Status Desktop [#hyped](https://twitter.com/hashtag/hyped?src=hash&ref_src=twsrc%5Etfw)
> 
> — Jarrad Hope (@0xc1c4da) [August 12, 2020](https://twitter.com/0xc1c4da/status/1293473249347555334?ref_src=twsrc%5Etfw)

[Complementary to this vision](https://our.status.im/light-nodes-ethereum-endgame/) (and part of our longer-term UI roadmap) is an embedded light client running on your mobile phone.


### More thank yous

We want to end by saying a big thank you to the Ethereum Foundation for the unbelievably generous incentive program they [announced](https://blog.ethereum.org/2021/12/13/client-incentive-program/) towards the end of last year. We are truly humbled to be valued by you in this way.

A big thank you to all the node runners using Nimbus, without you our work would be, quite frankly, meaningless.

And, last but by no means least, a big thank you to all our [Gitcoin supporters](https://gitcoin.co/grants/137/nimbus): even more important than the financial, is the moral support; the appreciation we feel from every single one of you, each GR round, keeps our spirits high when the going feels tough.  
  
We wish you all the very best of luck this coming year.