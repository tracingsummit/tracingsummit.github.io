---
layout: page
title: User case study
subtitle: Tracing in the QEMU emulator
redirect_from: /wiki/TracingSummit2014TracingQemu/
---

## Abstract
The QEMU machine emulator is used by projects including KVM, Xen, and Linaro to emulate hardware. Low overhead instrumentation is important both for developers and in production. This talk covers how tracing is used in QEMU. QEMU abstracts tracers using a code-generation tool called 'tracetool'. This allows the cross-platform codebase to work with DTrace, SystemTap, LTTng UST, and others. Although tracetool is part of the QEMU source tree, it could also be reused by other projects. Users often wish to get started without installing a tracer, so QEMU provides a built-in tracer called 'simpletrace'. Although it's features are modest, it offers a Python module for writing custom analysis scripts. This makes it a powerful tracer during development. Tracing has been integrated into the very core of QEMU. Recent patches make it possible to trace just-in-time compiled code.

## Audience
This talk is aimed both at tracer developers and at tracing users. The requirements of QEMU and the solutions that have been chosen can serve as input to tracer developers. Tracing users can benefit from seeing how other projects are using tracing.

## Biography
Stefan Hajnoczi has contributed to QEMU since 2010. He maintains the tracing subsystem, as well as the net subsystem and co-maintains the block layer. Stefan has worked on disk image formats, storage migration, and I/O performance optimization in QEMU at IBM's Linux Technology Center and is currently at Red Hat. He is also a mentor and organization administrator for QEMU's Google Summer of Code and Outreach Program for Women 2014 involvement.
