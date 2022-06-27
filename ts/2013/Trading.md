---
layout: page
title: Latency Analysis in the Trading Community
subtitle: 
redirect_from: /wiki/TracingSummit2013Trading/
---

## Abstract
In the financial services industry companies often compete on the basis of the speed with which financial transactions can be performed. Ongoing latency analysis of the critical information paths between systems and within systems is a necessity in order to find bottlenecks.

Such a situation presents unique challenges because timestamps from within various systems (some outside of the direct control of a company such as a stock exchange) have to be correlated with timestamps attached to packets by network devices and the timing information within the host itself as the information gets processed through various layers of software by the operating system and user space.

The talk will give an overview of how latencies are currently analyzed in the financial industry showing how Linux tracing currently fits into that model and what improvements would be beneficial to increase the usefulness of tracing for financial services.
