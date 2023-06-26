---
layout: page
title: From tracing to kernel programming
---

## Abstract

BPF has its roots in tracing. When the Linux kernel got an ability to run BPF
programs attached to an arbitrary kernel function it sparked a tracing
boom. Hundreds of performance analysis tools were written. Users can now ask Gen
AI to write a bpftrace script. Early tools were at syscall level. Then they went
deeper into kernel internals and eventually they stopped being read-only. Now
developing a tracing program resembles writing a kernel code. Thousands of user
space developers became kernel hackers. BPF programs are safe kernel
modules. This talk will uncover modern BPF features that landed in the latest
kernels and not yet adopted by the tracing community and will reveal
far-reaching BPF features that are being developed. They promise to disrupt the
kernel programming even further. The Linux community is observing micro-kernel
in the making.

## Biography

Alexei is the co-maintainer of BPF. When not hacking the kernel Alexei enjoys
off-grid activities with his family: backpacking, hiking, camping.
