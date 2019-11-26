---
layout: page
title: Tracing Summit 2008
subtitle: 
redirect_from:
  - /wiki/TracingSummit2008/
  - /wiki/Tracing_Summit_Presentations_2008/
  - /wiki/List_of_Participants/
  - /wiki/Location,_Travel,_Special_Event/
---

New electronic services rely on an increasingly sophisticated infrastructure composed of powerful servers, numerous fixed or mobile clients, and the system and networking software. The central processing units have evolved from simple processors, to symmetric multi-processors (SMP), non-uniform memory access (NUMA) SMPs and more recently multi-core (SMP on a single chip) systems. Embedded soft and hard real-time multi-core multi-computer systems are exceedingly difficult to debug and tune. Many problems, often timing related, only show under real loads, when the hardware (cache, page tables, synchronization) and software (operating system, virtual machines, libraries and applications) are interacting in real-time. The development time of distributed, online, applications is a major stumbling block for creating new services. Tools are needed to extract precise, globally ordered, debugging and performance data while minimizing the overhead on the systems under test. This data must be made available to suitable monitoring, visualization and analysis frameworks.

## Objective
Experts from industry and university present the state of the art in the area of tracing/monitoring of computer systems, (including distributed and multi-core systems) and have advanced users present challenging problems they are facing. This should better adapt the R&D efforts in the area of diagnostic (security, reliability, accuracy, debugging, optimization, resource utilisation, timing behaviour) to the real priorities of industrial and governmental practitioners.

## Organization
This event is held jointly by Ericsson, Defence R&D Canada and l'École Polytechnique de Montréal in preparation of a DND/NSERC R&D partnership project and the creation of an Eclipse tracing framework.

The representatives from each organization are:

* **Michel Dagenais** has been active in the area of system analysis tools for the past 15 years. The Linux Trace Toolkit, developed under his supervision at Ecole Polytechnique, is used throughout the world and gained the cooperation of a large number of industrial contributors over the years from Autodesk Media and Entertainment, Ericsson, Google, IBM, Monte Vista, Sony and others. Phone: +1 514 340 4711 x4029, e-mail: michel.dagenais@polymtl.ca
* **Dominique Toupin** has been working at Ericsson on software engineering improvements with the open source community, researchers and commercial companies. He developed systems to manage wireless networks.
* **Robert Charpentier** after working at CAE Electronics on flight simulators, joined Canada Defense Research at Valcartier where he specialized in infrared imagery and space-based surveillance. His current research interests are in secure interoperability and software robustness.

## Schedule
### Day 1 - Tuesday January 29, 2008

**9h00-10h20 Michel Dagenais, Gabriel Matni, Pierre-Marc Fournier, Robert Roy**

Survey of the best available tools and techniques for system performance tracing and analysis ([part1](files/TracingReview_MichelDagenais_MontrealJan2008.pdf), [part2](files/TracingReview_GabrielMatni_MontrealJan2008.pdf), [part3](files/TracingReview_PierreMarcFournier_MontrealJan2008.pdf), [part4](files/TracingReview_RobertRoy_MontrealJan2008.pdf))

The talk will describe the different types of tools and techniques used to extract, analyze and visualize system execution and performance data. The survey will cover source level and binary instrumentation (e.g. Dtrace, SystemTap), as well as sampling (e.g. gprof, OProfile) for extracting data. Different visualization and analysis tools and frameworks will be described, including tools from the Eclipse framework, QNX and Wind River. As will be described by Robert Roy, for large parallel computing applications, the ultimate challenge of parallel performance analysis tools is to help in finding bottlenecks and synchronization problems and further optimizing the code. He will focus on the use of performance analysis tools for developing parallel solvers (inputs, ease of use, scalability).

**10h30 – 10h50 Frank C. Eigler / RedHat**

SystemTap [(slides)](files/SystemTap_FrankEigler_MontrealJan2008.pdf)

Description of the SystemTap free software infrastructure to simplify the gathering of information about running Linux systems. SystemTap eliminates the need for the developer to go through the tedious and disruptive instrument, recompile, install, and reboot sequence that may be otherwise required to collect data.

**11h30 – 12h20 Robert Wisniewski / IBM**

Performance analysis and debugging at IBM [(slides)](files/PerformanceAnalysisIBM_RobertWisniewski_MontrealJan2008.pdf)

Discussion of the performance analysis and debugging he has done at IBM. He will describe the challenges presented by both external and internal IBM clients, typically in the area of HPC and multi-core servers. He will then describe the tools he has worked on to address those challenges.

**13h30-14h20 Eugene Chan / IBM - Eclipse Test & Performance Tools Platform**

Extending Eclipse Test and Performance Tools Platform (TPTP) [(slides)](files/ExtendingTPTP_EugeneChan_MontrealJan2008.pdf)

Overview of the TPTP architecture following by a quick look at the profiling features of TPTP. Finally, we will focus on UI extensions that are available to support non-Java context.

**14h30- 15h20 Steven Shaw / IBM Rational**

IBM Rational Systems Developer Extensibility with consideration of UML Debug and Trace integrations [(slides)](files/UMLTracing_StevenShaw_MontrealJan2008.pdf)

This presentation will provide a brief overview of the Rational Systems Developer tooling and then drive into the different extensibility features that it offers. The architecture of the product with respect to the open source components that it leverages will be explored as well as the relevant extensibility of those components. For example, we will briefly look at the extensibility mechanisms for Eclipse platform, EMF (Meta-model framework), UML2 (concrete meta-model built using EMF), GEF (Graphical Editing Framework), GMF (Graphical / Generative Modeling Framework), RSD (Rational Systems Developer). Finally we will create / examine some example plug-ins / plug-lets that utilize the extensibility with consideration of typical integrations that would be important for debugging a UML system.

**15h30-15h50 Elena Zannoni / Oracle**

Tracing at Oracle [(slides)](files/OracleTracing_ElenaZannoni_MontrealJan2008.pdf)

Elena will talk about the experience of the Oracle DataBase team with tracing and the problems they face.


**16h00-16h20 Mathieu Desnoyers / Ecole Polytechnique**

Tracing the Google platform [(slides)](files/TracingGooglePlatform_MathieuDesnoyers_MontrealJan2008.pdf)

Mathieu will describe his experience in tracing while working for the platform team at Google. He will describe a number of typical hard to diagnose problems encountered on extremely large clusters and how they were solved using tracing tools. The specific challenges and expectations for very large high performance online server clusters will be exposed.


**16h30-16h50 Steve Furr / Freescale**

Multicore Enablement Challenges for Semiconductor Manufacturers [(slides)](files/FreescaleMulticoreMonitoring_SteveFurr_MontrealJan2008.pdf)

This presentation will highlight some of the challenges that face vendors as multicore processors become more prevalent. Multicore solutions increase the complexity of static and realtime debugging tools. The difficulties, motivations and objectives behind enabling multiple vendors of dynamic debug and profiling tools are examined from the perspective of a semiconductor manufacturer's perspective.


**17h00-17h20 Stuart Fullmer / MontaVista**

Tracetools with MontaVista Linux (slides not provided)

Short presentation regarding LTTng and TimeDoctor. The presentation will give a quick overview of the tools and our level of integration of the tools and where MontaVista sees itself with future offerings.


**19h00 – 20h00 BOF (Birds Of a Feather) sessions**

[System Level Target Data Collection BoF](SystemLevelTargetDataCollectionBOF)

[Eclipse Tracing Monitoring Framework BoF](Eclipse_Tracing_Monitoring_Framework_BOF)


### Day 2

**9h00-9h50 Sven Lundblad / ENEA**

Advanced Event - Action System and Flexible Profiling [(slides)](files/ENEAEventActionSystem_SvenLundblad_MontrealJan2008.pdf)

Enea's advanced Event Action system. Use cases (system tracing and debugging), functionality (event types, filtering, different actions, event action states), intrusiveness, and controlling tools. Possibilities and challenges in multi core systems. The Event Action implementation in OSE and possible Linux support. Optima Profiling capabilities Advanced custom profiling, memory profiling and CPU usage profiling (in single core and SMP systems).

**10h00 – 10h20 Henrik Thane / ZealCore**

Monitoring, Information Fusion, Reverse Engineering and Replay Debugging [(slides)](files/ZealCoreMonitoringReplay_HenrikThane_MontrealJan2008.pdf)

Discussion on different trace recording approaches including handling of multi-core systems, and most importantly what do you do with the recorded information? How can you fuse different trace logs, do reverse engineering and raise the level of Debugging? We will especially look into the problem on how to achieve forward and backward replay debugging on the UML model level (reanimated state-machines and sequence diagrams) based on reverse engineering of minimal target run-time recordings.

**10h30-11h20 Beth Tibbitts / IBM Research**

Eclipse Parallel Tools Platform & Performance Tools Framework [(slides)](files/EclipseParallelToolsPlatform_BethTibbitts_MontrealJan2008.pdf)

The Eclipse Parallel Tools Platform (http://eclipse.org/ptp) aims to produce an open-source industry-strength platform that provides a highly integrated environment specifically designed for parallel application development. This includes a standard, portable parallel IDE that supports a wide range of parallel architectures and runtime systems, a scalable parallel debugger, support for the integration of a wide range of parallel tools, an environment that simplifies the end-user interaction with parallel systems. A performance tools framework is being designed to ease the integration of performance tools into Eclipse and PTP. The University of Oregon has developed Eclipse plugins for PTP for its TAU (Tuning and Analysis Utilities) and we are working to generalize and make these features and others available to ease integration of other tools, including performance tools with PTP and EclipseParallel computing tracing with Eclipse Parallel Tools Platform Performance Analysis Framework / Tuning and Analysis Utilities.

**12h30-13h20 Andrew McDermott / WindRiver**

Developing OS-agnostic visualization tools [(slides)](files/SystemViewer_AndrewMcDermott_MontrealJan2008.pdf)

Today it is desirable to use a common [visualization] tool for diagnosing system behaviour. However, it is more common to find different tools, different user interfaces, different data formats and different levels of overall tool capability on a [operating] system-by-system basis. Additionally, the mechanics of querying the data in an ad-hoc manner outside the boundaries of the tool are typically programming language specific or non-existent. Wind River's System Viewer, previously known as WindView, is a sophisticated visualization tool that enables developers to view the dynamic operation of their system. System Viewer has evolved to address the deficiencies listed above to be an OS-agnostic visualization tool (e.g., VxWorks and LTT), providing a separate and SQL-query able data engine that can accommodate new systems.

**13h30-14h20 Felix Burton / WindRiver**

Target Communication Framework [(slides)](files/TargetCommunicationFramework_FelixBurton_MontrealJan2008.pdf)

Today almost every device software development tool on the market has its own method of communicating with the target system. Communication methods often conflict with each other, requiring individual setup, configuration, maintenance, and imposes different limitations for different tools. TCF is designed to establish a common communication mechanism between development tools and embedded devices for the purposes of debugging, performance monitoring, file system access, etc.

Wind River Sensorpoint Technology [(slides)](files/SensorPoint_FelixBurton_MontrealJan2008.pdf)

Increasingly complex systems are hard to debug using traditional techniques such as breakpoints and stepping or printf. Sensorpoints allow dynamic instrumentation of software in the lab as well as in the field with minimal impact on the system performance and system resources. This makes it ideal for diagnosing complex problems as well as creating patches to fix such issues in deployed devices. Sensorpoints are code fragments that can be dynamically “injected” into a binary image, without requiring a restart of the application or the device.

**14h45-16h15 Michel Dagenais, Robert Charpentier, Dominique Toupin**

[Concluding Panel](Concluding_Panel)

Michel Dagenais, Robert Charpentier and Dominique Toupin will animate a discussion to identify the most important current and upcoming challenges for system analysis shared by the participants.

## Presentations
* Tracing Summit Presentations 2008
 - Eclipse Tracing Monitoring Framework BOF
 - System Level Target Data Collection BOF
 - Concluding Panel
* Tracing Book

## List of Participants

### CodeSourcery
**Nathan Sidwell / CodeSourcery** GNU toolchain developer for 9 years involved in C++ front-end development and ports to several architectures. Nathan now manages the GNU toolchain team at CodeSourcery.

### Concordia University
**Sofiene Tahar / Concordia** Dr. Tahar's research interests include Hardware Specification and Verification, Formal Methods, VLSI Design Automation, Communications Hardware and Protocols. He is founder and director of the Hardware Verification Group (HVG) at Concordia, which focuses on the development of methodologies, algorithms and tools for formal and semi-formal verification of hardware and embedded systems.

### Defence R&D Canada
**Eric Martin / Dir IM Secur** Requirement manager for the DND/CF Enterprise Information Security Environment.

**Guy Turcotte / Defence R&D Canada** Heading the “Systems of Systems” section at DRDC Valcartier.

**Mario Couture / Defence R&D Canada** Defence scientist specialised in software robustness and security that typically rely greatly on continuous monitoring of critical assets.

**Nawel Chefai / Defence R&D Canada** Defence scientist specialized in system performance with a focus on Command and Control system performances over disadvantaged networks.

**Paul Lamoureux / Dir IM Secure** Security analyst for DND/CF IT infrastructures specifically interested in adverse technology exploitation that could impact the national security.

**Robert Charpentier / Defence R&D** After working at CAE Electronics on flight simulators, joined Canada Defense Research at Valcartier where he specialized in infrared imagery and space-based surveillance. His current research interests are in secure interoperability and software robustness.

**Roch Decoste / RMCP-GRC** Part of the RCMP's Technological Crime Branch, Network & Information Operations Team. He performs investigations on "Unauthorized Access” (hacking files) as well as International Botnet and Phishing cases where tracing multi-core executions is becoming essential.

### ENEA
**Sven Lundblad / ENEA** Technical responsible and team leader for the Enea Tools Team. Sven has worked with debugging tools for more than 10 years and in addition Sven have, within ENEA, held a position at the OSE System Architecture board and headed a high availability platform team.

### Ericsson
**Alf Larsson / Ericsson / Cello Packet Platform (CPP)** System designer work with the Development platform (DTE) used by designers building applications on top of CPP. Main responsible of the functionality Debug, Trace and Profiling in embedded systems. Have a broad knowledge from HW, Real-time OS and large distributed systems.

**Anders Caspár / Ericsson / Ericsson Software Research** Director SW Research

**Bo Nilsson / Ericsson / Mobile Platform** Working with dynamic logging and control interface on a low level. Been at Ericsson more than four years, the first three years in System Test, developing test cases and the platform for those.

**Carlo Vitucci / Ericsson / AXE-RP** In 1994 he graduated in Telecommunication Electronics Engineering. Since 1996 he is an Ericsson employee, where he is Specialist Embedded Software designer. Since 2001, he is involved in the PISATEL consortium, taking care of Real Time Operating System research together with Scuola Superiore S.Anna. http://www.linkedin.com/in/carlovitucci

**Dominique Toupin / Ericsson / PM&T DISW** Has been working at Ericsson on software engineering improvements with the open source community, researchers and commercial companies. He developed systems to manage wireless networks.

**François Chouinard / Ericsson / Methods and Tools** Software Architect and Designer working on embeddedsystem debugging and load-simulation tools. He holds a BSc. in Computer Science from UQAM and is currently working on the Eclipse Device Software Development Platform project as a Committer.

**Joel Huselius / Ericsson / Cello Packet Platform (CPP)** Currently working at Ericsson, where his main interests are issues relating to debug and observability of the CPP platform. His main research interests are debugging, automated modeling, and the long-term evolution of legacy real-time systems."

**Jonas Strömgren / Ericsson / AXE-CP** Systems Tester

**Marc Khouzam / Ericsson / Methods and Tools** Software designer working on embedded-system debugging as well as load-simulation tools. He holds a Masters in Mathematics from the University of Waterloo and is currently working on the Eclipse Device Software Development Platform project as a Committer.

**Marco Masse / Ericsson / Methods and Tools** Development Manager. He manages a central tools organization that is responsible for developing internal tools and simulators for the Ericsson R&D community. He holds a BSc in Software Engineering from University of Sherbrooke and is currently working on managing several Eclipse based tool projects.

**Maria Toeroe / Ericsson / Research & Innovation** Researcher

**Niclas Gustafsson / Ericsson /AXE-CP** Designer

**Onofrio Amendola / Ericsson / AXE-IO** Software Engineer and team leader in AXE-IO area. In Ericsson since 2000 always working in the open system areas on several projects and products: GSM On the Net, IMA, Minilink Manager, LI-IMS and APG. Recently also Method & Tool and SW process owner in AXE-IO area.

**Paola Delsante / Ericsson Marconi Broadband Access Area** Working in Marconi/Ericsson since 1997 in Software Design. Currently involved in Genova BroadBand Access area as a Software Technical Coordinator.

**Peter Smith / Ericsson / RedBack** Best Practice Advocate at Redback Networks, he has been with the company for almost 10 years and has been a software engineer, a project manager, and a tools manager. His current role is to identify weak spots in the engineering processes and tools, as well as to research and introduce new ways of alleviating those weak spots.

**Pierre Boucher / Ericsson / Research & Innovation** Director for Research at Ericsson's R&D center in Montreal. He is responsible for research activities on broadband systems and for the R&D center's collaborative research and innovation projects with universities and institutions. Areas covered by his group include fixed-mobile convergence, service architectures, software and advanced radio applications.

**Samir Douik / Ericsson / IM&T** Director Infrastructure Methods and Tools

**Stephan Bill / Ericsson / PM&T** Senior specialist working to support the area of Integration and Verification with respect to methods and tools. His focus is on test management and integration to other areas.

**Tamás Eiler / Ericsson / Telecom Service Platform (TSP)** I've been working with Ericsson TSP for more than 3 years. Currently working as technical coordinator in one of the subsystems and as a system engineer responsible for various functional areas.

### Freescale
**Steve Furr / Freescale** Senior architect within the Developer Technology Organization which develops the CodeWarrior software development tools. He is responsible for defining the architecture for future trace and software debug products. Prior to joining Freescale, Steve acquired more than 12 years of experience in the embedded software industry in senior engineering and product management roles at QNX Software Systems. While at QNX, Steve led the team that produced the first prototypes that culminated in the Eclipse CDT project.

### IBM
**Beth Tibbitts / IBM** Research Veteran of software development in IBM, including software for Expert Systems, debuggers, education, ADHD children. Beth is now an avid Eclipse developer and is a committer on the Parallel Tools Platform Project, developing tools for high performance computing users. Cover PTP, existing core, debugger, performance and analysis tools, and frameworks that we are beginning to create to ease the introduction of other existing tools into the Eclipse workbench.

**Eugene Chan / IBM** Autonomic Computing Tools and Technologies group Eugene has been a committer on the Eclipse Test and Performance Tools project (TPTP) since its launch at Eclipse.org in 2002. Eugene had been focusing on the user interface of the TPTP project.

**Robert Wisniewski / IBM** Research Currently working at IBM's T.J. Watson Research Center as a research scientist and manager of the Blue Gene Research Software Team, he has worked on many performance analysis projects focused on High Performance Computing project including SGI IRIX and Origin machines, K42, a scalable OS project targeted at next generation scalable machines, LTT (Linux Trace Toolkit), and CPO (Continuous Program Optimization), which is aimed at using vertically integrated performance data to automatically improve the performance of both applications and the underlying system.

**Steven Shaw / IBM** Rational 15 years industry experience with 10 years developing modeling tools. Former lead of the Rose RealTime product which had a UML Debugging capability on an embedded target. One of the architects / leads of the GMF open source project and former contributor. Currently working on extensions for RSD in the embedded space.

### Laval University
**Béchir Ktari / Université Laval** Professor focusing on security issues

### Monta Vista
**Stuart Fullmer / MontaVista** Engineer at MontaVista software for the tools development team. Create and integrate Eclipse plugins and features to simplify and speed up the development time of applications and systems utilizing our Linux offerings.

### Nokia
**Eero Tamminen / Nokia / Maemo** Managing open source system analysis tools at Nokia for maemo, his main interests are in the area of accurate debugging (tracing) of potential system wide issues and good tools to analyze and visualize that information.

### Oracle
**Elena Zannoni / Oracle** Manager of the Tools and Languages team in the Linux Engineering group at Oracle. Current interests of the team in the monitoring area include Systemtap and utrace. Previous to Oracle, Elena was the Tools team manager at Red Hat.

### Polytechnique University
**Benjamin Poirier / École Polytechnique** M.Sc. student

**Gabriel Matni / École Polytechnique** M.Sc. student

**Mathieu Desnoyers / École Polytechnique** Ph.D. student working on system level tracing. He has consulted, worked for or been financed by Autodesk Media and Entertainment, IBM, and Google in the past few years on system level tracing. He recently contributed several performance enhancements patches which have been accepted in the mainline Linux kernel.

**Michel Dagenais / École Polytechnique** Has been active in the area of system analysis tools for the past 15 years. The Linux Trace Toolkit, developed under his supervision at Ecole Polytechnique, is used throughout the world and gained the cooperation of a large number of industrial contributors over the years from Autodesk Media and Entertainment, Ericsson, Google, IBM, Monte Vista, Sony and others.

**Pierre-Marc Fournier / École Polytechnique** M. Sc. student

**Robert Roy / École Polytechnique** He is a professor in the department of Computer and Software Engineering, he is an expert in parallel processing and nuclear engineering applications. This dual expertise brings familiarity with both tracing and other performance analysis tools for high performance systems, and the stringent requirements for security and safety in software for the design and operation of nuclear plants.

### RedHat
**Andrew Cagney / RedHat**, Frysk Technical lead of the Frysk Project; his technical background is in debuggers, hardware and instruction simulators, and operating system internals.

**Frank C. Eigler / RedHat**, SystemTap Decade-long systems software developer at Red Hat, he has overall technical responsibility for systemtap.

### TimeSys
**Peter Dibble / TimeSys** Distinguished Engineer at TimeSys with almost 20 years experience in embedded/real-time system software including design and implementation of HawkEye for OS-9, a system monitoring and visualization tool. His recent work has been in relatively formal real-time systems and especially in real-time Java. He is the maintenance lead for JSR-1 (RTSJ 1.0) and the spec lead for JSR-282 (RTSJ 1.1.). TimeSys also has an embedded development environment based on Eclipse that should probably be integrated with SystemTap.

### Waterloo University
**David Taylor / University of Waterloo** He is a Professor at the University of Waterloo and Director of the Computer Communication Networks Group. He specializes on techniques and tools for debugging distributed applications, techniques for displaying execution histories of distributed applications and for applying abstraction to large histories so that currently irrelevant detail can be suppressed and relevant features more easily seen.

### WindRiver
**Andrew McDermott / WindRiver** Senior member of technical staff working on OS visualization tools. He is the technical lead for System Viewer -- a software based logic analyzer -- which visualizes trace data from VxWorks and Linux (using LTT/LTTng). He is also the architect for the event database (SQLite), which is used by other analysis and run-time visualization tools that are part of Wind River Workbench.

**Felix Burton / WindRiver** CTO Office Has been actively engaged in the embedded industry since 1980 when he started as an engineer at Diab. Significant experience architecting and developing embedded systems, operating systems, compilers, debuggers and analysis tools.

### ZealCore
**Henrik Thane / ZealCore** He is a professor at Malardalen Real-Time Research Centre at Malardalen University. He specializes in monitoring and debugging of multi-tasking and multi-pro/core real-time systems, especially replay based debugging but also abstraction, reverse engineering and visualization of recorded data for debugging purposes. However, currently he spends most of the time in the Industry. He is the Market Development manager of ZealCore Embedded Solutions.


## Special Event, Monday January 28
Dinner at the restaurant [Chez Lévêque](https://www.chezleveque.ca/) [1030, Laurier West](https://maps.google.com/maps?f=q&hl=en&geocode=&time=&date=&ttype=&q=1030,+Laurier+West,+Outremont,+QC&sll=37.0625,-95.677068&sspn=26.47812  2,58.710937&ie=UTF8&ll=45.512121,-73.598185&spn=0.045591,0.142822&z=14&iwloc=addr&om=1) (at corner of Hutchison).

A taxi is the best way to get to the restaurant. For people arriving directly from the airport, a place not accessible to other customer will be available to store luggage.

**17h00 – 19h00** Arrival, meet workshop participants, a welcoming drink will be provided 19h00 Dinner, French cuisine “Menu Dégustation”

## Location
Ericsson Canada [8400 Décarie Blvd., Town of Mount-Royal, Québec, H4P 2N2, Canada](https://maps.google.com/maps?f=q&hl=en&geocode=&time=&date=&ttype=&q=8400+Decarie+Blvd.,+Town+of+Mount-Royal,+QC,+CANADA&sll=45.496945,-73.65659&sspn=0.011401,0.028667&ie=UTF8  &ll=45.482642,-73.705559&spn=0.076185,0.195351&z=13&om=1) Phone: +1 514 738 8300
