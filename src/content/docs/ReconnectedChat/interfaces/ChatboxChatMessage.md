---
editUrl: false
next: false
prev: false
title: "ChatboxChatMessage"
---

Defined in: src/events/ChatboxChatMessage.ts:5

The event received when another chatbox sends a message.

## Extends

- [`BaseEvent`](/ReconnectedChat/interfaces/baseevent/)

## Properties

### event

> **event**: `string`

Defined in: src/events/BaseEvent.ts:5

#### Inherited from

[`BaseEvent`](/ReconnectedChat/interfaces/baseevent/).[`event`](/ReconnectedChat/interfaces/baseevent/#event)

***

### id

> **id**: `number`

Defined in: src/events/BaseEvent.ts:4

#### Inherited from

[`BaseEvent`](/ReconnectedChat/interfaces/baseevent/).[`id`](/ReconnectedChat/interfaces/baseevent/#id)

***

### name

> **name**: `string`

Defined in: src/events/ChatboxChatMessage.ts:19

The name of the chatbox, without formatting codes.

***

### ok

> **ok**: `boolean`

Defined in: src/packets/Data.ts:2

#### Inherited from

[`BaseEvent`](/ReconnectedChat/interfaces/baseevent/).[`ok`](/ReconnectedChat/interfaces/baseevent/#ok)

***

### rawName

> **rawName**: `string`

Defined in: src/events/ChatboxChatMessage.ts:22

The name of the chatbox, with its original formatting codes.

***

### rawText

> **rawText**: `string`

Defined in: src/events/ChatboxChatMessage.ts:10

The message contents, with its original formatting codes.

***

### renderedText

> **renderedText**: [`RenderedTextObject`](/ReconnectedChat/interfaces/renderedtextobject/)

Defined in: src/events/ChatboxChatMessage.ts:13

The message contents, serialised with formatting as Minecraft JSON text.

***

### text

> **text**: `string`

Defined in: src/events/ChatboxChatMessage.ts:7

The message contents, without formatting codes.

***

### time

> **time**: `Date`

Defined in: src/events/BaseEvent.ts:6

#### Inherited from

[`BaseEvent`](/ReconnectedChat/interfaces/baseevent/).[`time`](/ReconnectedChat/interfaces/baseevent/#time)

***

### type

> **type**: `string`

Defined in: src/packets/Data.ts:3

#### Inherited from

[`BaseEvent`](/ReconnectedChat/interfaces/baseevent/).[`type`](/ReconnectedChat/interfaces/baseevent/#type)

***

### user

> **user**: [`User`](/ReconnectedChat/interfaces/user/)

Defined in: src/events/ChatboxChatMessage.ts:16

The owner of the chatbox that sent the message.
