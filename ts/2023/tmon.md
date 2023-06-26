---
layout: page
title: ThreadMonitor: Low-overhead Data Race Detection using Intel Processor Trace
---

## Abstract

Data races are among the most difficult bugs to find, due to their
non-deterministic nature. With the increasing popularity of multithreaded
programming, the need for automated data race detection has significantly
increased. Yet, state-of-the-art dynamic data race detectors cannot be used in
many real-world testing scenarios, since they cause a significant slowdown and
memory overhead. For instance, ThreadSanitizer (TSan) is reported to typically
impose a 5×-15× slowdown and 5×-10× memory overhead. This is not tolerable in
many industrial testing systems.

This presentation introduces ThreadMonitor (TMon), a low-overhead postmortem
data race detector for C/C++ programs. At runtime, it traces the information
required for detecting data races (i.e. memory accesses and synchronization
events) using Intel Processor Trace (PT), a non-intrusive hardware feature
dedicated to tracing software execution. Thereafter, a post-mortem analyzer uses
the trace data to emulate the same verification that would be performed by TSan
at runtime. TMon has no direct impact on application memory usage and causes a
very small slowdown.

The same new technique can be applied to any other architecture or tracing
facility, provided that the required information can still be traced. Also, a
similar approach may be adapted to design post-mortem tools that emulate other
runtime verification tools, such as AddressSanitizer (ASan).

## Biography

Farzam Dorostkar is a PhD candidate in Computer Engineering at Polytechnique
Montréal under the supervision of Professor Michel Dagenais. His current
research focus concerns developing low-overhead tools for detecting concurrency
and memory bugs using hardware tracing.
