---
layout: page
title: Tracing Summit 2010
subtitle: 
redirect_from: /wiki/TracingSummit2010/
---

A one day mini-summit on low overhead computer systems tracing was held in Boston, co-located with the Linux Foundation LinuxCon, on Monday August 9, 2010. It is organized by Dominique Toupin ([Ericsson](https://www.ericsson.com/)), Robert Charpentier ([DRDC](https://www.canada.ca/en/defence-research-development.html)), Mario Couture ([DRDC](https://www.canada.ca/en/defence-research-development.html)), and Michel Dagenais ([École Polytechnique de Montréal](https://www.polymtl.ca/en)). It follows the Tracing Mini Summit 2009, held in Montreal, co-located with the Linux Symposium 2009, and a prior Tracing workshop held at Ericsson Research Montreal in January 2008. The objective of the mini-summit is to present the latest developments in low overhead kernel and user-space tracing, with emphasis on Linux and Multi-Core systems.

A major [push](https://wiki.eclipse.org/images/f/f1/ExtendedIDE_C_Linux_20090127.pdf) is underway to make tracing tools available from within popular integrated development environments such as [Eclipse](https://www.eclipse.org/) and to extend tools such as [GDB](https://www.gnu.org/software/gdb/) for multi-core and low overhead tracing. This mini-summit will be a great forum to better understand and discuss the technical advantages of the different proposed techniques, algorithms, features and implementations. Please send suggestions and inquiries to tracingsummit@polymtl.ca.

## Organizing Committee

Dominique Toupin, Ericsson

Robert Charpentier, Canada Defence R & D

Mario Couture, Canada Defence R & D

Michel Dagenais, Ecole Polytechnique (michel.dagenais@polymtl.ca)

## Schedule
The following presentations are scheduled.

**9h00-9h45** Steven Rostedt, Red Hat, Kernel tracing with Ftrace [(slides)](files/RostedtLinuxCon2010.pdf)

Ftrace is an internal tracer within the mainline kernel. It is made up of several different kinds of tracers. You can trace specific static events, all functions, find interrupt and preemption disabling latencies, as well as scheduling wake up latencies. It also has max stack usage code and lots of other features. This talk will give an overview of what Ftrace is and will also introduce some of the user space tools that are available to facilitate tracing with Ftrace.

**9h45-10h30** Masami Hiramatsu, Hitachi, The Enhancement of Kernel Probing - Kprobes Jump Optimization [(slides)](files/HiramatsuLinuxCon2010.pdf)

The Linux kernel has a software-breakpoint based probing function - kprobes, which has been continuously developed. Recently, it got a big enhancement; kprobes jump optimization, which can reduce the overhead of probing drastically, especially on virtualization guest, by replacing a breakpoint with a jump instruction. Moreover, the optimization is transparently done in the background. Thus, users can take advantage of the optimization without changing their code. This presentation will show you how the optimization works and what new features (x86 instruction decoder, dynamic tracepoints, etc) are introduced for it.

**10h30-11h00** Break

**11h00-11h45** Mathieu Desnoyers, EfficiOS, A new unified Lockless Ring Buffer library for efficient kernel tracing [(slides)](files/DesnoyersLinuxCon2010.pdf)

The Lockless Ring Buffer library is proposed as a response to both Linux community unification and industry high-performance requirements. This is a major step in tracer infrastructure unification, providing flexibility, high-throughput, reliability and real-time awareness to both tracers and kernel drivers through a simple API.

**11h45-12h30** David Goulet, Revolution Linux, User-Space Tracing library [(slides)](files/GouletLinuxCon2010.pdf)

The User-Space Tracing (UST) library is a recent addition to the LTTng project. This talk will present the current state of UST, as part of a global architecture for efficient tracing of large production systems. It will discuss the performance of UST and future developments.

**12h30-13h30** Lunch (not provided)

**13h30-14h15** Stan Shebs, Code Sourcery, Old Code Lives Again: Tracepoint Support in GDB [(slides)](files/ShebsLinuxCon2010.pdf)

As part of developing advanced debugging for Ericsson, CodeSourcery has revived the tracepoint support originally added to GDB in the 1990s. Changes to work with modern GDB have included the conversion of tracepoints into a class of breakpoint, elimination of the remote protocol dependency, and making tracing work with other new features, like non-stop debugging. These changes have in turn enabled new capabilities, such as conditional tracepoints, fast tracepoints, trace files, and disconnected tracing, in which tracing can run independently of GDB.

**14h15-15h00** Marc Khouzam, Ericsson Canada, Advanced tracing features in Eclipse [(slides)](files/KhouzamLinuxCon2010.pdf)

Embedded multi-core systems have become exceedingly difficult to debug. Many problems only show when the hardware and software are interacting under real load. In these cases, traditional debugging methods don't scale very well and efficient trace collection and analysis are required to start addressing these issues. This session will present new advanced features of Eclipse using two tracing technologies: LTTng and GDB Tracepoints. It is targeted at developers that need to troubleshoot intricate inter-dependency problems, in a Linux environment, or that simply have an interest in tracing.

**15h00-15h30** Break

**15h30-16h00** Michael Sills-Lavoie, Ecole Polytechnique, Distributed Systems Tracing with TCF, LTTng and UST [(slides)](files/Sills-LavoieLinuxCon2010.pdf)

As more complex distributed multi-core systems need tracing support, simple and efficient remote control and streaming tools are required. To fulfill those needs, LTTng now provides a remote control and streaming architecture. This presentation will give an overview of this architecture with a description of its different components and how they interact with LTTng and the new user space tracer (UST).

**16h00-17h00** Tracing Panel, Steven Rostedt, Masami Hiramatsu, Mathieu Desnoyers, Stan Shebs, Marc Khouzam

Are we there yet? Have we achieved the needed level of tracing support to satisfy both embedded developers and large system intallations? There is now significant overlap between some portions of the tracing solutions developed over the past years. How can we reach a coherent best of breed tracing solution? In this last time slice of the Tracing Mini Summit, eager users from the audience will be debating with our speakers about these issues!

## Venue
Like LinuxCon, the Tracing Mini-Summit will be held at the Renaissance Boston Waterfront, Boston, MA.

## Cost
Participants must be registered for LinuxCon. There are no additional fees for attending the Tracing Mini-Summit.

## Registration
Everyone is welcome to the Mini-Summit. Submission of a presentation is not required. Registration for LinuxCon is required in order to attend the Tracing Mini-Summit. Please confirm your presence to tracingsummit@polymtl.ca, specifying your company/organization and your preferred email address.
