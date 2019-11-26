---
layout: page
title: Dynamic Tracing Options Using LTTng for User Space Applications
subtitle: 
redirect_from: /wiki/TracingSummit2016DynamicUserspaceTracing/
---

## Abstract
Tracing user space in Linux is crucial to application developers. The most rudimentary method is by editing the code and adding user space events. The "-finstrument-functions” GNU compiler option along with the "LD_PRELOAD" environment variable offers an alternative approach to enable LTTng tracing on every function entry and exit. While these techniques are useful and essential there are several scenarios where someone would like to dynamically instrument user space applications. This talk covers two different approaches to dynamically instrument an application while it is executing. A first method is based on a series of techniques using ptrace, mmap, dynamically modified code and so on. A second tactic is making use of the DyninstAPI library. Both strategies are explained and compared.

## Audience
People interested in user space tracing.

## Biography
Jason Puncher is a software engineer in the Platform Tool Group at Ciena. He is a seasoned debugger and has twenty years of tool development under his belt. Jason personally developed the techniques discussed in this presentation.

François Tétreault is a software engineer in the Base Platform Software Group at Ciena. His open source contributions are in the area of LTTng and Trace Compass, collaborating with Polytechnique Montreal, EfficiOS, and the broader community.
