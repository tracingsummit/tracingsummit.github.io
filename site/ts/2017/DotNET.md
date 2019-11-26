---
layout: page
title: Bringing the Windows .NET Performance Diagnostics Experience to Linux
subtitle: 
redirect_from: /wiki/TracingSummit2017DotNET/
---

## Abstract
With the release of .NET Core, Microsoft now supports running .NET applications on Linux. Understanding the performance of these applications means not only having insight into machine-level resources such as CPU and memory, but also being able to gather and show properly correlated data on .NET runtime components such as the allocator and garbage collector, just-in-time compiler, and thread pool. We've learned a great deal, and have made good progress towards being able to deeply understand the performance of .NET applications on Linux. Successes include the ability to trace .NET managed code using perf and the ability to collect .NET runtime-level trace data using LTTng. At the same time, we've stumbled in areas such as capturing of call stacks for important tracepoints in the runtime, resolution of managed code symbols, and integration of .NET application-level tracing APIs with existing tools on Linux.

This presentation will be a walk-through of what's possible today, demos of tracing techniques, stumbling blocks encountered, and where we want to go from here. While this is a case study about .NET, many of the lessons learned should apply to other managed runtimes.

## Audience
This talk is targeted at developers of tracing technologies and those interested in tracing .NET and other managed applications.

## Biography
Brian Robbins enjoys solving hard performance problems. He has spent half of his career solving performance problems in the .NET runtime, framework, and .NET apps. He is a Principal Software Engineer on the .NET Reliability and Performance team at Microsoft.
