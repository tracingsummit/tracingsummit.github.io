---
layout: page
title: High Throughput of eBPF Events for Execution Patterns Detections
---

## Abstract
Tracee is an Open-Source Runtime Security and Forensics tool for Linux. It uses Linux eBPF technology to trace your system and applications at runtime, and analyzes collected events in order to detect suspicious behavioral patterns. In this talk I would like to share challenges around processing events down the pipeline: from kernel tracing (and networking) probes into into userland, trying go guarantee events ordering, events enrichment, with relevant cached OS information, generate needed derived events and, finally, analyze patterns for detections. The talk will be an honest talk on how difficult runtime analysis can be and some of the techniques we're currently using (or planning to use, which would be a good part to get feedback from community).

More info at: https://aquasecurity.github.io/tracee/v0.8.0/ (and some more at https://aquasecurity.github.io/tracee/v0.8.0/deep-dive/caching-events/).

## Biography - Rafael David Tinoco
Tracee Maintainer and Engineer at the Open Source group at Aqua Security, former Ubuntu Linux Core Developer and Developer Membership Board member. Former Canonical/Ubuntu engineer. Former IBM s390x mainframer.

## Biography - Nadav Strahilevitz
Nadav is an Engineer at Aqua Security’s Core Technologies Group working on Tracee as an Engineer and Maintainer focusing on performance and container tracking capabilities. He previously worked in the IDF as a Full Stack Engineer
