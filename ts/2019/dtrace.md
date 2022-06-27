---
layout: page
title: DTrace-on-eBPF
subtitle: 
redirect_from: /wiki/TracingSummit2019dtrace/
---

## Abstract
DTrace is a mature programmable tracing solution on multiple operating systems that many people are familiar with. DTrace was implemented on Linux quite a few years ago, offering the tracing solution that people were already familiar with. It involved a pretty extensive set of patches to provide the functionality needed.

In recent years, new tracing facilities in the Linux kernel have become available making a more light-weight implementation of DTrace possible. We can greatly reduces the duplication of kernel code, inter-operate with other tracing solutions, and contribute to the maintenance of kenrnel facilities.

The presentation will give an in-depth look at the new implementation of DTrace. It will highlight how DTrace will fit into the overall Linux tracing infrastructure, what facilities it will make use of, and also what DTrace can contribute to tracing on Linux.

## Biography
Kris Van Hees is a Consulting Engineer at Oracle. He works in the Languages and Tools division of Linux Engineering, with a primary focus on debugging and tracing tools.

## Target Audience
The presentation is geared towards kernel developers, tracing tool developers, and anyone generally interested in tracing on Linux. No knowledge of DTrace is necessary though it can be beneficial. Familiarity with kernel tracing facilities is beneficial as well.
