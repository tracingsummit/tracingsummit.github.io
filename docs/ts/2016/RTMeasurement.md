---
layout: page
title: Real-Time Response Time Measurement by Integration of Trace Buffering and Aggregation Tools
subtitle: 
redirect_from: /wiki/TracingSummit2016RTMeasurement/
---

## Abstract
In real-time systems, as well as in production servers, the response time to a stimulation is a very important metric that can be difficult to measure accurately. In this talk, we present a module of the [latency-tracker project](https://github.com/efficios/latency-tracker) dedicated to measure in real-time the delay between the arrival of an interrupt and the end of processing in user-space. We will see how we can make a link between all the trace events generated in the kernel during the processing of an interrupt, and up to where in user-space we can follow this processing with and without the collaboration of the target application. The goal of this project is to make it possible to perform these measurements in production with a minimal overhead and react immediately when a high response time is detected. The output produced by this tool is a clear entry point in the trace that greatly reduces the time to understand the cause of a problem.

We present how to combine tracing and aggregation tools to automatically detect latency outliers in production systems, capture detailed context information focused around each occurrence, and perform off-line root cause analysis.

## Audience
System administrators and low-latency application developers should be interested by this topic.

## Biography
Mathieu Desnoyers main contributions are in the area of tracing (monitoring/performance analysis/debugging) and scalability, both at the kernel and user-space levels. He maintains the LTTng project, the Userspace RCU library, as well as the Linux kernel membarrier system call. He works in close collaboration with the telecommunication industry, many Linux distributions, and with customers developing hardware scaling from small embedded devices to large-deployment servers. He is CEO and Senior Software Architect at EfficiOS.
