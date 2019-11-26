---
layout: page
title: Tracing Summit 2009
subtitle: 
redirect_from: /wiki/TracingSummit2009/
---

A one day mini-summit on low overhead computer systems tracing will be held in Montreal, co-located with the Linux Symposium, on Tuesday July 14, 2009. It is organized by Dominique Toupin, Ericsson, Robert Charpentier, DRDC, Mario Couture, DRDC, and Michel Dagenais, Ecole Polytechnique de Montréal. It follows a prior Tracing workshop held at Ericsson Research Montreal in January 2008. The objective of the mini-summit is to present the latest developments in low overhead kernel and user-space tracing, with emphasis on Linux and Multi-Core systems.

Thanks to the 70 participants for creating advance technical discussions.

## Organizing Committee
Dominique Toupin, Ericsson

Robert Charpentier, Canada Defence R & D

Mario Couture, Canada Defence R & D

Michel Dagenais, Ecole Polytechnique (michel.dagenais@polymtl.ca)

## Overview
New electronic services rely on an increasingly sophisticated infrastructure composed of powerful servers, numerous fixed or mobile clients, and the system and networking software. The central processing units have evolved from simple processors to multi-core systems. Embedded soft and hard real-time multi-core multi-computer systems are exceedingly difficult to debug and tune. Many problems, often timing related, only show under real loads, when the hardware (cache, page tables, synchronization) and software (operating system, virtual machines, libraries, applications) are interacting in real-time. The development time and maintenance of distributed, online, applications is a major stumbling block for creating new services. Tools are therefore needed to extract precise, globally ordered, debugging and performance data while minimizing the overhead on the systems under test. This data must be made available to suitable monitoring, visualization and analysis frameworks.

After tracers being left out of the Linux kernel as external patches for several years, recent months saw the inclusion or submission for inclusion in the mainline kernel of several specialized and more general purpose static kernel tracers, ftrace, [ktrace](https://lwn.net/Articles/320444/), [zedtrace](https://lwn.net/Articles/321384/) and [LTTng](https://lttng.org/). Dynamic kernel tracers, [SystemTap](https://sourceware.org/systemtap/), and user-space tracing systems have also been proposed for Linux. Similarly, other interesting tracing tools, such as DTrace, exist for different free operating systems. Furthermore, a major [push](http://wiki.eclipse.org/images/f/f1/ExtendedIDE_C_Linux_20090127.pdf) is underway to make these tools available from within popular integrated development environments such as [Eclipse](https://www.eclipse.org/). This mini-summit will be a great forum to better understand and discuss the technical advantages of the different proposed techniques, algorithms, features and implementations, thus paving the way to a better low overhead tracer, properly integrated in the overall development and monitoring environment, for use in the Linux kernel.

## Schedule

**09h00-09h45** François Chouinard, Ericsson Canada, The Eclipse Tracing and Monitoring Framework [(slides)](files/TMF_-_Tracing_Summit_2009.pdf)

The goal of this project is to provide an Eclipse-based framework to integrate tracing and monitoring tools. In addition to controlling the tracing tools, the framework allows the retrieval, analysis, correlation and visualization of heterogeneous and arbitrarily large trace files. As a proof of concept, a reference integration of LTTng is currently under development. The presentation will include a demonstration.

**09h45-10h30** Marc Khouzam, Ericsson Canada, Dynamic Tracepoints in Eclipse [(slides)](files/Ts2009-khouzam.pdf)

Work is currently being done to enhance GDB's Tracepoint feature. These are dynamic tracepoints that enable a user to instrument a live target with minimal impact to its execution. The collected data can then be used to examine the traced part of the execution. We will describe how dynamic tracepoints are being integrated within Eclipse and how a user will then be able to control and examine tracepoints and their resulting data. Depending on the progress of the implementation, we may be able to demo parts of this feature within Eclipse.

**10h30-11h00** Break

**11h00-11h45** Andrew Overholt, Red Hat, Eclipse Linux Tools project [(slides)](files/Ts2009-overholt.pdf)

The Linux Tools project aims to bring a full-featured C and C++ IDE to Linux developers. Popular native development tools such as Valgrind, OProfile and Systemtap, are added to the existing C/C++ Eclipse tools. Current projects include a Valgrind heap usage analysis tool and an OProfile call profiling tool. The presenter will discuss the best way for the various implementations to avoid duplicating effort and bring these new development tools, including tracing and monitoring, to Linux.

**11h45-12h30** Frank Ch. Eigler, Red Hat, SystemTap [(slides)](files/Ts2009-eigler.pdf)

With the project core approaching completeness, it's time to investigate its integration with other tools and technologies.

**12h30-13h30** Lunch (not provided, several presenters went to Basha's.

**13h30-14h15** Frederic Weisbecker, Kernel developer, Ftrace for System Tracing [(slides)](files/Ts2009-weisbecker.pdf)

The new kernel tracing tools now available in the mainline kernel, and developed or merged into the kernel/trace section of the kernel will be described. The advantages, areas needing rework and missing features will be discussed.

**14h15-15h00** Christoph Hellwig, LST, Linux and Tracing [(slides)](files/Ts2009-hellwig.pdf)

System level tracing has been an important feature in enterprise servers (IRIX, AIX) and embedded systems (VxWorks, QNX, Embedded Linux distributions) for a long time. Early proposals for tracing tools in Linux, such as LKST, Kprobes/Dprobes and LTT, were not too well received. With the increasing importance of multi-core real-time performance, for both online servers and embedded systems, tracing tools are finally making their way into the mainline kernel, but not without extensive discussions, rework and modularization.

**15h00-17h00** Linux Tracing Tools, adressing the present and future needs [(slides)](files/Ts2009-panel.pdf) [(System-wide tracing needs slides)](files/Ts2009-SystemTracingView.pdf)

Panel: Tim Bird (Sony), Mathieu Desnoyers (Ecole Polytechnique), Christoph Hellwig (LST), Alf Larsson (Ericsson), Andrew Overholt (Red Hat), Frederic Weisbecker (Kernel developer)

Moderators: Michel Dagenais (Ecole Polytechnique) and Dominique Toupin (Ericsson)

Open discussion, birds of a feather session, on Tracing tools for Linux. The panel and audience brings together Linux kernel and tools developers, Linux distributors, user space developers and system users.

## Venue
Like the Linux Symposium, the Tracing Mini-Summit will be held at [Centre Mont-Royal](http://www.linuxsymposium.org/2009/venue.php).

## Cost
Participants must be registered for the Linux Symposium. There are no additional costs for the Tracing Mini-Summit.

## Registration
Everyone is welcome to the Mini-Summit. Submission of a presentation is not required. Registration for the Linux Symposium is required in order to attend the Tracing Mini-Summit. Please confirm your presence to tracingsummit@polymtl.ca, specifying your company/organization and your preferred email address.
