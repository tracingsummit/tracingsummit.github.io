---
layout: page
title: New developments in the SFrame stack trace format
---

## Abstract

SFrame or the Simple Frame format is a stack trace format designed to provide a
fast and low-overhead mechanism to generate stack traces. The format keeps track
of the minimal necessary information needed for stack tracing: Canonical Frame
Address (CFA), Frame Pointer (FP), Return Address (RA). It works with and
without frame pointers.

SFrame format and its support was first released with Binutils 2.40. SFrame
format is now moving towards its next version (SFRAME_VERSION_2). This talk will
discuss the SFrame format briefly, followed by whats coming in its
version 2. Since its inception, we've started to explore the use case of user
space stack tracing in the kernel. This talk will cover the progress, and
discuss ideas for further possible use cases around in-application user space
stack tracing.

## Biography - Indu Bhagat 

Indu Bhagat is a member of the Linux Toolchain group at Oracle. Recently, she
has been actively working on the SFrame stack trace format. Previously, she has
contributed to the CTF/BTF support in the GNU Toolchain.

## Biography - Jose E. Marchesi

GNU hacker and maintainer.  Main author and maintainer of GNU poke and GNU
recutils.  Target maintainer in binutils (BPF, SPARC), GCC (BPF), GDB (BPF) and
elfutils (BPF, SPARC).  CGEN global maintainer.  Member of the GNU Advisory
Committee.  Authorized speaker of the GNU Project.  Helps with GNU maintainers
coordination, the GNU software evaluation team, organization of GNU Hackers
Meetings, Toolchain MCs/Tracks at LPC, GNU Tools Cauldron, GNU org admin for
Google's Summer of Code, and several other random janitorial duties.
Contributor to several other free software programs over the years such as
Emacs, glibc, gnulib, the Linux kernel, etc.  Currently employed by Oracle as
the Tech Lead of their Toolchain/Compilers team.

