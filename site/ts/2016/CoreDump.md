---
layout: page
title: Creating Efficient Small Core Dump for Embedded Systems
subtitle: 
redirect_from: /wiki/TracingSummit2016CoreDump/
---

## Abstract
The core dump facility of Linux can be a powerful tool for developers to investigate why their application crashed. When active, it can store a snapshot of an application's memory at the time of a crash. This allows for detailed inspection of stack traces and data contents. However, this facility is rarely used on production systems because of the space required to save the core dump files. This is particularly true for embedded systems, where read-write space is often very limited or non-existent.

The [minicoredumper project](https://www.linutronix.de/minicoredumper) was created to make core dumps viable for even embedded systems. It does this by providing a set of userspace tools to extend the Linux core dump facility and allow fine-grained control over what exactly is saved when an application crashes. Using the minicoredumper, very useful core dumps for applications can be reduced to 4KB of space, making them very attractive even for embedded systems.

This presentation introduces the minicoredumper project, explores some of the details as to how it works, and provides some scenarios showing how it can be used in embedded systems.

## Audience
The presentation will involve many technical details that will mostly be of interest to developers. However, the general concepts and features covered will be interesting to anyone wanting to significantly improve the post-mortem debugability of their production systems with very little effort.

## Biography
Since 2008 John Ogness has been working for Linutronix GmbH providing Linux-based board support packages as well as application development. His background lies in Computer Science with previous experience working on autonomous robotic systems and security applications. He is the current maintainer of the minicoredumper project.

John has been an active user of UNIX-like operating systems since 1996. After finishing his studies at Utah State University (USA) in 2000, John moved to Germany, where he now lives with his wife and their two children at Lake Constance (Bodensee).
