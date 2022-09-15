---
layout: page
title: eBPF cross-layer (L3-7) tracing of multiplexed RPC transports
---

## Abstract
Shares the lessons we learnt and solutions we built to enable transparent client-side monitoring in accessing a Cloud service from applications running in VMs.

Main challenges include:
1. TLS encrypted transports
2. joining kernel and user-space tracing
3. in-band data reporting via eBPF
4. multiplex transports such as HTTP/2
