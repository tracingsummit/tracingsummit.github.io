---
layout: page
title: Perfetto
subtitle: Platform-wide performance instrumentation and tracing for Android and Chrome
redirect_from: /wiki/TracingSummit2018perfetto/
---

## Abstract
Perfetto is the next-generation performance tracing ecosystem for Android and Chrome. This talk will cover the unique challenges that the team needed to overcome to create an integrated solution for their performance tracing needs, ranging from supporting local debugging to analyzing traces from thousands devices in testing labs. The talk will cover:

* Our library for low-overhead userspace-to-userspace tracing.
* Integration with Linux kernel's ftrace and /proc interfaces.
* Trace Processor: a library for ingesting traces exposing them in the form of SQL virtual tables based on a SQLite query engine.
* The Perfetto UI for visualizing and analyzing traces.
* Upcoming plans for heap profiling and perf sampling.

## Target audience
People who have a sufficient familiarity with ftrace, /proc interfaces, perf sampling and memory profiling.

## Biography
Primiano Tucci, PhD in computer engineering, is a staff engineer at Google working with the Chrome and Android teams. He leads the the performance group behind the Perfetto project (www.perfetto.dev) focusing on tracing and performance tooling. He is an owner of Chrome's //base/allocator and chrome://tracing. In the past 4 years has been leading the Memory Infra project (bit.ly/memoryinfra) working on memory tracing tools and infrastructure for Chrome.
