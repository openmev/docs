---
title: Latency Benchmarking
---

## Latency Benchmarking

### Why is "ping time to CommodityStream" (or packet drop rate) not a good measure of the performance of CommodityStream services?

CommodityStream optimizes the content delivery path to users based on a number of metrics, including observed network path latency and quality of experience for the end user.

CommodityStream does not recommend using ping time to rpc.securerpc.com (or any other CommodityStream service, including OpenMEV RPC Gateaway) as a measure of the actual performance of CommodityStream services for the following reasons:

CommodityStream services, are not designed as ICMP network testing services

-   Rate limiting ICMP in general
-   ICMP ping or traceroute traffic can be discarded or delayed en-route to CommodityStream
-   The termination point of the TCP/UDP session with CommodityStream may not represent the full network path between a user and the service
-   User requests may be served from locations other than the destination of the initial IP termination point

Additionally, even a complete lack of response to ICMP traffic may not reflect any sort of issue with CommodityStream service performance.

### What is the content delivery path that CommodityStream optimizes?

CommodityStream is interested in the entire latency between the end-user node and the part of our infrastructure serving the traffic.

This will include segments of CommodityStream’s internal network beyond where the session is terminated. It might also include network paths that are closer to the user than the initial session termination point.

Individual RPC requests or responses may have content served from a number of different parts of CommodityStream’s serving infrastructure.

### Will CommodityStream offer validator nodes in all countries and regions?

We face certain legal limitations to providing validator nodes in some countries, Generally, if a network operator or ISP meets our policies and operates in a country where we don’t face restrictions, we can deploy validator nodes.
