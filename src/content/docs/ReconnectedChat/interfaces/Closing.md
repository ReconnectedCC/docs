---
editUrl: false
next: false
prev: false
title: "Closing"
---

Defined in: [src/packets/Closing.ts:8](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/packets/Closing.ts#L8)

When your websocket connection is being closed by the server, you may receive a Closing packet.

## See

https://docs.reconnected.cc/chatbox/websocket.html#closing-packet

## Extends

- [`Data`](/reconnectedchat/interfaces/data/)

## Properties

### closeReason

> **closeReason**: `string`

Defined in: [src/packets/Closing.ts:10](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/packets/Closing.ts#L10)

The reason your connection is being closed.

***

### ok

> **ok**: `boolean`

Defined in: [src/packets/Data.ts:2](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/packets/Data.ts#L2)

#### Inherited from

[`Data`](/reconnectedchat/interfaces/data/).[`ok`](/reconnectedchat/interfaces/data/#ok)

***

### reason

> **reason**: `string`

Defined in: [src/packets/Closing.ts:13](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/packets/Closing.ts#L13)

A human-readable message describing the close reason.

***

### type

> **type**: `string`

Defined in: [src/packets/Data.ts:3](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/packets/Data.ts#L3)

#### Inherited from

[`Data`](/reconnectedchat/interfaces/data/).[`type`](/reconnectedchat/interfaces/data/#type)
