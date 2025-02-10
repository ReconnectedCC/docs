---
editUrl: false
next: false
prev: false
title: "RequestError"
---

Defined in: [src/packets/RequestError.ts:8](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/packets/RequestError.ts#L8)

Sent by the server when an error occurs.

## See

https://docs.reconnected.cc/chatbox/websocket.html#error-packet

## Extends

- [`Data`](/ReconnectedChat/interfaces/data/)

## Properties

### error

> **error**: `string`

Defined in: [src/packets/RequestError.ts:12](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/packets/RequestError.ts#L12)

The type of error that occurred.

***

### id

> **id**: `undefined` \| `number`

Defined in: [src/packets/RequestError.ts:9](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/packets/RequestError.ts#L9)

***

### message

> **message**: `string`

Defined in: [src/packets/RequestError.ts:15](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/packets/RequestError.ts#L15)

A human-readable message describing the error.

***

### ok

> **ok**: `boolean`

Defined in: [src/packets/Data.ts:2](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/packets/Data.ts#L2)

#### Inherited from

[`Data`](/ReconnectedChat/interfaces/data/).[`ok`](/ReconnectedChat/interfaces/data/#ok)

***

### type

> **type**: `string`

Defined in: [src/packets/Data.ts:3](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/packets/Data.ts#L3)

#### Inherited from

[`Data`](/ReconnectedChat/interfaces/data/).[`type`](/ReconnectedChat/interfaces/data/#type)
