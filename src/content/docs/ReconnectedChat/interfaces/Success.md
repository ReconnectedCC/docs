---
editUrl: false
next: false
prev: false
title: "Success"
---

Defined in: src/packets/Success.ts:4

Sent by the server when a message is sent or queued successfully.

## Extends

- [`Data`](/ReconnectedChat/interfaces/data/)

## Properties

### id

> **id**: `number`

Defined in: src/packets/Success.ts:5

***

### ok

> **ok**: `boolean`

Defined in: src/packets/Data.ts:2

#### Inherited from

[`Data`](/ReconnectedChat/interfaces/data/).[`ok`](/ReconnectedChat/interfaces/data/#ok)

***

### reason

> **reason**: `string`

Defined in: src/packets/Success.ts:9

More information about the success. When sending messages, this may be
`message_sent` or `message_queued`.

***

### type

> **type**: `string`

Defined in: src/packets/Data.ts:3

#### Inherited from

[`Data`](/ReconnectedChat/interfaces/data/).[`type`](/ReconnectedChat/interfaces/data/#type)
