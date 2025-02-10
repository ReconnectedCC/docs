---
editUrl: false
next: false
prev: false
title: "IngameChatMessage"
---

Defined in: src/events/IngameChatMessage.ts:5

The event received when a player posts a message in public chat.

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

### ok

> **ok**: `boolean`

Defined in: src/packets/Data.ts:2

#### Inherited from

[`BaseEvent`](/ReconnectedChat/interfaces/baseevent/).[`ok`](/ReconnectedChat/interfaces/baseevent/#ok)

***

### rawText

> **rawText**: `string`

Defined in: src/events/IngameChatMessage.ts:10

The message contents, with its original formatting codes.

***

### renderedText

> **renderedText**: [`RenderedTextObject`](/ReconnectedChat/interfaces/renderedtextobject/)

Defined in: src/events/IngameChatMessage.ts:13

The message contents, serialised with formatting as Minecraft JSON text.

***

### text

> **text**: `string`

Defined in: src/events/IngameChatMessage.ts:7

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

Defined in: src/events/IngameChatMessage.ts:16

The in-game player who sent the message.
