---
layout: page
title: Concluding Panel
subtitle: 
redirect_from: /wiki/Concluding_Panel/
---

Michel Dagenais, Robert Charpentier and Dominique Toupin will animate a discussion to identify the most important current and upcoming challenges for system analysis shared by the participants.

System level tracing has long been an essential element in the toolbox of real-time embedded systems developers. Widely used embedded operating systems such as WindRiver VxWorks, QNX and MontaVista Linux contain numerous static tracepoints to monitor all the key events. Flexible dynamic tracepoints have been added recently (e.g. WindRiver SensorPoints) to complement static tracepoints. High performance computer clusters also have a long history of using tracing tools, most often user level instrumentation of parallel processing libraries such as MPI.

General purpose computer systems were in many cases left with CPU profiling tools and simple logs (e.g. syslog), not suitable for fine grained system performance analysis. However, many of these general purpose systems, for instance telecommunication and online servers as well as multimedia workstations and gadgets, have become complex soft real-time systems. Low overhead system level tracing thus becomes an important tool to tune these systems. While DTrace has been very well received by Solaris users, Kernel Markers, SystemTap and LTTng should offer an excellent tool set for Linux systems.

During the final panel, the requirements which came out repeatedly were outlined to insure that all the important points had been covered.

* General
  * Low-overhead (CPU, memory, network) instrumentation is essential to monitor real-time production systems.
  * Huge traces (several GB, larger than available RAM) are needed in some cases and must be handled by the toolchain (viewers).
  * Tracing and monitoring is equally useful in the lab and in the field.
  * Dynamic probes are important to complement static probes, dynamic probe may serve for corrective measures (code patching).
  * Dynamic probes may serve for corrective measures (code patching).
  * There may be access control and privacy issues for activating the probes and viewing the resulting trace.
  * Multi-CPU, multi-core systems are here, they should be well supported with the needed scalability and tools to help understanding their interactions.
  * Low-level instrumentation may be used to assess the health of on-line components (at high level) and activation of reactive measures when appropriate. This is perceived as critical to complex autonomous systems. A continuous process of feedback-directed adaptation and optimization could emerge from such capabilities.

* Data Providers
  * Static probes (e.g. Linux Kernel Markers) must be placed at key points in the system, dynamic probes (e.g. SystemTap) should be insertable pretty much anywhere. Dynamic probes have a lower cost (zero) when not inserted but a higher cost when activated, as compared to static probes.

* Data Collection
  * Probes should be activated on demand through a nice GUI interface or by scripting, with an associated action (log event, user defined hook, increment statistic counter).
  * Probes should be grouped into classes or facilities (e.g. networking, scheduling, SCSI...) to facilitate the selection of probes to activate.
  * Events collection should be scalable (non-locking) and low overhead, with extensive analysis being performed offline.
  * Filter events at collection time (activating only the relevant probes, checking for the context such as process or user ID) or at analysis time.
  * A Target Communication Framework, preferably with open-source reference implementation, is needed to interface multiple heterogeneous sources of tracing data. Tracing data may come from different systems or from different versions (and log formats) of the same systems. An extensible format should allow tools to ignore data they cannot process.
  * Allow variable length events in the trace while preserving efficient trace writing and random access navigation.
  * Separate event definition files may be useful.
  * Data collection should cope with old and recent data format

* Data Analysis Tools
  * Find causal dependencies among events (dependency tree, critical path) even across machine boundaries (virtual machines, network packets).
  * Compute summaries and statistics on demand for selectable portions of huge traces.
  * Scalability prediction: predict how much CPU/Memory/network will be required for a larger configuration.
  * Tool should allow fusion, comparison, of data, one use case is for allowing regression.

* Data Visualization Frameworks
  * Trace synchronization is required to view and analyze multi-computer, multi-core traces. It can be achieved either at collection time (common time source) or at analysis time (align time bases using matching events like send/receive packet).
  * The same framework and views should serve for events coming from several sources. There should be a common protocol or format for mapping equivalent events. Examples include the OASIS Common Base Event. Mix and match data providers, data collectors and data analysis within the same framework.
  * Tracing events will come from all layers, silicon, hypervisor, operating system, virtual machine, libraries, applications coverage, profiling. They may map to resources, source code lines or even modeling level (e.g. UML). Tracing framework should handle the collection of different paradigms data and provide different views.
  * Traces will come from distributed nodes in the system. Views must help to analyze simultaneously the union of these traces.
  * Very advanced functionality-tool maybe useless if not easy to use, special attention has to be put on usability. Different users (developper, tester field technicien, end-users) requires different type of visualization.
  * Automate at least partly the trace analysis (comparison to reference traces, catalog of good patterns and of faulty behavior patterns). Automate fault identification and triggering. Have a standard way to express patterns.
  * On top of the basic trace navigation and analysis, a wide range of different trace analysis and views may be relevant. Thus, a plugin system is required to allow the easy addition of custom modules.
  * Traces may be used for execution event replay if a suitable model is available.
  * Have more advanced analysis plugins to find out where the code is spending time (cache, RAM, interconnect, virtual memory, garbage collector, real-time response, critical path, load leveling across CPUs, transport networks, message passing, disks, computers).
  * The different activation, viewing and analysis tools should be available through a common framework, presumably Eclipse already used by most participants.
  * Usability is a challenge for very advanced functionalities & tools within the framework.
  * The analysis of a trace may be used to feed a scalability prediction model (e.g. model if the system would saturate with twice the number of requests per second).
  * Configurable visualization: ability to add new graphs and save the system view; pluggable modules to interpret application-specific events; time-centric time by process, thread-centric view, statistics, histogram, event list.
  * Log analysis should be integrated to comlement tracing data.
