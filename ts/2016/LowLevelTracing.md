---
layout: page
title: Low-Level Tracing for Latency Analysis
subtitle: From Baremetal to Hardware Tracing Blocks
redirect_from: /wiki/TracingSummit2016LowLevelTracing/
---

## Abstract
Real-time embedded systems present a new challenge for performance analysis. Very detailed information about missed scheduling or interrupt latencies are hard to obtain. Some of the most common techniques in use are the irqsoff/preemptirqsoff/wakeup-rt [Ftrace](https://www.kernel.org/doc/Documentation/trace/ftrace.txt) target, cyclictest, [LTTng Latency Tracker](https://lttng.org/blog/2016/01/06/monitoring-realtime-latencies/). As abnormal latencies for long-running systems may be hard to [catch](http://multivax.blogspot.ca/2016/02/real-life-real-time-problem.html), adding hardware assistance is a bonus. [Intel PT](http://lxr.free-electrons.com/source/tools/perf/Documentation/intel-pt.txt) and [ARM CoreSight](https://github.com/Linaro/OpenCSD/blob/arm-dev/HOWTO.md) have advanced enough and now provide highly usable perf integration along with open sourced [decoders](https://github.com/01org/processor-trace) which is a very welcome step, as it would eventually lead to higher adoption in industry standard analysis tools. Targeted software triggered snapshots are perhaps the best usecase in latency detection, where normal software tracers need more detailed instruction-level context information. Pure hardware tracers could also be useful in gathering latency profiles from direct instruction analysis (such as STI, CLI and friends) but, without targeted snapshots, at a huge cost in terms of trace bandwidth (200-500 MBps range). In another context of low level tracing, on heterogeneous sytems, where main cores offload computation to specialized cores (DSP/GPUs) on the same SoC, latencies caused by different sections of code may be difficult to gather. We therefore explore baremetal tracing using tools such as [bareCTF](https://github.com/efficios/barectf), with modern processors such as TI Keystone 2, in a path towards a generic tracing environment that encompasses software, hardware-assisted software, and even baremetal tracing, to view the complete software flow at all levels for better detection of latencies.

In this presentation we would like to discuss the following points:

* Real-time latencies and their causes and monitoring challenges,
* Hardware tracing on Intel and ARM - features, comparisons, trade-offs and use-cases,
* Tracing heterogeneous systems - challenges, state of the art,
* An integrated hardware-assisted software tracing approach.

## Audience
The target audience would be developers:

* Frustrated with abnormal latencies in real-time systems and looking for solutions,
* Conversant with latencies on systems and want to know what hardware tracing can bring to the table,
* Willing to know how barectf can help in low level baremetal tracing,
* Who are just curious about the future of tracers and the role of hardware-assistance tracing.

## Biography
Suchakra is a PhD student in Computer Engineering at École Polytechnique de Montréal. His research is currently focused on hardware tracing infrastructure in Intel and ARM and its possible uses in conjunction with software tracing. He also explored JIT-compiled trace filters with eBPF and dynamic instrumentation in tracing and debugging tools like LTTng and GDB. He briefly worked at Tata Consultancy Services as a developer for automotive infotainment systems, before venturing out for his PhD studies.
