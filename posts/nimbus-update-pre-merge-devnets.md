---
layout: post
title: Nimbus update - Pre-merge interop!
description: It is a little known secret that, in addition to our consensus layer (eth2) client we are building out an execution layer (eth1) client - with the objective that it should be ready for the merge.
date: 2021-10-02T10:00
authors: sacha
published: true
---

# Nimbus: Execution Layer

<!-- truncate -->

![header-image](/posts/nimbus-update-pre-merge-devnets/header.png)

In the words of Danny Ryan, Altair is here and the Merge is coming!

> Finalized no. 29[https://t.co/ssVYW3M8d7](https://t.co/ssVYW3M8d7)  
>
> Altair is here; the Merge is coming.  
>
> tl;dr below
> 
> — dannyryan 🚂 (@dannyryan) [September 28, 2021](https://twitter.com/dannyryan/status/1442873900652646405?ref_src=twsrc%5Etfw)

We first simulated the merge back in April/May of this year.

> \> This is the first time all eth2 and eth1 clients communicated with each other in an emulation of the merger which removes Proof of Work miners and fully upgrades the network to Proof of Stake.  
>
> eth2 progress deniers in disbelief [https://t.co/VGlWCI5d3v](https://t.co/VGlWCI5d3v)
> 
> — banteg (@bantg) [May 1, 2021](https://twitter.com/bantg/status/1388609381869236227?ref_src=twsrc%5Etfw)

  
Fast forwards 5 months and we're finally ready for a more realistic follow-up.

> the merge is coming fast. THE MERGE Y'ALL. arguably the largest event in blockchain history since the bitcoin genesis block. It's proof that together we can build a decentralized future, and (responsibly) improve and innovate on the core infrastructure via rough social consensus [https://t.co/2h6GMKF2wJ](https://t.co/2h6GMKF2wJ)
> 
> — kassandra.eth (@RitualTypist) [September 28, 2021](https://twitter.com/RitualTypist/status/1442888325535125510?ref_src=twsrc%5Etfw)

This time, the interop will [build off Altair](https://hackmd.io/@n0ble/merge-interop-spec), rather than Phase 0.  
Importantly, we'll be testing the transition mechanism that will take us from a pre to post merge world.

> Productionizing the Merge spec includes:  
> \- Improving the Consensus API (separating it from the user JSON-RPC)  
> \- Implementing the logic for the latest fork-transition approach  
> \- Rebase the work onto Altair/London upgrades
> 
> — proto.eth 🚂 🦇 🔊 (@protolambda) [May 12, 2021](https://twitter.com/protolambda/status/1392448056591884288?ref_src=twsrc%5Etfw)

The merge spec has just recently been "productionised"


We also have a 5th client on the block  :)  

> LODESTAR JOINED THE 100% CLUB 😎 Max profitability for a full day on Eth2.0 mainnet.  
>
> \*I test in prod\* master [@gregthegreek](https://twitter.com/gregthegreek?ref_src=twsrc%5Etfw) plz enjoy your sweet rewards [@ChainSafeth](https://twitter.com/ChainSafeth?ref_src=twsrc%5Etfw) 🚀🚀🚀🚀 [pic.twitter.com/e8RMR8fRdi](https://t.co/e8RMR8fRdi)
> 
> — Lion ⟠ dapplion .eth (@dapplion) [September 17, 2021](https://twitter.com/dapplion/status/1438882897260425217?ref_src=twsrc%5Etfw)

### Merge quick sync

In general an Ethereum client consists of two layers - the consensus layer and the execution layer.

The consensus layer is responsible for the consensus, i.e. block validity, and fork choice rule. As it stands, on mainnet, we rely on PoW consensus. The Merge enables PoS consensus driven by the beacon chain.

The execution-layer is responsible for transaction bundling, execution, and state management. During the merge this layer will be represented by modified pre-merge PoW clients (eg. geth, nethermind, besu, openethereum, turbogeth, etc).

The key to a successful merge is getting these two layers to talk to each other: the plan right now is for them to interact via a one-way communication protocol, driven by the consensus layer (although this approach is not yet set in stone).

> Note that if these layers are bundled into a single piece of software, then the UX of running a post-merge client becomes very similar to running a pre-merge PoW client today (which is precisely why we are working so hard on building out [our execution layer client](https://github.com/status-im/nimbus-eth1)).

If you'd like to to dig into the details, [this document](https://hackmd.io/@n0ble/merge-interop-spec) specifies the modifications that must be made to beacon chain and pre-merge clients to turn them into a post-merge consensus node and execution engine, respectively.

### Our progress

We have passed all the [merge spec tests](https://notes.ethereum.org/@9AeMAlpyQYaAAyuj47BzRw/rkwW3ceVY). If you want to get your hands dirty, you can actually [verify this for yourself](https://github.com/status-im/nimbus-eth2/blob/amphora-merge-interop/docs/interop_merge.md#verify-that-nimbus-runs-through-the-same-examples)!

And while we're waiting for a compatible execution client, we have everything you need to [start experimenting](https://github.com/status-im/nimbus-eth2/blob/amphora-merge-interop/docs/interop_merge.md) on the consensus side.

> Eager to get started with [#themerge](https://twitter.com/hashtag/themerge?src=hash&ref_src=twsrc%5Etfw) experiments? Our interop branch has got everything you need for the consensus side: [https://t.co/rRwO27kmaK](https://t.co/rRwO27kmaK)
> 
> — Nimbus (@ethnimbus) [October 1, 2021](https://twitter.com/ethnimbus/status/1443943484893839370?ref_src=twsrc%5Etfw)

You can keep track of our broader progress [here](https://github.com/status-im/nimbus-eth2/issues/2859).

### Interop lock in: round 2

In the [words of Ben Edgington](https://t.co/97X85jdCzM?amp=1), the cat is out of the bag - the eth1 and eth2 client teams will be meeting up in early October to get some Merge devnets running.

You can think of this as round 2 of the interop event we did two years ago.

Expect to hear a lot of updates from the client teams as we build out the Merge logic and test our software together on short-lived devnets.

In anticipation, we'll leave you with some highlights from the previous lockin.

> [#Lighthouse](https://twitter.com/hashtag/Lighthouse?src=hash&ref_src=twsrc%5Etfw) and [@ethnimbus](https://twitter.com/ethnimbus?ref_src=twsrc%5Etfw) just finalized a [#Eth2](https://twitter.com/hashtag/Eth2?src=hash&ref_src=twsrc%5Etfw) epoch!  
>
> As far as I know, this is the first instance of finality on a multi-client Eth2 testnet!  
>
> Thanks [@protolambda](https://twitter.com/protolambda?ref_src=twsrc%5Etfw), [@dannyryan](https://twitter.com/dannyryan?ref_src=twsrc%5Etfw) for the help. Great work on the networking stack [@AgeManning](https://twitter.com/AgeManning?ref_src=twsrc%5Etfw) and [@jcksie](https://twitter.com/jcksie?ref_src=twsrc%5Etfw)![#Eth2](https://twitter.com/hashtag/Eth2?src=hash&ref_src=twsrc%5Etfw) is coming! [pic.twitter.com/vC5m9OuaT8](https://t.co/vC5m9OuaT8)
>
> — Paul Hauner (@paulhauner) [September 9, 2019](https://twitter.com/paulhauner/status/1170952290469122048?ref_src=twsrc%5Etfw)

> Artemis just achieved [#interop](https://twitter.com/hashtag/interop?src=hash&ref_src=twsrc%5Etfw) with [@ethnimbus](https://twitter.com/ethnimbus?ref_src=twsrc%5Etfw) [pic.twitter.com/JWkIg3XinW](https://t.co/JWkIg3XinW)
> 
> — Joseph Delong 🔱 (@josephdelong) [September 10, 2019](https://twitter.com/josephdelong/status/1171465845513408514?ref_src=twsrc%5Etfw)

> Validator monitoring coming to an [@ethnimbus](https://twitter.com/ethnimbus?ref_src=twsrc%5Etfw) near you \*soon(TM)\*: [https://t.co/x65lpxJ3t4](https://t.co/x65lpxJ3t4) - based on the excellent and pioneering work done by [@paulhauner](https://twitter.com/paulhauner?ref_src=twsrc%5Etfw) / [@sigp\_io](https://twitter.com/sigp_io?ref_src=twsrc%5Etfw) - by and large compatible metrics make dashboard/monitoring interop easier too!
> 
> — Jacek Sieka (@jcksie) [September 30, 2021](https://twitter.com/jcksie/status/1443568596865589248?ref_src=twsrc%5Etfw)

> Fully autonomous [#eth2](https://twitter.com/hashtag/eth2?src=hash&ref_src=twsrc%5Etfw) beacon chain between [@ethnimbus](https://twitter.com/ethnimbus?ref_src=twsrc%5Etfw) and [#lighthouse](https://twitter.com/hashtag/lighthouse?src=hash&ref_src=twsrc%5Etfw) on a pair of raspberries found in the Canadian wilderness! [pic.twitter.com/Xkps1Yu3DS](https://t.co/Xkps1Yu3DS)
> 
> — Jacek Sieka (@jcksie) [September 11, 2019](https://twitter.com/jcksie/status/1171886857908609024?ref_src=twsrc%5Etfw)

_P.S. Keep your eyes peeled for an [Ethereum Foundation blogpost](https://blog.ethereum.org) on Monday. This will include all mainnet Altair releases. We will also be making a more formal Altair announcement next week._