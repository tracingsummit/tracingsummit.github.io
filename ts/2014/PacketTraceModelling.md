---
layout: page
title: Packet Trace Modelling and Visualization
subtitle: 
redirect_from: /wiki/TracingSummit2014PacketTraceModelling/
---

## Abstract
This presentation provides an overview of effective means for correlating and visualizing the trace data collected from a network processor. Trace data directly associated with the network packets is collected at key points in the system, using hardware and/or Linux software mechanisms such as ftrace or LTTng. An abstract model of the packet data flows in the system is used in order to represent the trace-based analysis data in an intuitive fashion. The trace data collected from multiple sources is correlated and analyzed in order to automatically build the data flow model, together with the data flow profile. The model is used to visualize the activity of the traced system along with key metrics such as network packet processing latencies, load balancing factors, packet dropout rates, processed data volume and others. The presentation discusses the trace data requirements, the trace correlation aspects and the need for networking oriented trace data analysis and visualization. The Freescale Packet Analysis Tool, a software tool implementing these trace analysis techniques, is used to demonstrate the presented concepts.

## Biography
Petru Lauric works for Freescale where he was involved in various software analysis projects, ranging from binary code instrumentation-based performance analysis tools for Nintendo and Sony game consoles to source code instrumentation-based analysis tools for microcontrollers. More recently he worked on DSP and communication processor analysis tools supported by debug hardware - performance counters and hardware trace such as Nexus 5001 and ARM's CoreSight. He is working closely with the hardware engineering teams on improving or developing new debug hardware mechanisms. His current project, called the Freescale Packet Analysis Tools, is focused on developing software analysis tools designed specifically for the network processors.
