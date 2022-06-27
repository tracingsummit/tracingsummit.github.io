---
layout: page
title: System Level Target Data Collection BoF
subtitle: 
redirect_from: /wiki/SystemLevelTargetDataCollectionBOF/
---

These are the proceedings of the System Level Target Data Collection BOF that was held on January 29th 2008 at the Tracing Summit 2008 in Montreal.

## Participants
* Robert Wisniewski, IBM Research (Blue Gene project)
* Paola Delsante, Ericsson
* Elena Zannoni, Oracle (Linux Team)
* Carlo Vitucci, Ericsson
* Mario Couture, Defence R&D Canada
* Peter Dibble, Timesys
* Pierre-Marc Fournier, Ecole Polytechnique de Montreal, LTTng/LTTV
* Mathieu Desnoyers, Ecole Polytechnique de Montreal, LTTng/LTTV maintainer
* Felix Burton, Windriver

## Discussions
## Accurate timebase on different cores

The problem is timestamp counters are not always synchronized between cores.

Mathieu: On a system with shared memory, we would like to have almost cycle-accurate timestamping.

Peter: On powerpc, there is a spacial time register that gets its value from the bus. It is a synchronized timesource available to all chips.

Bob: As part of a tracing system, we need an infrastructure to synchronize between cores, chips, and distinct systems.

Bob: The problem is complex if cores are changing their speeds without our knowing.

Bob: Experiments have showed that on the long run, there is a drift of as much as 0.1% between TSCs.

Bob and Mathieu: idea of adding synchronization points regularly to the trace, or the possibility to add them when their is a scaling event

Mathieu: Intel is working on fixing the time counter, but that counter will have a frequency that is slower than current TSCs.

Carlo: Post-mortem debugging is important for Ericsson

Mathieu: It's implemented in LTTng, although it has a small performance impact when enabled.

Carlo: On an Ericsson realtime OS, they have a very good post-mortem analysis tool. For Ericsson, it is imperative, if they want to use linux, to have post-mortem debugging. If nodes crash, they need to know what happened.

On a crashed system, there are the last events that occured before the trace, as well as extra information that is not usually available on a live system, like the stacks and registers of all processes and the state of all kernel structures.

Carlo: wants a way for a process to dump some data only when the system crashes

Mathieu and Bob: This is what the flight recorder is used for.

Pierre-Marc: It is not practical to dump regularly a huge number of variables or a large quantity of data in the flight recorder.

Bob: You have that data in the crash dump, but to extract it, you need to find out what processes were running and where are the interesting data, and it's not simple. What we are talking about is a smart dumper that can dump specific variables of specific processes.

Carlo: for him, it is very important to have a hook to tell the kernel or some other mechanism what to print when the system crashes

Bob and Felix: this is an optimization of the crash dump extraction problem and the people present here are not experts on this.

Conclusion: from a tracing point of view, the way to save data for crash dump extraction is to use flight recorder and to fire events that saves this data regularly.

### Impact of virtualization on tracing
Problem of the synchronization of TSCs on virtual machines vs physical machines.

Bob: Recommends that there be one synchronized timestamp on a single chip (all cores, all virtual machines).

Felix: possiblity of having a chip-wide read-only register that increments by one each time you read it, for having a monotonic time source.

Discussion about the effect of heat on clock drift, and the fact that temperature can change very quickly. Subsecond temperature peaks are a reality. Clock drift due to temperature is a fact.

Should we or should we not virtualize the TSC? Is it more important to hide to the virtualized os the fact that it is beging virtualized, or to permit tracing by using an absolute timesource? Having a synchronized TSC across virtualization boundaries definitely makes tracing easier.

Bob: There are a few cases where a virtualized TSC is needed. One example is that to keep track accurately of the usage of resources on the system through time, you need a virtualized time source.


### Standardization of trace format
Mathieu and Bob: Need to have a standard trace format, minimalistic, need to be able to skip the event even if you don't know what it is when reading the trace.

There is a discussion about the need to have a major/minor part where the major indicates the category of the event. This is useful for quick filtering by category and was used by Bob in a previous project. As Mathieu observes, however, this is not necessary with the markers, since they can be enabled on an individual basis. Bob agrees.
