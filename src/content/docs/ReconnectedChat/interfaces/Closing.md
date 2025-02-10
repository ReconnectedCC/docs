---
editUrl: false
next: false
prev: false
title: "Closing"
---

Defined in: src/packets/Closing.ts:8

When your websocket connection is being closed by the server, you may receive a Closing packet.

## See

https://docs.reconnected.cc/chatbox/websocket.html#closing-packet

## Extends

- [`Data`](/ReconnectedChat/interfaces/data/)

## Properties

### closeReason

> **closeReason**: `string`

Defined in: src/packets/Closing.ts:10

The reason your connection is being closed.

***

### ok

> **ok**: `boolean`

Defined in: src/packets/Data.ts:2

#### Inherited from

[`Data`](/ReconnectedChat/interfaces/data/).[`ok`](/ReconnectedChat/interfaces/data/#ok)

***

### reason

> **reason**: `string`

Defined in: src/packets/Closing.ts:13

A human-readable message describing the close reason.

***

### type

> **type**: `string`

Defined in: src/packets/Data.ts:3

#### Inherited from

[`Data`](/ReconnectedChat/interfaces/data/).[`type`](/ReconnectedChat/interfaces/data/#type)
