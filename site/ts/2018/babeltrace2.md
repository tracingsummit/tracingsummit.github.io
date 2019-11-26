---
layout: page
title: Trace processing software application-specific performance optimization
subtitle: the case of Babeltrace 2
redirect_from: /wiki/TracingSummit2018babeltrace2/
---

## Abstract
Babeltrace 2, a modular trace processing library and application, was written taking into account functionality, feature completeness, correctness, and API simplicity first. When we found out that it was about 23 times slower than Babeltrace 1 for the exact same, typical task, it was self-evident that it was time for performance optimization.

Optimizing software for performance in general is seldom an easy work: each field has its own specifics that you must consider to achieve good results. In the trace processing or analysis domain, we generally have a lot of event record objects, each of which contains a lot of field objects, flowing from a format decoder to some processor.

Our approach to optimizing Babeltrace 2 was to focus on reducing the number of dynamic allocations and deallocations for recurrent objects, adding and requiring more C API guarantees, not systematically checking API function preconditions on the fast path, reducing the number of necessary function calls, and relying on an event-driven architecture to avoid per event record conditionals as much as possible. We believe that those ideas can be applied to any trace processing software.

Of course, the performance optimization effort was based on hypotheses considering the trace processing field, validated by prototypes and open-source performance measuring tools.

We also specified parts of CTF 1.8 which were still ambiguous or too lax so as to impose more constraints on the format to make some Babeltrace 2 optimizations possible. We made sure to remain backward compatible with the latest version of Babeltrace 1 for each decision. Some parts of the upcoming CTF 2 were also altered knowing the optimization they will allow in trace consumer projects.

Thanks to our optimization techniques, we improved performance by many orders of magnitude with minimal API change: Babeltrace 2 is still modular and most objects still have a reference count to manage their lifetime. This is good news because we plan for Babeltrace 2 to be the foundation of many future analysis tools developed by EfficiOS. We also established that the framework itself is efficient enough to reach parity with Babeltrace 1 (our objective), if not more, which means we can stop API-modifying optimization efforts and focus on individual plugins (CTF decoder, event record muxer, and other filters and sinks). We'll show a few ideas we have to achieve this.

## Target audience
This talk is targeted at trace reading, processing, conversion, analysis, and viewer software developers who are interested in making their application more efficient, as well as any developer interested in software optimization techniques and tools.

## Biography
Philippe Proulx is a software developer at EfficiOS. He's the author of barectf (a tracer generator), has become the leading developer of Babeltrace 2, and he oversees the design of the upcoming Common Trace Format (CTF) 2. Philippe is also the technical writer for many EfficiOS-sponsored projects, like LTTng.
