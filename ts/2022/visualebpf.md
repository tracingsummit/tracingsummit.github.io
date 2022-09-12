---
layout: page
title: "Visual eBPF: Live Programming Observability on Linux"
---

## Abstract
An operating system kernel is the ultimate source of knowledge about everything that happens inside a machine or a container. To make this knowledge readily accessible, Linux exposes eBPF, the in-kernel virtual machine, which allows you to run custom code in the context of the kernel. With it, you can collect, aggregate, and process large quantities of traces which tremendously helps in finding performance bottlenecks or monitoring system faults.

eBPF has a problem, though. It's complex. There are lots of ready-made tools, but to write your own programs, you need to know a lot about low-level development - which is a considerable entry barrier.

In this talk, we will discuss a novel approach to writing eBPF programs, borrowing ideas from live coding environments and visual programming. We will have a look at a new open source tool, Metalens, which allows you to compose eBPF programs from simple, visual building blocks and integrate them with your development and operations workflows.

## Target audience
Developers who are interested in using eBPF and advanced tracing but haven't had a chance to build their own tools due to the high entry barriers. Familiarity with the Linux kernel and its basic tracing features is assumed but no knowledge of eBPF is necessary.
