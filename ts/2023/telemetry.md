---
layout: page
title: Collecting telemetry data from low latency microservices
---

## Abstract

As a system administrator, it is crucial to gather telemetry data (TD) from
microservices to ensure seamless monitoring, optimization, and reliability of
the system. By doing so, you can easily pinpoint performance bottlenecks, detect
anomalies, and make data-driven decisions.

This presentation focuses on collecting TD from microservices that have limited
storage and resources and require low latency. To achieve this, it's crucial to
analyze TD across multiple hosts, implement filters to reduce the amount of TD
saved, and minimize the impact on system performance.

To meet these requirements, we suggest combining LTTng and OpenTelemetry. The
process involves two phases: an online phase where TD is structured and
collected with OpenTelemetry and stored in CTF files with LTTng. The offline
phase on the other hand focuses on how analyses are performed.

## Biography

Eya-Tom Augustin Sangam is a master's student working under the guidance of
Michel Dagenais at Polytechnique Montreal. His area of research revolves around
distributed and kernel tracing.
