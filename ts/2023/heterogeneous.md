---
layout: page
title: Tracing Heterogeneous Programing Models with Lttng and Babeltrace
---

## Abstract

THAPI (Tracing Heterogeneous APIs / https://github.com/argonne-lcf/THAPI) is an
open-source tracing infrastructure for HPC platforms that use accelerators,
developed at Argonne National Laboratory. It intercepts the low-level API calls
(L0, CUDA driven, Cuda Runtime, HIP, OpenCL, OpenMP) in order to dump their
arguments and timestamps in CTF format using LTTng. The traces can be analyzed
postmortem leveraging babeltrace2 and plugin infrastructure. We've developed
plugins to fulfill our multiple use cases (tally, timeline, pretty printer,
validation).

We routinely generate traces with billions of events produced by hundreds of
threads. Our instrumentation is achieved by preloading libraries without
recompiling the target applications. THAPI and the associated plugins have been
explicitly developed for HPC applications. They can handle multi-process,
multi-threaded, multi-device applications.

We will share hands-on experiences starting with how we designed our modular
approach to tracing to be future-proof and how it enabled us to incorporate new
APIs. We heavily leverage meta-programming to generate LTTng tracepoints and
Babeltrace plugins.

Application developers and performance engineers use THAPI to provide
lightweight profiling of HPC applications, validate correct usages of traced
APIs, and diagnose functional or performance bugs in higher-level
runtimes. THAPI has proven to be an invaluable and popular tool for our HPC
community.

## Biography - Thomas Applencourt

Thomas Applencourt is a Computational Scientist at Argonne National Laboratory
interested in HPC. He is now working on the Aurora exascale Computing system. He
is interested in various programming models (OpenMP, SYCL) and low-level
programming.

## Biography - Brice Videau

Brice Videau is a Computer Scientist working at Argonne National Laboratory. His
main interests are Heterogeneous programming models, system programming,
meta-programming, and auto-tuning.
