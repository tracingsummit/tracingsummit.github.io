---
layout: page
title: Precise, Low-Overhead Performance Measurements
subtitle: 
redirect_from: /wiki/TracingSummit2016PerfMeasurement/
---

## Abstract
Measurements of software run time are often inexact (e.g. sampling) or add high overhead. We present a simple, precise but fast profiling method for C++. Users annotate their code with RAII zone classes (regions to measure). High-resolution begin and end time stamps are recorded to memory, with all processing deferred until later. We discuss platform-dependent tricks for reducing overhead and variance. Cache pollution is minimized by writing directly to memory via software write-combining. Instruction reordering across zone boundaries is prevented via barriers. Storage overhead is reduced by compressing string literals into offsets. Memory allocations are avoided with a novel self-organizing data structure. We verify our approach scales to 48 hyper-threads and millions of zones per second, with less than 1% increase in total run time.

## Audience
This talk is targeted at people with an interest in precise, low-overhead profiling of software. It can be of particular interest to C++ developers because the method is designed in this language.

## Biography
Jan Wassenberg is keenly interested in optimization and completed a PhD on efficient image analysis. He joined Google Zurich in 2015.

Lode Vandevenne joined Google Zurich as a software engineer in 2010. He is working on data compression projects such as Zopfli and Brotli.
