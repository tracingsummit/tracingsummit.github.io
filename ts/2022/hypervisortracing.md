---
layout: page
title: "pKVM in-hypervisor tracing for ftrace"
---

## Abstract
Protected KVM (a.k.a. pKVM) is an extension of KVM/arm64 providing a
Confidential Computing solution for Arm v8.0+ CPUs. pKVM targets SoCs that don't
feature Confidential Computing hardware extensions, which makes it applicable to
a wide spectrum of domain-spaces, including mobile (Android). pKVM extends the
existing KVM/arm64 nVHE hypervisor with the ability to manage the CPU's stage-2
MMU, hence allowing the enforcement of access-control restrictions on host
accesses to guest memory.

Introducing these new features to KVM has made the tiny nVHE
hypervisor grow in complexity and increased the need for tracing at the hypervisor level,
where nothing exists at the moment for debugging or profiling. Integrating the
hypervisor tracing seamlessly with the host is a challenging task: the
hypervisor has a separate virtual address space, needs to be fast to keep the
virtualization overhead as small as possible and of course must be properly
isolated from the host to keep it secure. This presentation intends to present
an overview of this endeavour.

