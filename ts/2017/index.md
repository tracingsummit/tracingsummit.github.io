---
layout: page
title: Tracing Summit 2017
subtitle: 
redirect_from: /wiki/TracingSummit2017/
---

The Tracing Summit 2017 was held in Prague, Czech Republic on October 27th, 2017, at the Hilton Prague (Pobřežní 1, 186 00 Praha 8, Czech Republic), co-located with Open Source Summit Europe 2017. Room Karlin I-III

Organized by the [Linux Foundation Diagnostic and Monitoring Workgroup](http://diamon.org), this event focuses on the tracing area, gathering people involved in development and end-users of tracing tools as well as trace analysis tools. The main target of this Tracing Summit is to provide room for discussion between people in the various areas that benefit from tracing, namely parallel, distributed and/or real-time systems, as well as kernel development.

New in the 2017 edition: half the day will be reserved for presentations and the other half will be reserved for discussions (more in the style of Linux Plumbers Conference) between users and developers of the tracing infrastructures. Steven Rostedt will run the discussion part.

For the discussion part, we are looking for users exposing their current needs and the problems they encounter with the current kernel tracing infrastructures. Each discussion session is allowed a maximum of 1 slide to present the topic and context, the focus is really the discussion with the developers. These discussions should lead to actionable items.

For the presentation part, we are welcoming presentations from both end users and developers, on topics covering, but not limited to:

* Investigation workflow of Real-Time, latency, and throughput issues,
* Trace collection and extraction,
* Trace filtering,
* Trace aggregation,
* Trace formats,
* Tracing multi-core systems,
* Trace abstraction,
* Trace modeling,
* Automated trace analysis (e.g. dependency analysis),
* Tracing large clusters and distributed systems,
* Hardware-level tracing (e.g. DSP, GPU, bare-metal),
* Trace visualisation,
* Interaction between debugging and tracing,
* Tracing remote control,
* Analysis of large trace datasets,
* Cloud trace collection and analysis,
* Integration between trace tools,
* Live tracing & monitoring,
* Programmable tracing (e.g. eBPF).

Those can cover recently available technologies, ongoing work, and yet non-existing technologies (which are compellingly interesting to end-users). Please understand that this open forum is not the proper place to present sales or marketing pitches, nor technologies which are prevented from being freely used in open source.

There is a single track, containing presentations between 30 and 45 minutes per subject with discussion.

## Registration
There are multiple ways to register to the Tracing Summit.

If you attend the Open Source Summit, you can add the Tracing Summit as a free addon during registration: here.

You can also register for free to the Tracing Summit without registering to the Open Source Summit here.

## Presentation And Discussions Proposals
If you are interested to present or lead a discussion topic, please submit a proposal to submission@tracingsummit.org before September 1st, 2017, at 23:59 EST. Please specify if it is a presentation or a discussion topic, provide a title, an abstract describing the proposed presentation or discussion topic (900 characters maximum), a short biography (900 characters maximum), and describe the targeted audience (900 characters maximum).

## Schedule
* **9:00 – 9:05** Opening
* **9:05 – 9:45** [Investigating and reducing latency of trading applications](Trading), Konstantin Volkov (Deutsche Bank Tech Centre) [(slides)](files/TS17-trading.pdf) [(video)](https://www.youtube.com/watch?v=m8gig4BBGP0&index=1&list=PLuo4E47p5_7bfeZyYIyNYM-f-2tmr0neu) 
* **9:50 – 10:10** [Common Trace Format (CTF) version 2](CTF2), Philippe Proulx (EfficiOS) [(slides)](files/TS17-ctf2.pdf) [(video)](https://www.youtube.com/watch?v=m8gig4BBGP0&index=1&list=PLuo4E47p5_7bfeZyYIyNYM-f-2tmr0neu) 
* **10:10 - 10:30** [Tailor-made trace analyses with Babeltrace 2](BT2), Jérémie Galarneau (EfficiOS) [(slides)](files/TS17-bt2.pdf) [(video)](https://www.youtube.com/watch?v=8kyv0sQJh4s&list=PLuo4E47p5_7bfeZyYIyNYM-f-2tmr0neu&index=3)
* **10:30 – 11:00** Break
* **11:00 - 11:40** [KUTrace: Where have all the nanoseconds gone?](KUTrace), Richard Sites (EPFL Lausanne) [(slides)](files/TS17-kutrace.pdf) [(hello_trace.html.txt)](files/TS17-kutrace-hello_trace.html.txt) [(video)](https://www.youtube.com/watch?v=UYwWollxzAk&list=PLuo4E47p5_7bfeZyYIyNYM-f-2tmr0neu&index=4)
* **11:45 - 12:25** [Bringing the Windows .NET Performance Diagnostics Experience to Linux](DotNET), Brian Robbins (Microsoft) [(slides)](files/TS17-dotnet.pdf) [(video)](https://www.youtube.com/watch?v=_m2GsaVDQts&list=PLuo4E47p5_7bfeZyYIyNYM-f-2tmr0neu&index=5) 
* **12:30 - 12:50** [How we integrated the LTTng pipeline to monitor .NET Core applications on Linux](DotNETIntegration), Christophe Nasarre-Soulier (Criteo) [(slides)](files/TS17-dotnet-monitoring.pdf) [(video)](https://www.youtube.com/watch?v=pMl9RM9h2eg&list=PLuo4E47p5_7bfeZyYIyNYM-f-2tmr0neu&index=6)
* **12:50 - 13:10** [Data Watch – A memory access audit technique](DataWatch), Jason Puncher (Ciena) [(slides)](files/TS17-datawatch.pdf) [(video)](https://www.youtube.com/watch?v=YOV21yWCfVo&list=PLuo4E47p5_7bfeZyYIyNYM-f-2tmr0neu&index=7) 
* **13:10 – 14:30** Lunch
* **14:30 - 15:10** [Shed Lights into your Web Applications](Web), Naser Ezzati (École Polytechnique de Montréal) [(slides)](files/TS17-web.pdf) [(video)](https://www.youtube.com/watch?v=-86U5_P6GaI&index=8&list=PLuo4E47p5_7bfeZyYIyNYM-f-2tmr0neu)
* **15:15 – 15:55** [State of the tracers](SoT) [(slides for Perf)](files/TS17-state-perf.pdf) [(slides for LTTng)](files/TS17-state-lttng.pdf) (slides for Ftrace) [(video)](https://www.youtube.com/watch?v=hQoqYr8_cWo&list=PLuo4E47p5_7bfeZyYIyNYM-f-2tmr0neu&index=9)
* **16:00 – 16:40** [Discussion](Discussions)
* **16:40 – 17:30** [Discussion](Discussions)
* **17:30** End

## Contact
Please send any query about this conference to info@tracingsummit.org.

The organizers responsible for this event are Julien Desfossez and Mathieu Desnoyers.

## Sponsors
The Tracing Summit is sponsored by [EfficiOS](https://efficios.com).
