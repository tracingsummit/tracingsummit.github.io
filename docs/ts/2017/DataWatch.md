---
layout: page
title: Data Watch
subtitle: A memory access audit technique
redirect_from: /wiki/TracingSummit2017DataWatch/
---

## Abstract
Several techniques exist to dynamically detect heap and stack corruption and are well known in the industry. Examples of such tools are Valgrind and eFence. Other tools like AddressSanitizer (ASan) rely on the compiler to add instrumentation to the code to detect memory corruption. In this presentation a clever approach based on MMUs and virtual memory is introduced. This method can easily detect some out-of-bound access to the stack or heap and latent access to previously released memory.

## Audience
Anyone interested in memory corruption detection techniques

## Biography
Jason Puncher is a software engineer in the Platform Tool Group at Ciena. He is a seasoned debugger and has twenty years of tool development under his belt.
