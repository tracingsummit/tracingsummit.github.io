---
layout: page
title: Tracing and Modeling High-Level Multi-Threaded GUI Applications
subtitle: 
redirect_from: /wiki/TracingSummit2016TraceModeling/
---

## Abstract
TraceCompass is a tool to analyze and visualize huge amounts of trace data. It does have some performance issues from time to time. Algorithms and backend code can be improved and it is easy to benchmark. But how does that affect the user experience? Is there any real gain to the user? Will the interaction between all the application's threads cause problems? Will the improvements bring spurious failures?

"Let's trace it!" was the natural answer. But TraceCompass never looked in a mirror: there was very little in the code to trace itself. We had to determine 1) How to trace 2) What we want to achieve (model the problem) 3) What to trace.

We'll explain how we modeled the responsiveness of the UI and how we used Java Utility Logging (JUL), fed to the LTTng userspace tracer, to analyze TraceCompass in action and determine the real impact of improvement proposals for the user.

## Audience
The target audience would be application developers who [want to] use tracing to analyze high level behavior of their application. They will learn how an application can be instrumented and traced to solve specific problems and answer specific questions and also how can one go from a ton of trace data to some easily readable and graphical results.

## Biography
Geneviève Bastien is a research associate at the Dorsal Laboratory of École Polytechnique de Montréal. She is a contributor to the Trace Compass and LTTng projects. Her mission is to make the students' life easier when in comes to prototyping cool new analyses and to make sure that their contributions make it into the hands of the end users. She's also involved in Community Wireless Networks in Montréal and in organizations that promote the use of free software in the public sphere.
