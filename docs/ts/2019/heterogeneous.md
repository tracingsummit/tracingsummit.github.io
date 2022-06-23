---
layout: page
title: Tracing and debugging heterogeneous CPU-GPU systems
subtitle: 
redirect_from: /wiki/TracingSummit2019heterogeneous/
---

## Abstract
As part of their GPUOpen initiative, AMD has released a number of open source modules and tools to access performance counters and other data about GPU programs execution. This is now leveraged in the open source Trace Compass extensible trace visualiser, being developed by Ericsson, Polytechnique Montreal and the wider community. New views were added to display traces with profiles of GPU executions, alongside CPU traces, in order to get full visibility on heterogeneous programs execution. For example, the main application and OpenCL runtime typically runs on the CPU cores, while the OpenCL kernels execute asynchronously on the GPU. The new functionality will be demonstrated and its architecture described.

## Biography
Arnaud Fiorini is a Master's student in the department of Computer and Software Engineering at Polytechnique Montreal, under the supervision of Michel Dagenais. He is part of the team collaborating on the development of Trace Compass with Ericsson and the wider community.

## Target audience
The target audience is software engineers interested in multi-core and heterogeneous systems, especially GPGPU accelerators. It is also of interest to system engineers interested in advanced tracing and debugging tools.
