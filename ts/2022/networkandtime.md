---
layout: page
title: Bringing network and time together using Linux tracing
---

## Abstract
This talk is about visualizing a distributed network protocol by using the [trace-cmd](https://trace-cmd.org/) time synchronized trace events feature. As example, we use the [Linux Distributed Lock Manager](https://en.wikipedia.org/wiki/Distributed_lock_manager) (DLM) protocol to visualize lock states over time in the [jumpshot](https://www.mcs.anl.gov/research/projects/perfvis/software/viewers/index.htm#Jumpshot-4) viewer.

Trace-cmd is the user space tracing utility to control the Linux in-kernel tracing subsystem. Recently a new feature was introduced to record multiple Linux machines tracing events with their timestamps synchronized across those machines.

The Linux Distributed Lock Manager (DLM) subsystem is a distributed network protocol used by Linux clusters to control mutual access to shared resources. Current DLM debugging methods are limited by dumping lock states via command line interfaces e.g. debugfs. Those dumps can only be taken sequentially and without being time synchronized. Means it will not represent all lock states at one time. Additionally, those cli dumps need to be merged on your own to see a connection between them.

The [slog2sdk](https://www.mcs.anl.gov/research/projects/perfvis/download/index.htm#slog2sdk) containing the viewer jumpshot will be used to represent the DLM protocol lock states over time by using a [GANTT chart](https://en.wikipedia.org/wiki/Gantt_chart). Therefore, a trace converter [dlm2slog2](https://gitlab.com/netcoder/dlm2slog2/-/wikis/home) was developed to build a bridge between those components of trace-cmd/Linux tracing subsystem and slog2sdk.

In this talk I will show how time synchronized Linux traces can be
visualized in jumpshot. This approach can be adapted to other
distributed network protocols as well and is not limited for debugging
use cases. Moreover, we will look into overcoming problems and
possible new ideas on how to use time synchronized tracing events in a
distributed network.
