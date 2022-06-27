---
layout: page
title: Introducing the Apache HTrace Distributed Tracing Framework
subtitle: 
redirect_from: /wiki/TracingSummit2015HTrace/
---

## Abstract
Apache HTrace is a new open-source end-to-end tracing framework designed to address the challenge of distributed tracing.

HTrace grew out of our frustration with diagnosing Hadoop performance problems. As a distributed system, Hadoop's performance is dependent on the performance of multiple networked nodes. To make matters worse, most deployments of Hadoop depend on a group of distributed systems working together-- such as Hive, HBase, and HDFS.

HTrace makes Hadoop performance easier to understand by tracing requests all the way through the system. Tracing can be enabled at the granularity of an individual request. HTrace is also design to be deployed in production, by sampling a subset of requests. In this talk, I'll discuss the design of HTrace, our progress at integrating it into Hadoop and building the community, and give a demo of the new web interface.

## Audience
This talk will appeal to a lot of people who are curious about distributed tracing or distributed systems built using Linux in general. It would be interesting to compare the ongoing work on kernel and single-node userspace tracing systems with our work adding tracing to Hadoop.

## Biography
Colin McCabe is a Platform Software Engineer at Cloudera, where he works on HDFS and related technologies. He is a committer and PMC member on Hadoop. Prior to joining Cloudera, he worked on the Ceph Distributed Filesystem, and the Linux kernel, among other things. He studied Computer Science and Computer Engineering at Carnegie Mellon.
