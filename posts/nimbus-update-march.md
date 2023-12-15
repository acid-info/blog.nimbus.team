---
layout: post
title: Nimbus - checkpoint sync, era files, Vouch
date: 2022-03-02T10:00
authors: status
published: true
---


# Nimbus: checkpoint sync, era files, Vouch

<!-- truncate -->

![header-image](/posts/nimbus-2022-recap/header.jpeg)

_(image of the [Lennon Wall](https://en.m.wikipedia.org/wiki/Lennon_Wall) courtesy of [IFMSA](https://ifmsa.org/wall-peace-freedom/))_  
  
_As these notes were being written, Putin's senseless war in Ukraine left nobody untouched and Status is no exception: Our Ukrainian contributors have been forced into bomb shelters with their families as brutalities increase: here are several ways that you can help: https://hrf.org/how-to-support-ukrainians/_  
  
_In addition,  a growing number of civilians in Russia and Ukraine are using the Tor project to communicate, access news, and get around censorship. You can help them by setting up a Tor bridge: [https://community.torproject.org/relay/setup/bridge/](https://community.torproject.org/relay/setup/bridge/)_

Two weeks ago we published Nimbus `v1.7.0`, a particularly feature-packed [release](https://github.com/status-im/nimbus-eth2/releases/tag/v1.7.0) for our consensus layer client.  

> "So far, so good" [https://t.co/g7L62tq8jy](https://t.co/g7L62tq8jy) [pic.twitter.com/ahshpXUZaq](https://t.co/ahshpXUZaq)
> 
> — Jacek Sieka (@jcksie) [February 17, 2022](https://twitter.com/jcksie/status/1494381339273056259?ref_src=twsrc%5Etfw)

If you haven't done so already, we encourage you to view the [full release notes](https://github.com/status-im/nimbus-eth2/releases/tag/v1.7.0) for all the gory details.  
  
There are a handful of important topics however, that were not covered in the notes that we feel are worth exploring in longer form.

In particular, we'd like to open up a discussion on **how to improve the security of checkpoint sync**, and another on **how to go about fetching historical data queries in a post EIP-4444 world.**

### #[Insecura network (or how to exploit checkpoint sync)](#insecura-network-or-how-to-exploit-checkpoint-sync)

> Oh no! A malicious duck has taken over 12000 validator keys from a large custodial operator on the [#eth2](https://twitter.com/hashtag/eth2?src=hash&ref_src=twsrc%5Etfw) pyrmont network, and is now offering a much more master-node oriented vision for the beacon chain, named "insecura" - what happened here?
> 
> — Jacek Sieka (@jcksie) [January 21, 2022](https://twitter.com/jcksie/status/1484632785671397379?ref_src=twsrc%5Etfw)

One of the infamous attacks on Proof-of-Stake is the so-called long-range attack, where keys that have been compromised are used to create a new history that honest nodes (who have been offline for a sufficient amount of time) accept as valid.

> I don't think that's right, eg if you have a long-range PoS attack where somebody gathered up keys from 3 years ago to make a new history, everybody knows which chain is legit and which is the dodgy chain, but you have to look at evidence outside the protocol to prove it
> 
> — Edmund Edgar (@edmundedgar) [July 16, 2019](https://twitter.com/edmundedgar/status/1151042417665159168?ref_src=twsrc%5Etfw)

How could this happen in practice? The long and the short of it is that the beacon chain has a liveness mechanism which exits inactive validators. It's possible for a minority player to abuse this mechanism to create a history in which all validators except their own are forced to exit, thereby turning their minority into a majority (on their fork).

Once such a fork exists, the idea is that an attacker could then try to exploit [weak subjectivity](https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity/) to get other nodes to accept it as authentic.

Fortunately, weak subjectivity, as originally thought out, is quite resistant to such an attack. As long as less than 1/3 of the keys at the time of the fork are compromised, the honest nodes provide a much more plausible history than the attacker's: because in contrast to the attacker's chain which contains a long period of non-finality during which the honest validators are seeing their stake leaked, the honest nodes have a finalising chain.

Even if a single attacker controls more than 2/3 of all keys that were active at the point of the hostile fork, it's not clear that they will be able to succeed in convincing the network that their alternative history is correct. In particular, if an honest node isn't being [eclipsed](https://www.cs.bu.edu/~goldbe/projects/eclipseEth), it will still likely choose the canonical chain simply because there are more peers serving it.

However, it turns out that **checkpoint sync changes things quite drastically**. In particular, it's not clear whether the above argument still holds. This is quite counter-intuitive. After all, why should passing in a URL rather than a hash make all that much difference to the security assumptions of the network?

As is often the case with security assumptions, the devil lies in the details. What it boils down to is the following: we've subtly shifted the expected behaviour from  "getting a block hash from a friend" (as articulated in [Vitalik's original post on Weak Subjectivity](https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity/)) to "trusting a URL from one of a handful of centralised entities". This has important consequences.

To paraphrase Jacek here, **checkpoint sync teaches users to pass a single URL from a centralised entity (think Infura or Etherscan) to the beacon node**.

**If this URL is compromised (think a security breach at a centralised entity), an attacker can feed the client any state they wish**, and the client will “believe” it as long as it passes some basic sanity checks. In particular, the attacker can pass the user a state that has finalised an alternative history (in other words, a different point from where the canonical validators are).

If a node starts syncing from this compromised state, it will end up rejecting any connections to, and blocks from, the honest and correct peers it comes across. It will only be able to accept compromised or dishonest peers, because the attacker's chain is finalised at a point which cannot be reconciled with the canonical one.

Fortunately, Jacek points out that the way this particular issue arises can be detected in a number of ways. In particular, such an attack provides us with several red flags along the way (see the [end of this post](https://ethresear.ch/t/insecura-my-consensus-for-the-pyrmont-network/11833) for a full articulation).

Danny Ryan has posted some [further ideas](https://notes.ethereum.org/@djrtwo/ws-sync-in-practice) on how we might go about addressing this problem. Two of the most interesting paths forward include:

*   **N participant checkpoint download**: instead of relying on the trustworthiness of one centralised entity, query N entities and check for unanimity
    
*   **Design a way for the bootnodes to include checkpoints in their published ENRs** -- for example by adding an optional `wsr` (weak-subjectivity-root) field. Note that we can't simply rely on querying bootnodes since they are almost always at their peer limits. In other words, we can't assume that all clients will be able to maintain a connection to a bootnode.  
    

We think it's time to move this discussion forward.  
  
_If you'd like to get into the weeds here, be sure to check out Jacek's [detailed writeup](https://ethresear.ch/t/insecura-my-consensus-for-the-pyrmont-network/11833) on ethresearch. He has actually carried out this attack on Pyrmont, and the post takes you through how this was done._


### Era files (a proposed solution to historical data queries)

Ethereum clients currently store [275 GB](https://twitter.com/lightclients/status/1462576173213372417) of historical data. But this data is not actually needed to validate the chain.

It's growing at a rate of around 140 GB per year, and is set to accelerate in a post-merge world. [EIP-4444](https://eips.ethereum.org/EIPS/eip-4444) is a proposal that seeks to address this data bloat by having clients prune data older than 1 year.

However, some valid concerns have been voiced by the community. In particular, it's not clear how much is lost from preventing nodes from serving historical data over the p2p layer (something EIP-4444 explicitly mandates).  
  

> I used to have the ability to download and validate the full history and state just by setting a flag in geth. With these changes, default nodes will refuse to serve it to me. It may not matter for ”most”, but some of us care about it and do it.
> 
> — Eric Wall (@ercwl) [December 2, 2021](https://twitter.com/ercwl/status/1466459300096794627?ref_src=twsrc%5Etfw)

In light of these concerns, Jacek's recent Era files proposal (see a [draft PR here](https://github.com/status-im/nimbus-eth2/pull/3394)) can be seen as a middle ground of sorts.  

> In [#eth](https://twitter.com/hashtag/eth?src=hash&ref_src=twsrc%5Etfw), it's widely recognized that having every node sync the full history via p2p is not sustainable, and proposals like rent and EIP-4444 aim to put bounds on what "live" clients must support. However, it's also widely recognized that the historical data is useful! 1/n
> 
> — Jacek Sieka (@jcksie) [February 15, 2022](https://twitter.com/jcksie/status/1493524432719073284?ref_src=twsrc%5Etfw)

What exactly is an era file? To borrow Jacek's words, an era file is simply a day of blocks followed by the data needed to recreate consensus at that point: **if you have a synced node that knows the current beacon chain head, the data in era files can be used to recreate the fully verified historical state for that time range.**

Era files, once created, are easily identifiable, immutable and idempotent: **anyone with a fully synced node can create and/or verify one**, and they can be shared by untrusted third-parties without introducing any new security problems.

Importantly, in an era file future the database remains as the source of truth for security purposes -- it stores the latest synced head root which in turn determines where a node "starts" its consensus participation. The era directory however can be freely shared between nodes / people without any (significant) security implications, assuming the era files are consistent (i.e. not broken).  
  
It's important to point out that, for now, era files cover only consensus -- in other words, not the full Ethereum state.

Post-merge, they'll start covering block data, but still won't cover the Ethereum state. Supporting the full EIP 4444 world is an open research topic. But focusing on consensus solves an important part of the problem: that is, knowing which state is relevant; this turns the broader problem into a tractable one.

Ideas for future improvements include serving the era files via REST: unlike the current implementation which downloads block by block, downloading an era at a time would almost entirely cut out request overhead.

One natural question to ask is how do era files affect the disk storage requirements for nodes?

It turns that the answer depends on the type of node you're running, as well as on how the relevant metaparameters are chosen.

> today (~1TB) to get "mostly equivalent" functionality, but more importantly, it stops growing there, by and large, for the "normal" participant .. light nodes would use a lot less etc..
> 
> — Jacek Sieka (@jcksie) [February 15, 2022](https://twitter.com/jcksie/status/1493567566178103299?ref_src=twsrc%5Etfw)

We'd love to hear some thoughtful feedback at this stage. Is this a good idea or not? Where can it be improved? What is it missing?

_Additionally, we believe era files (or something similar) have a role to play at the execution (eth1) level. These (torrented) files could then be used to seed [the Portal network](https://our.status.im/nimbus-fluffly/). In fact, the Portal network has recently shifted priority, from working on State network to chain history, mostly due to EIP-4444. See [here](https://snakecharmers.ethereum.org/the-aperture-vol-4/ ) for a general update.  
_

### A libp2p protocol for light client sync

We've published a [draft implementation](https://github.com/status-im/nimbus-eth2/pull/3341) of our proposed (server side) libp2p protocol for light client sync.

> If one had to pick one PR to tell the story why [@ethnimbus](https://twitter.com/ethnimbus?ref_src=twsrc%5Etfw) was started as a project, this for sure comes close.. [https://t.co/gnJV4Vnr6m](https://t.co/gnJV4Vnr6m)
> 
> — Jacek Sieka (@jcksie) [February 15, 2022](https://twitter.com/jcksie/status/1493497173555748865?ref_src=twsrc%5Etfw)

Light clients require full nodes to serve additional data so that they can stay in sync with the network. This draft contains a new launch option `--serve-light-client-data` which allows a full node to collect and disseminate the relevant data to light clients.

It's an implementation of our [recent contribution](https://github.com/ethereum/consensus-specs/pull/2802) to the consensus specs.

For some context, the Altair specs needed updating, because while they did define structures to aid light client development, they were missing the network protocol definition.

In order to fill this gap, Etan [introduced a libp2p based protocol](https://github.com/ethereum/consensus-specs/pull/2802) to allow light clients to sync to the latest `BeaconBlockHeader` in a trustless and decentralised manner. This builds on top of prior work from both [Hsiao-Wei Wang](https://github.com/ethereum/consensus-specs/pull/2267) and [Jin Huang](https://github.com/ethereum/consensus-specs/pull/2786). You can [keep track of Etan's PR here](https://github.com/status-im/nimbus-eth2/pull/3341).

_**Useful context:** towards the end of last year, we wrote about [how crucial light clients are to a post-merge Ethereum](https://our.status.im/light-nodes-ethereum-endgame/). In a separate post we also touched on how this will be [an area of focus](https://our.status.im/nimbus-consensus-layer-2122/) for us going forward._

### Vouch support

Last, but not least, we are now fully compatible with Vouch! A big shout out to Jim who has tirelessly been helping us test, stress and verify compatibility of our [REST API](https://nimbus.guide/rest-api.html) implementation.  

> Just released Vouch 1.4.0 with support for [@ethnimbus](https://twitter.com/ethnimbus?ref_src=twsrc%5Etfw). Excited to add another beacon node to the mix.
> 
> — Jim McDonald (@jgm) [February 21, 2022](https://twitter.com/jgm/status/1495823836704653325?ref_src=twsrc%5Etfw)

Since Vouch seems to be becoming a standard of sorts for staking providers, this is great news for client diversity: it's now seamless for providers that use Vouch to add Nimbus as an alternative client.  
  
Vouch also allows for other validator clients to run with Nimbus as their beacon node. For example, [Lighthouse has successfully run their VC with a Nimbus BN](https://github.com/sigp/lighthouse/pull/2980#issuecomment-1027392931).

We're currently talking with several providers regarding what they can do to add Nimbus to their fleet. If you are a provider, and considering adding Nimbus to yours, please get in touch with us at nimbus@status.im, or alternatively reach out to us [on our discord](https://discord.gg/j3nYBUeEad). We're more than happy to answer any questions you may have and provide you with any guidance and support you may need.  
