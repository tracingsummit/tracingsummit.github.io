---
layout: page
title: Integration of the LTTng user-space tracer with the rseq system call
subtitle: 
redirect_from: /wiki/TracingSummit2019lttng/
---

## Abstract
Integration of the rseq (Restartable Sequences) system call into applications brings interesting speedups, but also raises concerns about robustness and forward progress guarantees in corner-case scenarios.

This talk will discuss those concerns, and present a new system call designed to solve them: do_on_cpu(), an eBPF kernel interpreter specialized in accessing user-space memory within IPI (inter-processor interrupt) context. This allows using the rseq system call for the user-space tracer fast-path, but fall-back to a the do_on_cpu system call for situations not handled by rseq.

The rseq system call has been upstreamed into Linux 4.18. The do_on_cpu system call is not upstream yet as of Linux 5.3.

## Biography
Mathieu Desnoyers main contributions are in the area of tracing (monitoring/performance analysis/debugging), scalability, and performance, both at the kernel and user-space levels. He maintains the LTTng project, the Userspace RCU library, as well as the Linux kernel membarrier and restartable sequences system calls. He works in close collaboration with the telecommunication industry, many Linux distributions, and with customers developing hardware scaling from small embedded devices to large-deployment servers. He is CEO and Software Engineer at EfficiOS.
