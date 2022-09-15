---
layout: page
title: "Perfetto: state of the union"
---

## Abstract
Perfetto is a production-grade open-source stack for performance instrumentation and trace analysis. It offers services and libraries for recording system-level and app-level traces, native + java heap profiling, a library for analyzing traces using SQL and a web-based UI to visualize and explore multi-GB traces.

Development of Perfetto began in 2017 since then the project has grown
to power the performance infrastructure of two billion user platforms (Android & Chrome)
as well as a large number of other Google and non-Google products.

This talk covers:
1. Use case and unique challenges of tracing on Android, Chrome, and ChromeOS platforms.
2. A report on the current state of {kernel tracing, userspace tracing, heap and perf profiling} using Perfetto
3. Future plans for the project

## Biography
Primiano started the Perfetto project at Google in 2017.
Prior to that they worked on Chrome and Android WebView performance for several years.
They now lead the Android Telemetry group in London of which Perfetto is a part.
