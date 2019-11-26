---
layout: page
title: uftrace updates and dynamic tracing
subtitle: 
redirect_from: /wiki/TracingSummit2019uftrace/
---

## Abstract
uftrace is an easy-to-use function tracing tool for Linux and gradually increasing its user base. In this talk Namhyung will share recent improvements in the uftrace with focus on the dynamic tracing. With this change (although it's still experimental), now uftrace can trace an arbitrary binary not built with special compiler options which were required before.

## Biography
Namhyung Kim is a software engineer at Google and have been working on the uftrace since 2014.

## Target Audience
The main target audience would be Linux application/system developers who write their code in C/C++. Recently Rust language added an option to support mcount-based function tracing like uftrace, but with dynamic tracing any developers use a programming language directly produces an ELF binary might be interested as well.
