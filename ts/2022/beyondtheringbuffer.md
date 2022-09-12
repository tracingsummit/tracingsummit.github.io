---
layout: page
title: "LTTng: Beyond Ring-Buffer Based Tracing"
---

## Abstract
Traditional tracers focus on efficiently recording events to ring buffers and produce execution traces. While traces are helpful to troubleshoot complex problems, their size makes them hard to use in continuous monitoring scenarios.

This presentation covers two new mechanisms introduced in LTTng to work around this problem: triggers and aggregation maps. Triggers allow you to define rules to notify external applications or change your tracing configuration based on tracing events and their content. This makes it possible to continuously monitor systems for problematic user and kernel space events to only collect detailed information when they occur. Aggregation maps, like their BPF counterparts, allow you to use the existing kernel to collect statistics based on the existing kernel instrumentation.

However, LTTng also introduces user space per-CPU aggregation maps to provide a very efficient way of extracting statistics from applications. You’ll see how we can combine these features with traditional tracing to get detailed insights into production systems, without the pain of dealing with oodles of data.

# Biography
Jérémie Galarneau maintains the LTTng-tools and Babeltrace projects, and has contributed to various open-source projects over the years. His experience covers real-time image processing, graphics programming, and tracing tools development.

