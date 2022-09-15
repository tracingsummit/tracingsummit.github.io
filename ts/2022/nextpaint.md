---
layout: page
title: "Adding the Interaction to Next Paint Metric to Perfetto"
---

## Abstract
On Perfetto, users can get brilliant insights into the performance of websites through trace visualizations and metrics: Dropped Frames, Long Latency, and many more to come...

Recently, core web vitals shaped a different view of a smooth website by bringing the Interaction to Next Paint (experimental) metric to the light. The INP represents a page's overall responsiveness by measuring all click, tap, and keyboard interactions made with a page. With the help of simple SQL queries on the Perfetto Trace Processor, we can easily extract the INP metric.

This presentation will cover key steps to implementing an INP metric and getting some assessment of pages’ responsiveness. Make Perfetto Perfect!

## Biography
Patricija is a Computer Science student and current interning at Microsoft.
This year they are taking part in the Google Summer of Code working with Chrome web performance team.
They are also a Google Developers Student Clubs Mentor.
