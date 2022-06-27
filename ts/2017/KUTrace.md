---
layout: page
title: KUTrace
subtitle: Where have all the nanoseconds gone?
redirect_from: /wiki/TracingSummit2017KUTrace/
---

## Abstract
Understanding tail latency in user-facing datacenter transactions requires complete traces, not profiles, of CPU events over a few minutes, with less than 1% CPU and memory overhead. Existing tracing tools such as DTRACE or tcpdump have much-too-high overhead for use in this environment.

KUTrace is a Linux-based facility for tracing and timestamping every single transition between kernel and user code -- every system call and return, interrupt/return, fault/return and every context switch. At 200,000 events per second per core under live load, the CPU overhead is 1/4 of 1%, and the RAM overhead per minute is also about 1/4 of 1% for a 24-core 256GB server. This is 30x faster than DTRACE and and 12x less memory than KTRACE. The matching multicore vs. time visualisation is all SVG in a browser, using the d3.js library.

An earlier version of KUTrace is used in Google datacenters.

## Target audience
Professionals who build and maintain datacenter operating systems, or who pursue understanding of long-tail-latency problems in user-facing transaction software. KUTrace shows what each CPU core of a server is doing every nanosecond, revealing unexpected dynamics, reasons for thread blockage, delayed interrupt delivery, background-task interference, etc. Trace entries are four bytes each, just <timestamp, event>. The implementation is about 300 lines of Linux kernel patches plus an 800-line loadable module plus postprocessing C programs and HTML/JavaScript display. Some of the target audience may want to move this implementation to their own environment.

## Biography
Dick Sites is currently an Invited Professor at EPFL Lausanne, teaching a graduate class on Datacenter Software Dynamics. In 2016 he taught an earlier version at the National University of Singapore. Prior to that, he worked at Google, Adobe Systems, Digital Equipment Corporation, Hewlett-Packard, Burroughs, and IBM. He also taught Computer Science at UC/San Diego in the 1970s. His accomplishments include co-architecting the DEC Alpha computers and building computer performance monitoring and tracing tools at the above companies. At Google, this included understanding CPU, disk, and network performance anomalies. Dr. Sites holds a PhD in Computer Science from Stanford and a BS in Mathematics from MIT. He also attended the Master's program in Computer Science at UNC Chapel Hill. He holds 39 patents and is a member of the U.S. National Academy of Engineering.
