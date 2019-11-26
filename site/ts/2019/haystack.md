---
layout: page
title: Finding the needle in a Haystack
subtitle: 
redirect_from: /wiki/TracingSummit2019haystack/
---

## Abstract
Observability is key in modern architectures to quickly detect, triage, repair problems in microservices. Modern observability platforms have evolved beyond simple application logs and now include distributed tracing like Zipkin, Haystack. While these systems are to detect problems in a manual fashion , combining them with real time intelligent alerting mechanisms with accurate alerts helps in automated detection of these problems.

We at Expedia work on a mission of connecting people to places through the power of technology. To accomplish this, we build and run hundreds of micro-services that provide different functionalities to serve one single customer request. Now what happens when one or more services fail at the same time? Well, to improve the observability in our system and provide high quality of service, we see a need to connect these failure points across our distributed topology to reduce mean time to know(MTTK) and resolve (MTTR).

In this talk, we will present the journey of distributed tracing at Expedia that started with Zipkin as a prototype and ended up building our own solution(in open source) using OpenTracing APIs

## Biography
I am working as a technical product manager on the first open source product by Expedia. I am happiest when talking about the problems we have solved, the various approaches we tried and the challenges we overcame. I previously worked as a software developer and a tester for about 4 years and understand the perspectives and pains well having lived them. I have a double masters in computer science graduating from USC in 2015. I thrive in the space created by the intersection of tech, product, and management.

## Target Audience
A target audience would be someone with a basic understanding of tracing and who is fairly technical to understand the inner workings of a tool that helps with that.
