---
layout: page
title: Perf Tool Data File and Toggle Event
subtitle: 
redirect_from: /wiki/TracingSummit2013PerfFeatures/
---

## Abstract
### The Perf Tool Data File
The presentation will give an overview about the perf data file format, its recent changes and related features like multiple file storage.

### The Perf Toggle Event
The toggling event is an addition to the perf event interface which enables the user to setup an event which toggles (start or stop) another event. This way we are able to narrow down the measured context of any event (eg. setting up kprobes to set bounds for cycles event). There's working prototype soon to be sent out as RFC.
