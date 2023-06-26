---
layout: page
title: Trying to use uprobes and BPF on non-C userspace
---

## Abstract

The usage of languages like Go and Rust is growing, and while such languages
come with observability features/libraries and powerful associated tools, using
pre-existing investigative, data collection workflows is something desirable, to
take advantage of familiarity and training.

This presentation will cover roadblocks found in trying to use uprobes and BPF
to collect metrics in workloads written in golang using the prometheus metrics
APIs. Issues include calling conventions, floating pointing register access,
data structure layouts obtained from DWARF, libbpf skeletons, measuring
instrumentation overhead. The results in the improvement of tools such as perf
and pahole will also be discussed.

Being able to use the same observability tools to investigate/correlate issues
in the kernel, BPF, and userspace in various languages is something of value,
but requires addressing language-specific implementation details, some of which
will be presented and hopefully new ideas on how to tackle those issues will be
gathered from fellow developers.


## Biography

Arnaldo Carvalho de Melo created pahole, a tool to help in optimizing data
structures, used in Linux, glibc, KDE, xine & others. Maintainer of ‘perf’
(profiling, tracing, debugging, etc). Lately getting lost in BPF land.
