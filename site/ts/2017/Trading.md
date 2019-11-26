---
layout: page
title: Investigating and reducing latency of trading applications
subtitle: 
redirect_from: /wiki/TracingSummit2017Trading/
---

## Abstract
Institutions that implement high-frequency trading may gain a significant competitive advantage in the open market by outperforming market trends. This is achieved with careful design and implementation of trading algorithms who's latency can be managed in a deterministic way.

However, there still remain external sources of latency:

* multiple application threads contending for the same CPU core
* suboptimal scheduling with respect to NUMA layout
* unmanaged interrupt processing
* unnecessary OS features left enabled that require processing time
* and others

This presentation will cover methods that were used to discover external latency based on both conventional sources of information available in Linux and emerging technologies: perf, ftrace and systemtap.

## Audience
Devops engineers, system administrators, application developers of low-latency or real-time applications who are interested in minimizing and managing latency. Also everyone interested in linux kernel and new kernel tracing technologies.

## Biography
I work as a devops engineer at Deutsche Bank Tech Centre. We create technology for trading on financial markets. My main focus is providing stable Linux platform, solving performance issues is a part of the work. Previously I worked at MCST, producer of CPU Elbrus which is based on VLIW architecture, where I ported linux distribution and investigated performance issues of software on new platform.
