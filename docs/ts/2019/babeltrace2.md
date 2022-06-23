---
layout: page
title: Writing Babeltrace 2 plugins
subtitle: 
redirect_from: /wiki/TracingSummit2019babeltrace2/
---

## Abstract
The Babeltrace 2 trace reader is a major re-design of the original Babeltrace. The emphasis was put on making the internal data structures independent from the Common Trace Format's (CTF) concepts. This lets us easily write plugins that provide support for other trace formats in input and output. We can also write filters that transform/augment the trace data independently of the original input format or the eventual output format. These components are connected to each other in different ways, allowing a plethora of configurations.

Babeltrace 2 can be used both as a command line tool and a library, embedded in another program.

This talk will present the plugin architecture of Babeltrace 2 and show how to write plugins to support new trace formats, both in the C and Python languages.

## Biography
Simon Marchi has been working at EfficiOS on the Babeltrace 2 project since February 2019, and has some prior experience working with LTTng and the Common Trace Format. He is interested in all kinds of debugging and tracing tools.

## Target audience
Developers who need to consume, modify, analyze or produce trace data in various formats.
