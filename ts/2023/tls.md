---
layout: page
title: Reliable User Space TLS tracing with eBPF
---

## Abstract

TLS adoption in today’s environments is growing rapidly and poses challenges for
instrumentation-free tracing tools that intercept microservices’ RPC
messages. When these messages are encrypted, normal traffic sniffing collects
the encrypted data and has no means to access the original payload. This
inhibits traditional network tracing tools from providing insight and
complicates debugging production systems when critical issues arise.

To address this, eBPF tracing tools such as BCC’s
[sslsniff](https://github.com/iovisor/bcc/blob/5c92af6a8db7050e74edf2c233fae2ab6e07042f/tools/sslsniff.py)
and [Pixie](https://px.dev/) deploy user space probes on an application’s TLS
library to regain access to the plaintext data. While these eBPF-based
approaches are exciting, scaling this type of instrumentation presents a new set
of difficulties due to the possible combinations present in applications:
variety of library choices (OpenSSL, BoringSSL, LibreSSL, etc), versions in
existence of each library and type of linking (static or dynamic).

In this talk, we present the techniques developed to reliably trace TLS
applications across a wide array of conditions found in real-life
applications. This approach allows Pixie to trace both BoringSSL and OpenSSL
despite their differences and reduces the maintenance burden for supporting new
library versions compared to the previous style of tracing. We conclude the talk
by noting a few of the coverage challenges that remain, and our plans to
continue expanding TLS tracing support.

## Biography

Dom is a Principal Software Engineer at New Relic working on the Pixie open
source project, which provides observability to Kubernetes applications through
eBPF based auto instrumentation. Prior to his full time work on Pixie, Dom was
at Twitter scaling its internally developed time series database to 30B active
time series. While at Twitter, he became an active contributor to Pixie,
expanding its TLS tracing to support the Java services running at Twitter.
