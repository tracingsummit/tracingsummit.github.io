---
layout: page
title: LTTngTop
subtitle: Human Readable Trace Viewer
redirect_from: /wiki/TracingSummit2012LTTngTop/
---

## Abstract
LTTngTop is a top-alike kernel trace viewer. It uses the LTTng trace format (CTF) as input and benefits from the whole kernel tracing infrastructure (tracepoints, kprobes, kretprobes and perf PMU counters). This tool uses the tracing information to represent the state of the kernel at any point in time. As of now it displays the CPU and I/O usage, as well as the performance (PMU) counters evolution associated with all processes. It also provides a detailed view for each process including the file descriptors opened and the amount of data read and written for each. This project is still in active development mode as live tracing is being included and more views are added progressively to suit the needs of developers and system administrators. After presenting the tool and its potential, the discussion will cover the future views and analysis that the Linux Plumbers would be most interested in.

## Biography
Julien Desfossez is a software developer at Efficios Inc. He comes from a background of large scale system administration and security after working several years at Revolution Linux. He is now also a Ph.D. student at Polytechnique Montreal. His main focus is Linux kernel tracing as a debugging facility for large scale data centers.
