---
layout: page
title: Tracing in Google Chrome
subtitle: Overview, challenges and userspace­-kernel interaction
redirect_from: /wiki/TracingSummit2015Chrome/
---

## Abstract
Google Chrome is a cross-platform web browser, written mostly in C++, that runs on multiple platforms, notably Windows, Linux, OS X, Android and IOS. It is also the basis of Google's Chrome OS operating system. Chrome is based on the opensource project Chromium, which is being developed by thousands of contributors from multiple organizations. Because of its volume and the fact that it is cross-platform, debugging Chrome’s performance and stability issues is not an easy feat. In order to facilitate that, a built-in cross-platform tracing infrastructure (about:tracing) was developed that gives a great visual representation of all chrome-events, ie. the activity happening inside of Chrome while it’s running. Thanks to its simple interface, users, be it web developers, Chrome developers or regular users, can select the type of events they would like to trace, including predefined groups of events to simplify the selection.

When tracing is activated, activity in Chrome's processes is recorded. Chrome uses a multi-process architecture with several types of processes, such as the browser process or the render process. Tracing records C++ or javascript method signatures in a hierarchical view for each thread in each process. This generates a lot of information, but sifting through it can help identify performance bottlenecks, slow operations, and events with irregular lengths (leading to e.g. framerate variation). The internal tracing system can also display system events, for some platforms, such as cpu utilization or disk activity. For example, on Android, it is possible to view most of the system events alongside the internal ones, giving us a deeper and better understanding of the interactions between Chrome and the system. On Windows, only cpu utilization system events are currently captured and displayed and these events are imported from Event Tracing for Windows (ETW).

In order to get a better understanding of Chrome’s performance on Windows, we have opted for a different approach. Although the internal tracer is a great tool, we wanted to use the Windows Performance Analyzer (WPA) instead. Since the tracing format generated by the internal tracer is not compatible with WPA, we added an option inside of Chrome allowing to export the internal events to ETW, which can then be captured with the standard ETW tools, such as XPerf. The result is that WPA can now display Chrome events alongside system events. Filtering of the categories is also possible by specifying the appropriate flags to the ETW provider. Also, in order to make capturing traces on Windows a simpler task, we developed [UIforETW](https://github.com/google/UIforETW), a User Interface FOR recording and managing ETW traces. It allows users to control how traces are recorded under windows by exposing the recording options in an easy to use graphical window. Under the hood, UIforETW invokes Xperf with the appropriate command line arguments, therefore masking its complexity. UIforETW also works around numerous problems with ETW tracing such as symbol loading issues and adds extra features such as categorizing Chrome processes. Although it has some features that are specific to Chrome developers, it is fully functional for non-Chrome developers as well.

In the first part of this talk, we start by presenting a high-level overview of Chrome and its components. We then focus on the built-in tracing system, showcasing the great cross-platform internal trace viewer. Using real examples, we demonstrate how to capture traces as well as how to view and analyse them. In the second part, we discuss the challenges of capturing and displaying both chrome-events and system events to better understand all the interactions that are occurring. Taking Windows as our target platform, we discuss the different options available for achieving that goal and present our solution. Using examples again, we show how to capture such traces (using UIforETW) and the benefits it offers compared to having only the chrome-events. The goal is to demonstrate the unique value that is obtained by recording program specific data on the same timeline as the right system information, allowing a deeper understanding of performance issues.

## Audience
This talk is targeted towards audiences who are interested in learning how tracing operates in a large multi-platform project such as Chrome. With so many different parts and a focus on speed, the tracing system must be both robust and extremely efficient. It also targets audiences who are interested in how we tackle the challenges of tracing both userspace and system events in Chrome.

## Biography
Georges Khalil obtained his Ph.D. from Ecole Polytechnique (Montreal) in 2013, in Computer Engineering, where he worked on the distribution of television in next generation networks. He joined Google in 2014 and works mostly on improving the speed and stability of Chrome. Tracing is one of the area he focuses on.

Bruce Dawson has worked on Windows performance for many years with a focus on using ETW to find performance problems. He also teaches others how to use ETW through his [blog](https://randomascii.wordpress.com/category/xperf/). Bruce worked at Microsoft for eight years, then Valve Corporation for 3.5 years, and joined Google the same day as Georges.