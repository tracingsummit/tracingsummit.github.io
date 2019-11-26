---
layout: page
title: Intel Trace Hub usage on Intel android platform
subtitle: 
redirect_from: /wiki/TracingSummit2019tracehub/
---

## Abstract
Intel(R) Trace Hub (TH) is a set of hardware blocks that produce, switch and output trace data from multiple hardware and software sources over several types of trace output ports encoded in System Trace Protocol (MIPI STPv2) and is intended to perform full system debugging.

It consists of trace sources, trace destinations (outputs) and a switch (Global Trace Hub, GTH). These devices are placed on a bus of their own (“intel_th”), where they can be discovered and configured via sysfs attributes.

For Intel android platform, Intel TH also enabled for debugging, the only difference is Intel android platform USB runs as device mode, and existing upstream driver only support host mode, 2 set of drivers are developed to support USB device mode and Intel TH device mode solution and finally integrated with Intel System Debugger

## Biography
Baofeng Tian is a software engineer at Intel and have been working on android/google OS debug and trace since 2014.

## Target Audience
All that interested for chrome/linux/android Trace collection and extraction, this is Intel reference trace collection and extraction.
