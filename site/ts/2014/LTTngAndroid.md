---
layout: page
title: Porting LTTng to Android for kernel-space and native user-space tracing
subtitle: 
redirect_from: /wiki/TracingSummit2014LTTngAndroid/
---

## Abstract
Android already have some nice debugging and profiling tool, but when it comes to tracing, you mostly rely on Perf and Ftrace. From the nature of Android being mostly Java based, having LTTng on there would be greatly useful to aggregate kernel, native application and Java application traces. However, it doesn't come free as some features on standard Linux OS are not available on Android. Most important differences in this case are within IPC, base libraries and build tools. The presentation is about what have been done so far to work with those differences and what still needs to be done, followed by a quick demo.

## Audience
App developers will see an interest in tracing their Java apps while Android driver engineers developing part of their driver in user-space will see interest in aggregating the trace from user-space and kernel-space.

## Biography
Charles grew up in Montréal, Canada, where he studied Computer Engineering at École Polytechnique de Montréal and graduated in 2013. His first steps in tracing were with LTTng for his final bachelor project. He worked under the supervision of professor Michel R. Dagenais within a team trying to bring LTTng to Android. Then he joined a computer graphics team at Samsung in San José, California, where he recently got back to that LTTng on Android project.
