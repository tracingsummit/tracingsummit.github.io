---
layout: page
title: Making linsched useful
subtitle: 
redirect_from: /wiki/TracingSummit2012Linsched/
---

## Abstract
Linsched is a very useful tool, however a lot of the data it “spews” out at the end is hard to comprehend and without a deeper understanding of the scheduler somewhat useless. In order to make it more useful, and also faster to analyze, it made sense to use a tool similar to perf timechart. This led to further more interesting ideas, which in turn led to “perf” being implemented in linsched. Now, you might say that linsched however is a simulator, but we could easily implement perf software events and event tracing, and use that. This discussion looks to see how we can further improve linsched, and try to integrate it with perf.

## Biography
Dhaval Giani is currently at University of Toronto, still trying to figure out his research goal. He has dabbled in cgroups, scheduler, virtualization and tracing in the past.
