---
layout: post
title: Nimbus client 2022 year-end recap
description: As 2022 winds down, the Nimbus research team reflects on another year of building the infrastructure needed to maximally decentralize the Ethereum network.
date: 2022-12-30T10:00
authors: status
published: true
---

# Nimbus client 2022 year-end recap

<!-- truncate -->

![header-image](/posts/nimbus-2022-recap/header.jpeg)

As 2022 winds down, the Nimbus research team reflects on another year of building the infrastructure needed to maximally decentralize the Ethereum network. Here's our recap of updates to the Nimbus consensus client over the past 12 months.

## Nimbus' 2022 unpacked

The broader Ethereum ecosystem enjoyed a momentous 2022. Taking center stage, of course, was the Mainnet Merge — arguably the most ambitious software update ever orchestrated.

This year has been equally important for the Nimbus client. Among the 20 major and minor releases shipped, there were several significant improvements, changes and feature updates made to the Nimbus client in the last 12 months.

Some of 2022's key highlights include:

1. The long-awaited [split client mode](https://github.com/status-im/nimbus-eth2/issues/3088). This mode enables a more flexible setup: running the Nimbus validator client independently of the beacon node. Through the validator client, advanced node operators such as institutional users and pool operators can take advantage of features like redundant beacon nodes, enhanced validator privacy and distributed keystores. Meanwhile, existing users can still use the streamlined stand-alone beacon node setup, as this mode of operation is continued to be supported and improved.  

2. Marked enhancements leading up to a successful Ethereum Mainnet Merge and the stable performance of Nimbus in the post-merge network.

3. Support for [trusted node sync](https://nimbus.guide/trusted-node-sync.html) (also known as checkpoint sync).  

4. Support for [external block builders](https://nimbus.guide/external-block-builder.html) — aka MEV — leading up to the Merge.  

5. Support for the Ethereum-defined REST API endpoints for light client sync.  

6. Beta release for the [Nimbus stand-alone light client](https://nimbus.guide/el-light-client.html). It can be used to run any execution client without requiring a full-blown beacon node.  

7. Improved metrics to [track validator activity](https://nimbus.guide/validator-monitor.html).  

8. Continued improvement in [client efficiency](https://github.com/status-im/nimbus-eth2/releases/tag/v22.12.0). Now Nimbus requires less CPU, lower bandwidth and smaller memory space.  

9. Support for the [Keymanager API](https://nimbus.guide/keymanager-api.html) and remote keystores. With the Keymanager API, users can add, remove and migrate validators on the fly.  

10. Significant improvement in the [Nimbus guide](https://nimbus.guide/) in terms of content and coverage.

The Nimbus team is grateful to the many contributors, community champions and users who collectively pushed for greater client diversity in the network, shared valuable feedback and celebrated each milestone with us.

As we conclude the Year of the Panda, we look forward to the Year of the Owl alongside the community.

_Check our blog and follow our social channels to stay up to date with all the latest Nimbus ecosystem developments:_

- [Blog](https://our.status.im/tag/nimbus/)

- [Twitter](https://twitter.com/ethnimbus)

- [Discord](https://discord.com/invite/qnjVyhatUa)

- [GitHub](https://github.com/status-im)