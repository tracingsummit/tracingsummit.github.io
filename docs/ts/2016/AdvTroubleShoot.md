---
layout: page
title: Advanced Trouble-Shooting of Critical Real-Time Systems
subtitle: 
redirect_from: /wiki/TracingSummit2016AdvTroubleShoot/
---

## Abstract
In time critical systems, late data is bad data. It is important that the system reacts within its specified deadline. Aerospace, telecommunication or automotive industry are classic examples of industries with real-time requirements.

Embedded system programs run on different layers (e.g. HW, bare metal, OS, libraries, open source components, user space) and when problems arise the root cause can come from any of these layers. It is important to get trace data from all the relevant layers and correlate them for system-wide analysis. Tracing is an efficient way to record information about a program’s execution. Developers, experienced system administrators, and technical support personnel use it to diagnose and solve complex problems like missed real-time deadlines, high latencies analysis and concurrency problems and many more.

Over the past years, many companies and industry working groups have come together to create open source trace technologies including trace data creation and collection as well as trace analysis and visualization tools. Trace Compass is an open source application that facilitates the visualization and analysis of traces and logs from multiple sources; it allows effective diagnosis of complex embedded systems. This presentation will go over the key analysis features of Trace Compass for Linux based systems. It will cover the following topics:

* Supported trace formats (Common Trace Format - CTF, libPcap, custom trace formats),
* Built-in analyses and views Linux based systems,
* Trace data collection for Linux Tracing Toolkit next generation – LTTng using Trace Compass,
* Domain specific configuration of timing analyses on the fly,
* Helpers to find problem areas and predict potential problem areas,
* Analyses on those areas showing the root cause of timing issues, e.g. critical path analysis,
* Thread and hardware allocation analysis.

## Audience
The target audience would be application developers who [want to] use tracing to validate their systems. They will learn how an application can be instrumented and traced to solve specific problems. They will also see how tracing can solve certain problems that debuggers cannot.

## Biography
Matthew Khouzam is a software developer at Ericsson. He is a contributor to Eclipse Trace Compass as well as several other projects. He is also the chief icon artist of the project.
