---
layout: post
title: Unbundling the Nimbus consensus client - Part one
description: Nimbus has released a production-ready version of its validator client, addressing a key demand from node operators and advanced users.
authors: status
date: 2022-12-30T09:00
published: true
---

# Unbundling the Nimbus consensus client: Part one

<!-- truncate -->

![header-image](/posts/unbundling-nimbus-client-1/header.jpeg)

Nimbus has released a production-ready version of its validator client, addressing a key demand from node operators and advanced users. The client is highly performant and requires low resources, allowing it to run on a range of devices — from embedded systems to enterprise servers.

By default, the Nimbus consensus client's design allows validators to be run directly from the beacon node, simplifying validator setup. This makes it an ideal choice for solo-stakers, and select node operators that want to use the Nimbus beacon node. However, it made it difficult for operators to use Nimbus in their existing setups, which often feature one or more client beacon nodes interacting with multiple validator clients.

For example, one node operator runs a Teku beacon node with Teku and LH validator clients. Another operator runs a Vouch-based setup with four different client beacon nodes and a Vouch validator client. This also includes node operators in the Rocket Pool network that run several mini-pools. Each operator has fine-tuned their setup for redundancy, performance and resource consistency. It was understandably challenging for these users to directly use the default Nimbus setup of an integrated beacon node and validator client, which would mean a completely different stack to maintain and manage.

Release v22.11.0 allows users to run the Nimbus validator client independently with beacon nodes from other clients, giving operators greater flexibility and the ability to introduce Nimbus into their existing setups with minimal change. This configuration is ideal for operators running hundreds to thousands of validators.

Additionally, the new release includes improvements and fixes. For example, the beacon node is now compatible with validator clients taking advantage of the /eth/v1/beacon/blinded_blocks endpoint, and enables much faster loading of the validator keystore during startup.

Nimbus's privacy characteristics, including its low public profile and support for publishing blocks to separate nodes (such that the validator cannot be matched to its IP address by listening to attestation traffic), make it an attractive choice for advanced users and node operators.

The Nimbus team will continue to support and improve the standalone beacon node setup for individual users and hope to see more operators include the Nimbus validator client in their fleet to improve overall client diversity across the Ethereum network.

Check our blog and follow our social channels to stay up to date with all the latest Nimbus ecosystem developments:

- [Blog](https://our.status.im/tag/nimbus/)

- [Twitter](https://twitter.com/ethnimbus)

- [Discord](https://discord.com/invite/qnjVyhatUa)

- [GitHub](https://github.com/status-im)