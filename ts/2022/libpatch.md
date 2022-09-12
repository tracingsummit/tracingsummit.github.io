---
layout: page
title: Libpatch - Dynamic patching of binaries in userspace
---

## Abstract

Insertion of tracepoints in a software is traditionally done statically
during its compilation.  This requires access to the software source
code and its build infrastructure.  Once the tracepoints are inserted,
it is not possible to add new ones at runtime.  Dynamic instrumentation,
or patching, solves this issue by allowing the runtime insertion of
tracepoints.  It opens a whole new world of possibilities that goes
beyond tracing such as:
  - Hooks for runtime verification (e.g. bounds checking, ASAN, TSAN)
  - Fast conditional breakpoints (GDB has limited support for that)
  - Hot fixes of software vulnerabilities

Tools such as GDB (fast tracepoints) and Kprobe already have a limited
support for dynamic patching.  However, they are either limited by the
algorithms used (e.g. can only patch 5 bytes instructions) or the
runtime overhead is too large (software interrupts).

Libpatch is a modular userspace library developed to address this
issue. It combines the latest patching algorithms found in the
literature, such as instructions punning and using NOPs for trampolines,
in order to achieve near 100% instrumentation coverage with a minimal
runtime overhead.  It abstracts away the process of [un]patching
binaries from the architecture.  Finally, it aims to be a common module
for tools such as GDB, LTTng and uftrace, to help in their dynamic
patching.
