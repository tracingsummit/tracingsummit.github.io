---
layout: page
title: Tracing and Linux-Kernel RCU
subtitle: 
redirect_from: /wiki/TracingSummit2016TracingRCU/
---

## Abstract
When something goes wrong with RCU, it is normally something that tracing cannot help much with, either due to the overwhelming volume of tracing data required (even given today's capacious mass-storage devices) or due to the trace events Heisenbugging the bug out of existence. Nevertheless, there have been a few memorable occasions where tracing was extremely helpful, including the infamous lost-wakeup problem, performance measurements (including grace-period duration), and the occasional too-short grace period, the latter two of which required a bit of scripting. This presentation will cover a few such Tracing/RCU war stories, and then speculate on some possible future uses of tracing.

## Biography
Paul E. McKenney has been coding for four decades, more than half of that on parallel hardware, where his work has earned him a reputation among some as a flaming heretic. Over the past decade, Paul is a Distinguished Engineer at the IBM Linux Technology Center. Paul maintains the RCU implementation within the Linux kernel, where the variety of workloads present highly entertaining performance, scalability, real-time response, and energy-efficiency challenges. Prior to that, he worked on the DYNIX/ptx kernel at Sequent, and prior to that on packet-radio and Internet protocols (but long before it was polite to mention Internet at cocktail parties), system administration, business applications, and real-time systems. His hobbies include what passes for running at his age (AKA "hiking") along with the usual house-wife-and-kids habit.
