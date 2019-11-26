---
layout: page
title: Making libtraceevent into a library
subtitle: 
redirect_from: /wiki/TracingSummit2018libtraceevent/
---

## Abstract
Back in 2012, the parsing code for the Linux kernel trace event format files were taken from trace-cmd (a utility used to interact with the internal Linux kernel tracing code) and added into tools/lib/traceevent of the Linux kernel source tree, such that perf (the profiling Linux kernel tool) could utilize it. The idea back then was to have this code eventually become a library that all tools could use to do the parsing. But that never happened. Instead, the code exists in various phases in four know utilities (perf, trace-cmd, power-top and mceutils), and possibly more, or worse yet, the library code is not used and the buffer parsing is simply hard coded in some application.

This presentation will go over what has been done recently to get the code into a state that will allow it to finally become a library, and then lead into a discussion about what the next steps should be. Perhaps there's more that can be added to the library? Would it be good to be combined with other tracing libraries?

## Target audience
Those that utilize or develop tools for tracing of the Linux kernel. Also distribution maintainers that could help distribute the library.

## Biography
Steven Rostedt - Currently working for VMware, is the original author and current maintainer of Ftrace (the official tracer of the Linux kernel). Steven created the original code to parse the trace event format files and has helped maintain its development since 2012. Steven also helps out with the PREEMPT_RT patch set that inspires to make Linux into a hard Real-Time operating system.

Tzvetormir Stoyanov - Has more than 18 years of systems and networking programming experience. He is currently working for VMware and has been tasked with making the tools/lib/traceevent code ready to become a library. Tzvetomir has been converting it to resolve any name space conflicts. He is also investigating replacing the hard coded parsing of the event formats into utilizing Flex/Bison and make the parser much more robust and easier to extend and maintain.
