---
layout: page
title: Discover what your app is waiting with kernel tracing
subtitle: 
redirect_from: /wiki/TracingSummit2014WhyAppWaiting/
---

## Abstract
System administrators and developers are challenged by understanding the elapsed time of heterogeneous and distributed programs in order to improve response time. Profilers are useful to identify hotspot code in an application, but they do not take the wait time into account. A task can block for a device, a local task using any inter-process communication or a task running on another computer. We present a technique using solely kernel tracing to recover the active path of a computation, crossing machines barrier. The technique uses scheduling, interrupt and network events, but does not require system call tracing nor user space instrumentation. Therefore, this technique works for any programming language, and includes interactions with kernel threads. We show the analysis result of actual use-cases, including shell scripts, RPC request, file server and web app.

## Audience
The main audiences are system administrators and developers concerned by performance issues of distributed applications. In addition, kernel developers may be interested into the instrumentation required to perform this analysis efficiently. In general, it should benefit anybody interested to see how software design influence the relationship between tasks according to time, which is mainly hidden and that must be imagined otherwise.

## Biography
Francis Giraldeau is a Linux enthusiast since 15 years. He deployed large-scale and high-availability infrastructure based on open source software, and worked as software quality manager, which led him to contribute patches to many projects. He developed the support for Apache web server in the Augeas configuration file editing tool. Currently, his research focuses on the automatic analysis of operating system traces to understand the performance and the behavior of distributed applications.
