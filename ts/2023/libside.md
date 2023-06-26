---
layout: page
title: libside: Giving the preprocessor a break with a tracer-agnostic instrumentation API
---

## Abstract

This talk presents a new library for instrumentation of user-space applications:
libside.

The purpose of the libside API/ABI is to allow a kernel tracer and many
user-space tracers to attach to static and dynamic instrumentation of user-space
applications.

The libside library expresses the instrumentation description as data (no
generated code). Instrumentation arguments are passed on the stack as an array
of typed items, along with a reference to the instrumentation description.

This library exposes a type system and a set of macros to help applications
declare their instrumentation and insert instrumentation calls. It exposes APIs
to kernel and user-space tracers so they can list and connect to the
instrumentation, and conditionally enables instrumentation when at least one
tracer is using it.

The type system includes support for statically known types and dynamic
types. Nested structures, arrays, and variable-length arrays are supported.

This library learns from the user feedback about experience with LTTng-UST and
Linux kernel tracepoints, and therefore it introduces significant changes (and
vast simplifications) to the way instrumentation is done compared to LTTng-UST
and Linux kernel tracepoints.

## Biography

Mathieu Desnoyers main contributions are in the area of tracing
(monitoring/performance analysis/debugging), scalability, and performance, both
at the kernel and user-space levels. He maintains the LTTng project, the
Userspace RCU library, as well as the Linux kernel membarrier and restartable
sequences system calls. He works in close collaboration with the
telecommunication industry, many Linux distributions, and with customers
developing hardware scaling from small embedded devices to large-deployment
servers.  He is CEO and Software Engineer at EfficiOS.
