---
layout: page
title: Hardware trace
subtitle: the ultimate Linux performance tuning tool
redirect_from: /wiki/TracingSummit2014HWTracingARM/
---

## Abstract
The talk is focused on how the hardware trace features on many SoCs can be practically used by ordinary software developers to investigate Linux performance issues. We'll describe ARM's CoreSight trace technology in enough detail to make the talk useful to people not familiar with hardware trace, but the talk will focus on the practical application of hardware trace to Linux - e.g. how trace can be set up from within the OS, how hardware instrumentation trace (STM) can be used to support existing Linux trace mechanisms such as ftrace, and how hardware-based instruction trace can be configured and visualized to solve problems out of reach of these software-based mechanisms. We'll look at some of the practical issues with using hardware trace and how these can be dealt with.

The second part of the presentation will focus on the new framework proposed by Linaro to support Coresight and hardware assisted tracing in the Linux kernel. More specifically we will go over the solution, the current state of upstreaming and the challenges still ahead. If time permits we will see an example of HW trace decoding using the framework in the Linux kernel.

## Audience
Reasonably experienced software developers, but hardware/kernel experience not essential - it would be great to have apps developers looking to understand what hardware trace can do for them. Anyone interested in having a consolidated and upstream approach to ARM hardware tracing in the Linux kernel.

## Biography
Al Grant is a performance architect at ARM, using hardware trace and other tools to improve the efficiency of CPU designs, compilers, OSes and software. Al led the development of the first ARM 64-bit compiler.

Mathieu Poirier is part of the Core Development group at Linaro where he is currently involved in an effort to upstream a framework and a set of drivers to support Coresight in the Linux kernel.
