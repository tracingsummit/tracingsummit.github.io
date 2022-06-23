---
layout: page
title: LTTng's trace filtering and beyond
subtitle: A unified approach and eBPF's role
redirect_from: /wiki/TracingSummit2015LTTngFiltering/
---

## Abstract
Embedded and distributed systems are getting increasingly complex and generate large number of high frequency events - both at userspace and kernel levels. Analysis of such huge trace data means that there would be a considerable amount of time spent in finding out what really interests users. There have however been techniques developed to filter out traces at runtime before. The Linux kernel has recently been using the extended Berkeley Packet Filter (eBPF) infrastructure for trace filtering. The support has been extended to kprobes as well. In userspace and kernel, different tools (such as LTTng) provide their own trace filtering techniques - the most common way being converting the filter expression to a bytecode representation and then interpreting this using their own tiny VM implementations. This has already been implemented for userspace and is in the process to be a part of kernel tracing modules as well. However, different tools providing different techniques could benefit from a unified filtering mechanism. With considerable yet minor advancements in the tiny filtering VMs (such as extensions to infrastructure, data sharing and JIT compilation techniques), such filtering mechanisms could even be used to do tasks beyond their original goals - such as predefined 'actions', conditional dynamic 'actions', stateful filtering and runtime data aggregation, co-operative kernel and userspace filtering etc. In this presentation I would like to discuss the following points:

* State of LTTng's trace filtering technique,
* Evolution, internals and performance of Linux's eBPF based filtering approach,
* An experimental userspace eBPF library for experimentation and performance evaluation of JITed and interpreted filters,
* A possible co-operative Kernel-Userspace tracing scenario to go beyond just filtering with eBPF.

## Audience
Target audience would be folks;

* Willing to explore more about internals of eBPF and LTTng bytecode interpreters.
* Looking for faster filters for their high speed, high frequency events, limited storage trace filtering needs.
* Wanting to know more about LTTng's filtering and how eBPF fits in.
* Who are just curious to know what's going on in filtering and it's use in tracing.

## Biography
Suchakra is a PhD student in Computer Engineering at École Polytechnique de Montréal. His research is currently focused on the use of interpreted and JITed bytecode filters for improvements in trace filtering and analysis. He also explored dynamic instrumentation in tracing and debugging tools like LTTng and GDB. He briefly worked at Tata Consultancy Services as a developer for automotive infotainment systems, before venturing out for his PhD studies.

Suchakra has delivered talks in various conferences in India, such as Fedora Users and Developers Conference, 2011/2015 (Pune), GNUnify 2010 and GNUnify 2012 (Pune), FOSS.in (Fedora Miniconf) (Bangalore) 2010, where he presented his experiments with Embedded Linux, Qt Framework and hardware emulation in QEMU. He has also written an article series on high performance tracing using LTTng, which was published in 'Open Source For You' last year.
