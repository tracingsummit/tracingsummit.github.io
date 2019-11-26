---
layout: page
title: Evolution of Self-hosted tracing with Coresight
subtitle: 
redirect_from: /wiki/TracingSummit2018coresight/
---

## Abstract
The Arm Coresight family of IP products offer comprehensive suite of debug and trace solutions to address the needs of silicon partners and developers throughout the life-cycle of an SoC. Historically, the debug access and trace collection required dedicated hardware (ports or pins on the SoC) on the target, which were controlled by proprietary softwares.

Self hosted tracing, where the system wide trace is collected and analyzed on the target machine, has become more relevant with the modern powerful SoCs. This is used by techniques such as AutoFDO (automatic feedback directed optimization) for optimizing the code generated at runtime.

The new generation of the Arm Coresight architecture as well as the IP suite has been designed with self-hosted debug and tracing as a primary use case. Also the Linux kernel support for the Coresight suite has come a long way including the integration with perf tool. However there is more room for improvement in both software and hardware designs to utilize the full potential of the subsystem.

This presentation will cover the evolution of the Coresight IP suite and the Linux software support story with emphasis on how they both influence each other. It will also show examples on how software requirements drive the hardware design changes and how we compliment the old hardware using software techniques.

## Biography
Suzuki is a Linux kernel engineer with over 13 years of experience in the GNU/Linux operating system including contributions to the Linux kernel, GNU libc and other open source projects. He is part of the Linux kernel development team at Arm, which focuses on enabling the new ARM architectural features and Arm IPs on Linux. Recently he has been working on the Coresight drivers including new Coresight IP support and the integration with perf infrastructure.

## Target audience
No prerequisites. The presentation will show how the hardware design is influenced by the software and will be interesting to general audience familiar with tracing hardware/software.
