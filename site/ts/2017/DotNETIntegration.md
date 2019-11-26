---
layout: page
title: How we integrated the LTTng pipeline to monitor .NET Core applications on Linux
subtitle: 
redirect_from: /wiki/TracingSummit2017DotNETIntegration/
---

## Abstract
Microsoft .NET is now open source with .NET Core and allows anyone to write applications that run on Linux. The .NET runtime provides traces via LTTng to let you analyze how your applications behave on top of the CLR.

Follow our journey, as windows experts with no former LTTng knowledge, to plug a custom CTF viewer into the live-mode LTTng pipeline and deploy it to Mesos. We will share our architecture choices, protocol understanding... and the complexity/performance pitfalls we faced.

## Audience
* frustrated .NET developers moving to Linux
* frustrated Linux developer moving to .NET Core
* any developer interested in integrating into the LTTng pipeline

## Biography
In addition to developing and debugging applications for 25+ years, Christophe Nasarre has written in the Windows native and .NET ecosystem a few articles and a book. He shares free debugging tools at https://codenasarre.wordpress.com. He is working as Staff Software Engineer at Criteo where he also contributes to http://labs.criteo.com/engineering-blog with Kevin. In a previous life, Grégory Léocadie built static code analysis tools for Cast Software. He is currently working at Criteo as Software Engineer on scalability. Kevin Gosse has been using Microsoft .NET technologies for 10 years, across client, server, and mobile applications. He is currently employed at Criteo, where he works on scalability, debugging, and optimization issues.
