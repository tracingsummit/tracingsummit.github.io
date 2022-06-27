---
layout: page
title: Tracing Cloud Workloads for Processor Design Evaluations
subtitle: 
redirect_from: /wiki/TracingSummit2015TracingCloud/
---

## Abstract
With the advent of emerging workloads, the future processor designs are aimed to scale up computational resources and performance to better accommodate these workload behaviors. Given that, system simulators and workload traces are essential to gather insights on the workload characteristics for design validation of future processors. In this talk we present about generating representative workload traces using functional simulator for POWER processors. We specifically present a use case scenario of trace collection and extraction of a Cloud efficient database server (MongoDB) driven by a Cloud benchmark (YCSB) on a Linux platform. There are unique challenges in Cloud workload tracing. How do we ensure that the collected trace is truly a representation of the workload behavior? How can we map the trace to understand which part of the workload runtime was captured in the trace? Applying these techniques we attempt to generate high quality traces for MongoDB which is critical for performance enhancements in processor design, compilers, OS etc.

## Audience
System designers interested to understand how functional simulator could be used for generating representative traces of workloads and evaluating future processor designs. The session can be of interest to any experienced software developer with reasonable Linux background to understand more on the tracing methodologies used. Hardware or kernel experience is not essential.

## Biography
Saritha Vinod and Biplob Mishra are performance analysts at IBM, where they are involved in tracing and analysis of emerging workloads on IBM POWER hardware, and trace processing tools for Linux and other platforms.
