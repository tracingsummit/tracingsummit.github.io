---
layout: page
title: TraceCompare
subtitle: Automatic Identification of Differences between Executions
redirect_from: /wiki/TracingSummit2015TraceCompare/
---

## Abstract
Many factors can introduce permanent or sporadic performance variations in an application. Those can be diagnosed by collecting metrics at the kernel and userspace levels. However, it can be hard for a single developer to determine whether collected metrics meet expectations.

TraceCompare is a tool that automatically identifies differences between groups of executions. It can compare slow requests against fast ones, requests that used the disk a lot against those that didn't use it, etc. It combines events from multiple userspace and kernel traces to associate the on-CPU and off-CPU delays found in the analyzed executions to distributed call stacks. Then, it reveals differences between two groups using histograms and differential flame graphs.

Four case studies show how the tool has been used to diagnose and fix real performance problems in open-source and enterprise applications.

## Audience
The main audience is application developers who are looking for a unified solution to automatically detect and diagnose abnormal delays occurring at multiple levels in parallel and distributed systems­. Also, developers of tracing tools will be interested in learning how live filtering can greatly reduce the overhead of tracing.

## Biography
François Doray is a master’s student in the DORSAL laboratory of Polytechnique Montréal. He has contributed to the tracing infrastructure integrated into the Google Chrome browser.
