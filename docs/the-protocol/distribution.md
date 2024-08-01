---
sidebar_position: 3
title: Distribution
description: Description ahout anon
hide_table_of_contents: true
---
### Smartweave

ATOR leverages Smartweave to distribute tokens gaslessly (but immutably) on Arweave - these 'distribution layer' tokens remain assigned to each recipient ETH address until they are claimed and received on Ethereum. These distribution events that assign distribution-layer ATOR tokens to ETH addresses happen hourly, and must use published Arweave consensus weight metrics as their 'source of truth'. As such, distribution remains trustless so long as the initial Arweave consensus weight metrics are validated by all parties.

### Oracle

ATOR assigned for a given, fixed time period (such as a day) is apportioned for the interval since the last published metric (so a 70-minute interval between the previous metric read will mean the next set of metrics will determine ATOR distribution for 70 / (24*60) of the predetermined daily distribution - find out more about our tokenomics in our [tokenomics paper](https://docs.ator.io/resources/whitepapers)). A dedicated 'ATOR' token is then distributed on Smartweave, which can then be read lazily by our ETH distribution contract using the validator oracle. Our oracle involves the end-user funding the gas required to push the metrics from Arweave to Ethereum chain, and will in the future be better anonymizing by allowing gas to be paid for in proxy through distribution-layer ATOR on Smartweave itself. 
