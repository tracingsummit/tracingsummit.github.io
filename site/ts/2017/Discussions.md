---
layout: page
title: Discussions
subtitle: 
redirect_from: /wiki/TracingSummit2017Discussions/
---

Developers looking for user-feedback and users exposing their current needs and the problems they encounter with the current kernel tracing infrastructures. Each discussion session is allowed a maximum of 1 slide to present the topic and context, the focus is really the discussion with the developers. These discussions should lead to actionable items. Steven Rostedt is leading the discussion part.

## Submitted discussion topics
### Profiling scripts with perf
* Jiri Olsa [(slides)](../files/TS17-discussion-perf.pdf) [(video)](https://www.youtube.com/watch?v=uPB55GqpUGg&index=11&list=PLuo4E47p5_7bfeZyYIyNYM-f-2tmr0neu)

 We're working on a way to get scripting user space callstack into perf
 sample, that would allows us to see the script's (not interpreter's)
 profile. Currently we have an initial prototype for python and we hope
 to get more script languages involved.

### how to re-order perf events
* Alban Crequy [(slides)](../files/TS17-discussion-bpf.pdf) [(video)](https://www.youtube.com/watch?v=4Tn9sPn2aVs&list=PLuo4E47p5_7bfeZyYIyNYM-f-2tmr0neu&index=10)

 Since Linux 4.3, BPF programs can send events through a ring buffer to
 userspace using BPF perf maps. In some use cases (Weave Scope’s tcptracer-bpf),
 it is essential that the events are in a chronological order. But on multicores,
 it is not easy to re-order the events correctly.
 We could discuss how to reorder events correctly and related topics: per-cpu BPF
 maps, memory barriers, monotonic clocks and hypervisor interferences. I would like
 to hear in the discussions experiences in debugging this kind of problems.

### tracepoints and the use of the ftrace core (function hooks)
* Steven Rostedt (slides) [(video)](https://www.youtube.com/watch?v=hhK2XwcT-Nc&index=12&list=PLuo4E47p5_7bfeZyYIyNYM-f-2tmr0neu)
