---
title: Latency Benchmarking
description: Latency Benchmarking and FAQ
version: 2022.06
---

## Latency Benchmarking

Why is "ping time to SecureRPC" (or packet drop rate) not a good measure of the performance of SecureRPC services?

SecureRPC optimizes the content delivery path to users based on a number of metrics, including observed network path latency and quality of experience for the end user.

SecureRPC does not recommend using ping time to `api.securerpc.com` (or any other SecureRPC service, including OpenMEV RPC Gateaway) as a measure of the actual performance of SecureRPC services for the following reasons:

- SecureRPC services, are not designed as ICMP network testing services
- Many networks, including SecureRPC, rate limit ICMP
- ICMP ping or traceroute traffic can be discarded or delayed en-route to SecureRPC
- The termination point of the TCP/UDP session with SecureRPC may not represent the full network path between a user and the service
- User requests may be served from locations other than the destination of the initial IP termination point
- Even a complete lack of response to ICMP traffic may not reflect any sort of issue with SecureRPC service performance.

#### What is the content delivery path that SecureRPC optimizes?

SecureRPC is interested in the entire latency between the end-user node and the part of our infrastructure serving the traffic.

This will include segments of SecureRPC’s internal network beyond where the session is terminated. It might also include network paths that are closer to the user than the initial session termination point.

Individual RPC requests or responses may have content served from a number of different parts of SecureRPC’s serving infrastructure.

#### Will SecureRPC offer validator nodes in all countries and regions?

We face certain legal limitations to providing validator nodes in some countries, Generally, if a network operator or ISP meets our policies and operates in a country where we don’t face restrictions, we can deploy validator nodes.

### Referenes
 - RFC2622, “Routing Policy Specification Language (RPSL)”: Describes the basic RPSL object syntax RFC4012 

- “Routing Policy Specification Language next generation (RPSLng)”: Describes useful additions to the RPSL language such as IPv6 route6 objects RFC2650 

- “Using RPSL in Practice”: A tutorial on generating RPSL objects, much like this article RFC7682 

- “Considerations for Internet Routing Registries (IRRs) and Routing Policy Configuration: Some of the problems and lessons learned about the IRR system
