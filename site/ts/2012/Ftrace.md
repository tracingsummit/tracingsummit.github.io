---
layout: page
title: Ftrace and Multiple buffers
subtitle: 
redirect_from: /wiki/TracingSummit2012Ftrace/
---

## Abstract
Currently ftrace has a single global buffer. Anything that gets traced into ftrace goes to one buffer and read from that buffer. Sure this buffer is broken up per CPU, but for all intensive purposes, it is basically a single buffer.

This can be a problem if you are tracing two different events, where one is highly active and the other comes at a much lower frequency. If the buffer is not big enough, the highly active event can overflow the buffer overwriting all of the low frequency event. The user would not be able to see the lower frequency events due to this highly active event that needs to be traced.

By adding multiple buffers where the two different frequency events are on separate buffers and run agnostic from each other, the user can see all the lower frequency events while still tracing the highly active event.

Since the internals of ftrace was designed with the possibility of creating multiple buffers from the beginning, this talk will not focus on the guts of ftrace to achieve multiple buffers. Instead, the focus will be on the user interface. A discussion on how to interact with multiple buffers. And perhaps how to get the perf tool to read the ftrace buffers as well.

## Biography
Steven Rostedt is the maintainer of ftrace and is employed by Red Hat Inc.
