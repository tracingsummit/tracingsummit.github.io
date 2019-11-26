---
layout: page
title: Tracing the Guest OS from Host via Shared Memory
subtitle: 
redirect_from: /wiki/TracingSummit2012GuestOS/
---

## Abstract
How can we trace guest OS from host? In the virtualized environment, it is difficult to find the root cause of guest failures, because a guest behavior can be affected by other guests. Therefore, we need to get trace data from all guests on the machine simultaneously. However, even there are several tracers are already on Linux, no one can do that efficiently from host. So, we have developed "IVRing" which is a ringbuffer implementation on IVShmem (Inter-VM Shared Memory), and make an integrated tracer prototype on it. This presentation will explain how the IVRing and IVShmem works, and what we've done on it. Also, it will show current issues on the IVRing. We will discuss what is the better method and how we can make it.

## Biography
Masami Hiramatsu is a researcher working in Hitachi Yokohama Research Laboratory. He is a maintainer of kprobes and ftrace dynamic traceevent.
