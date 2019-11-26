---
layout: page
title: KernelShark 1.0
subtitle: transforming the GUI into a toolkit
redirect_from: /wiki/TracingSummit2018kernelshark/
---

## Abstract
KernelShark is not a new project. It was designed as a front end for interacting with the FTRACE tracing data. The original version was written in Gtk+-2.0 and was released in early 2010 by Steven Rostedt. In the following years it has proven useful for many kernel developers, but in the same time the limitations of the original design have been revealed.

The new KernelShark has been completely rewritten to use Qt, but not only this. We developed a new, scalable data model, allowing for a truly dynamic OpenGL-based visualization of tracing data with log(n) time complexity. We wanted to minimize the number of clicks before you see what you want, so we made KernelShark preconfigurable. We wanted KernelShark to be user modifiable, so we added infrastructure for plugins. But the thing we wanted the most was to have all major components of KernelShark completely decoupled from the application development framework (Qt) and available for the users via a simple C API.

KernelShark is extending beyond just being a product, but will become a platform, that other tools could integrate with. There are other tools that do tracing analysis, KernelShark is not a competing product, but one that can be integrated with any other tool set.

## Target audience
Users and developers of tools for tracing of the Linux kernel.

## Biography
Yordan Karadzhov has more than 12 years of experience as experimental physicist, includes a Ph.D. in particle physics. During this period Yordan worked in some of the world's largest physics laboratories, like CERN, FermiLab and RAL, developing software for particle physics experiments. Yordan has joined the VMware Open source team in 2017 to work on instruments for visualisation and analysis of Linux kernel tracing data.
