---
layout: page
title: Eclipse Tracing Monitoring Framework BoF
subtitle: 
redirect_from: /wiki/Eclipse_Tracing_Monitoring_Framework_BOF/
---

These are the proceedings of the Eclipse Tracing Monitoring Framework BOF that was held on January 29th 2008 at the Tracing Summit 2008 in Montreal.

## Participants
Approximately 25 people attended the Eclipse BOF, including:
* Eugene Chan from IBM (Eclipse TPTP Test and Performance Tools Platform)
* Beth Tibbitts from IBM (Eclipse PTP Parallel Tools Platform)
* Dominique Toupin from Ericsson
* François Chouinard from Ericsson
* Marc Khouzam from Ericsson

## Discussions
### Eclipse Test & Performance Tools Platform

Questions were asked about support for non Java languages in TPTP. Eugene Chan answers that the language model was extended to support other languages such as C++. They do not have the resources to implement the C++ plugins now and hope that outside contributions will fill the void. With C++ plugins, all the nice TPTP views will become available to C++ programs. Discussions were held to determine within which framework tracing and monitoring tools should be integrated, base Eclipse (RCP), Eclipse IDE or Eclipse TPTP. The dependency of TPTP on Java and JDT is costly. The IDE may be the right place since developers often need both tools together (IDE, debugger and tracing views). This is typically not the case for system administrators who use only tracing/monitoring. Beth Tibbits mentions that PTP is based on the IDE and not on TPTP. Other tools, such as TAU or IBM HPC tools are simply called from Eclipse and not tightly integrated.

### Storage

The following topic was how to interface tracing views to different data providers, such as WindRiver SystemView to VxWorks and LTTng traces. The native traces are converted to an event database (using SQLite). Additional synthetic events (e.g. states) are added to the database. The database thus consists in contexts (process, CPU, state), event descriptors and events. The various views then interact directly with the database.

### Event

The OASIS Common Base Event (CBE) could be a way to interface views to event sources but is seen as perhaps too heavy. Creating a unifying event structure for Java, C, C++, system level evnts, etc. is a challenge. Variable length events with random search because of fixed barriers.

### Visualisation

Visual representation is essential to identifying problems. One view with events at all levels (application, network, system, etc.). How to filter the trace data. Beside LTTV (not Eclipse based) no other visualasion tool seem to handle big traces (seval Gb), tools are either crashing, not loading the trace or cannot be used because not responsive.

### Other

Not just trace events but being able to gather statistic (less ovrhead) or call something else. Rules about events/state, when a particular state transition happen we call an action. Hardware performance counter should be integrated into the tracing system. Allow dynamics event in the same infrastructure. Define Symptom catalog and parse the events to find a pattern in the symptom catalog.
