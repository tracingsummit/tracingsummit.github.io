---
layout: page
title: "In-hypervisor tracing for pKVM"
---

## Abstract
pKVM is a protected computing solution used by Android. It leverages the arm64 KVM mode "nVHE" where the kernel is running at EL1 ("standard kernel execution level" on Arm) and a separated hypervisor, running at EL2 (the "hypervisor execution level" on Arm). The nVHE hypervisor is a rather small piece of code. But bringing pKVM features made it grow and created the need for tracing at the hypervisor level, for both debug and profiling. Integrating the hypervisor tracing seamlessly with the host is a challenging task. The hypervisor has a separated address space, needs to be fast to keep the virtualization overhead as small as possible and of course must be properly isolated from the host to keep it as secure as possible. This presentation intends to give out an overview of this endeavour.


