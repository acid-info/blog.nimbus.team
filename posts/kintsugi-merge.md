---
layout: post
title: Nimbus + Nethermind - Kintsugi tutorial
description: Ethereum can support both full nodes and light clients, it contains a peer to peer layer which allows nodes to send messages to each other.
date: 2021-11-23T10:00
authors: sacha
published: true
---

# Nimbus + Nethermind - Kintsugi tutorial

<!-- truncate -->

![header-image](/posts/kintsugi-merge/header.png)

_Diagram courtesy of Mikhail Kalinin's [Engine API design space](https://hackmd.io/@n0ble/consensus_api_design_space) document. Note that this diagram dates from the Amphora era, and so is not strictly accurate. Nevertheless the general communication flow between consensus and execution for Kintsugi is the same._

> Kintsugi, also known as kintsukuroi, is the Japanese art of repairing broken pottery by mending the areas of breakage with lacquer dusted or mixed with powdered gold. [pic.twitter.com/M9BiJfLqLb](https://t.co/M9BiJfLqLb)
> 
> — Monica Zeng (@monicazng) [November 27, 2020](https://twitter.com/monicazng/status/1332314234265477121?ref_src=twsrc%5Etfw)

The Merge November sprint – _Kintsugi -_ has kicked off.  
  
Kintsugi [specs](http://spec.merge.wiki/) and [milestones](https://notes.ethereum.org/@djrtwo/kintsugi-milestones) were released earlier this month. And we, along with the other client teams, have started participating in the weekly rolling merge devnets in preparation for the more open and persistent testnet planned for early December.

### #[Kintsugi spec: quick recap](#kintsugi-spec-quick-recap)

Kintsugi incorporates all of the learnings (along with some minor adjustments) from the previous interop, [Amphora](https://blog.ethereum.org/2021/10/15/amphora-merge-milestone/).  
  
At a high-level, the scope of work on updating consensus layer client software to Kintsugi specification is as follows:

* Implement the new version of consensus-spec and pass all consensus-spec tests

* Implement the new version of [Engine API](https://github.com/ethereum/execution-apis/blob/89070c4d6f2fbe125a906f0cca1fedda84b8a2a6/src/engine/specification.md) method calls

* Implement or update already existing implementation of the [optimistic sync](https://github.com/sigp/lighthouse/issues/2691)

On the execution layer side, it looks like this:

* Implement the new version of [EIP-3675](https://eips.ethereum.org/EIPS/eip-3675)

* Implement [EIP-4399](https://eips.ethereum.org/EIPS/eip-4399)

* Implement the new version of [Engine API](https://github.com/ethereum/execution-apis/blob/89070c4d6f2fbe125a906f0cca1fedda84b8a2a6/src/engine/specification.md) server


> Support Ethereum ecosystem client diversity!  
>   
> Consider running:  
>   
> \* Nethermind [https://t.co/8A3bkliGAy](https://t.co/8A3bkliGAy) or Besu [https://t.co/RNPpIXrVX3](https://t.co/RNPpIXrVX3) for an ethereum mainnet node  
>   
> \* Nimbus [https://t.co/8LWdsGEuKi](https://t.co/8LWdsGEuKi) or Teku [https://t.co/mXUWTxKlPu](https://t.co/mXUWTxKlPu) if you're on the eth2 Medalla testnet
> 
> — vitalik.eth (@VitalikButerin) [August 11, 2020](https://twitter.com/VitalikButerin/status/1293317390613110785?ref_src=twsrc%5Etfw)

In line with our commitment to client diversity, this tutorial will tackle how to run a Nimbus local testnet with Nethermind (if you wish to do the same with Geth, see [this document](https://github.com/status-im/nimbus-eth2/blob/unstable/docs/interop_merge.md)).

We assume you have a working and up to date installation of Nimbus - if this is not the case, please start by following the instructions [here](https://nimbus.guide/quick-start.html).

### 1- Install dotnet

[Nethermind](https://docs.nethermind.io/nethermind/) is a .NET Core-based Ethereum client, so the first step is to download dotnet.

```
https://dotnet.microsoft.com/download
```

_Note that you may need to download a specific version of dotnet to be able to build the Nethermind kintsugi branch. In this guide we use version `5.0.12`. By the time you read this guide you may need version `6.0`._

### 2- Build Nethermind

From the command line, run the following:

```
git clone https://github.com/NethermindEth/nethermind.git --recursive -b themerge_kintsugi
cd src/Nethermind
dotnet build Nethermind.sln -c Release
# if src/Nethermind/Nethermind.Runner/bin/Release/net5.0/plugins has no Nethermind.Merge.Plugin.dll plugin then you may need to run the build again
dotnet build Nethermind.sln -c Release
```

### 3- Run Nethermind

Once Nethermind has been built, you are ready to run it:

```
cd Nethermind.Runner
rm -rf bin/Release/net5.0/nethermind_db
dotnet run -c Release -- --config themerge_kintsugi_m2 --Merge.TerminalTotalDifficulty 0
```

### 4- Checkout the Nimbus Kintsugi branch

With Nethermind running, open a separate terminal window. Change into the `nimbus-eth2` directory and run:

```
git checkout kintsugi
git pull
make update
```

### 5- Launch local testnet

Still in `nimbus-eth2`, run:

```
./scripts/launch_local_testnet.sh --preset minimal --nodes 4 --disable-htop --stop-at-epoch 7 -- --verify-finalization --discv5:no
```

This will create a 4-node local testnet with 128 validators that will exist for 7 epochs. Feel free to try out different parameters if you so wish.

### 6- Check Nimbus' output

If all is working correctly, the Nimbus console output should look something like:

```
nimbus-eth2$ N=0; while ./scripts/launch_local_testnet.sh --preset minimal --nodes 4 --disable-htop --stop-at-epoch 8 -- --verify-finalization --discv5:no; do N=$((N+1)); echo "That was run #${N}"; sleep 67; done
Building: build/nimbus_beacon_node
Building: build/nimbus_signing_process
Building: build/deposit_contract
Build completed successfully: build/nimbus_signing_process
Build completed successfully: build/deposit_contract
Build completed successfully: build/nimbus_beacon_node
NOT 2021-11-17 15:40:11.894+01:00 Generating deposits                        tid=966934 file=keystore_management.nim:562 totalNewValidators=128 validatorsDir=local_testnet_data/validators secretsDir=local_testnet_data/secrets
NOT 2021-11-17 15:40:51.434+01:00 Deposit data written                       tid=966934 file=deposit_contract.nim:222 filename=local_testnet_data/deposits.json
Wrote local_testnet_data/genesis.ssz
WRN 2021-11-17 15:40:51.443+01:00 Using insecure password to lock networking key key_path=local_testnet_data/network_key.json
INF 2021-11-17 15:40:52.184+01:00 New network key storage was created        topics="networking" key_path=local_testnet_data/network_key.json network_public_key=08021221029b0d9c63dc15335b6f1f73dc359a0bda88a84cc7e0346f12e64084673a35a915
Wrote local_testnet_data/bootstrap_nodes.txt
Wrote local_testnet_data/config.yaml:
DEPOSIT_NETWORK_ID: 1
PRESET_BASE: minimal
MIN_GENESIS_ACTIVE_VALIDATOR_COUNT: 128
MIN_GENESIS_TIME: 0
GENESIS_DELAY: 10
DEPOSIT_CONTRACT_ADDRESS: 0x0000000000000000000000000000000000000000
ETH1_FOLLOW_DISTANCE: 1
ALTAIR_FORK_EPOCH: 1
MERGE_FORK_EPOCH: 2
TERMINAL_TOTAL_DIFFICULTY: 0
That was run #1
```

If you're using macOS you may also see a bunch of warnings that look like

```
warning: (x86_64)  could not find object file symbol for symbol _br_rsa_pkcs1_sig_unpad.pad1
```

You can safely ignore these.

### 7- Check Nethermind's output

On the Nethermind side, you should pay particular attention to the following JSON RPC calls: `engine_forkchoiceUpdatedV1`, `engine_getPayloadV1`, `engine_executePayloadV1` – these document the consensus calling the [engine api](https://github.com/ethereum/execution-apis/blob/v1.0.0-alpha.4/src/engine/specification.md) for a valuable payload.

To elaborate a little, in a post-merge beacon chain, a consensus layer client needs to call two functions from the execution layer client in order to prepare a block:

* `engine_forkchoiceUpdatedV1`, which returns the `status` (\`SUCCESS\` or \`SYNCING\`) and a `payloadId`.

* `engine_getPayloadV1` which accepts a `payloadId`.

The ultimate goal of these two calls is to allow for an execution (eth1) block to be included in a consensus (eth2) block.

_More formally**,** `engine_executePayloadV1` verifies the payload according to the execution environment rule set ([EIP-3675](https://eips.ethereum.org/EIPS/eip-3675#specification)) and returns the status of the verification_

`forkchoiceUpdatedV1` first propagates the change in the fork choice to the execution client (for example, the head of the chain and the finalized block must be updated according to the given data) before initiating the preparation of the payload  if it is needed; this allows the consensus client to be able to give the execution client some time to prepare the payload (i.e., find the best set of transactions it can from the mempool) before the `getPayloadV1` call is made.

To borrow an explanation from Danny Ryan, intuitively the call semantics are:

* "update your fork choice" (no payload build requested)

* "update your fork choice and start building something valuable on top of it!" (payload build requested)

The latter only happens when you need to propose a block.

### How do we know that the merge has happened?

The first `engine_executePayloadV1` method call that communicates a valid payload to the execution client initiates the Merge transition.

Then the first `[POS_FORKCHOICE_UPDATED](https://eips.ethereum.org/EIPS/eip-3675#specification)` event (in the form of a `engine_forkchoiceUpdatedV1` method call) that finalises the first communicated payload finishes the transition.

After the Merge transition is finalised, the Merge can be considered as having happened.

This tutorial is adapted from [Dustin Brody's original](https://github.com/status-im/nimbus-eth2/blob/unstable/docs/neth-m2-nimbus.md) (Dustin has been leading the charge on the Merge interop front at Nimbus). If you get stuck anywhere, or have any questions at all please don't hesitate to get in touch with us on our [discord](https://discord.gg/9SSF5tAd). You can keep track of our Kintsugi progress [here](https://github.com/status-im/nimbus-eth2/pull/3093), and Nethermind's progress [here](https://github.com/NethermindEth/nethermind/pull/3597).