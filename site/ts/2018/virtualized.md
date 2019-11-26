---
layout: page
title: Execution Flow Analysis Across Virtualized Environments for performance understanding and optimisation
subtitle: 
redirect_from: /wiki/TracingSummit2018virtualized/
---

## Abstract
With the consolidation of computer services in large cloud-based data centers, most modern applications execute in virtualized systems. However, performance bottleneck identification and root cause analysis is a challenging task with virtualized environments, because of the multiple layers and the underlying complexity. This challenge often becomes more complicated when, because of security issues, the infrastructure provider does not have access to the VMs internals. Thus, in the case of performance issues, the Infrastructure as a Service (IaaS) provider cannot easily provide useful insight. Moreover, cloud users sometimes use virtualization within their applications, leading to nested VMs. In such cases, performance problems are more frequent, while being more difficult to diagnose, because of the added layers of code virtualization and emulation.

In this presentation, we describe a unified VM analysis tool based on the LTTng tracer and the Trace Compass trace analysis and viewing framework. This tool helps IaaS providers, application developers, and system administrators to understand the performance, and analyze the root causes of problems in multi-layer virtualized applications. We detail use cases relying on LTTng to trace and debug nested virtualized environments, at different levels from userspace to kernel (system calls, I/O operations, network traffic), driver (block device) and hardware. Our techniques can uncover information about root causes of issues, even when they are internal to a VM. The presentation will conclude with a demonstration of tracing and analysing a real issue, in well-known applications (Hadoop, Apache2, and MySQL) inside a VM, and detecting the root causes behind its slow response time.

Experience Level: Intermediate

## Target audience
* Subject to frustration due to abnormal latencies in virtualized environments, and looking for solutions
* IaaS providers, Developers and system administrators who use tracing to better understand their system behaviour.
* Who are just curious to know what is going on inside their VM or Container.

## Biography
Hani Nemati is currently working toward the PhD degree in Computer Engineering at Polytechnique Montreal. His current research focus is on Virtualization, Cloud Computing, Distributed Systems, and automatic analysis of operating system traces. Hani has developed several tracing enhancements used in industry, published various articles and spoken in several technical conferences.

François Tétreault is a Base Platform Software Architect at Ciena. His research interests are related to operating system tracing, modelling and debugging tools. His open source contributions are in the area of LTTng and Trace Compass, collaborating with Polytechnique Montreal, EfficiOS, and the broader community.
