---
template: BlogPost
path: /introduction_to_grpc
date: 2020-04-14T22:06:53.265Z
title: Introduction to gRPC
thumbnail: /assets/billy-huynh-W8KTS-mhFUE-unsplash.jpg
metaDescription: ""
---
# What is gRPC ?

In gRPC, a client application can directly call a method on a server application on a different machine as if it were a local object, making it easier for you to create distributed applications and services. As in many RPC systems, gRPC is based around the idea of defining a service, specifying the methods that can be called remotely with their parameters and return types. On the server side, the server implements this interface and runs a gRPC server to handle client calls. On the client side, the client has a stub (referred to as just a client in some languages) that provides the same methods as the server.    

![Concept Diagram](https://grpc.io/img/landing-2.svg)

gRPC clients and servers can run and talk to each other in a variety of environments - from servers inside Google to your own desktop - and can be written in any of gRPC’s supported languages. So, for example, you can easily create a gRPC server in Java with clients in Go, Python, or Ruby. In addition, the latest Google APIs will have gRPC versions of their interfaces, letting you easily build Google functionality into your applications.