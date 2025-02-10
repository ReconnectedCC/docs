---
editUrl: false
next: false
prev: false
title: "DiscordChatMessage"
---

Defined in: src/events/DiscordChatMessage.ts:5

The event received when a player posts a message in Discord.

## Extends

- [`BaseEvent`](/ReconnectedChat/interfaces/baseevent/)

## Properties

### discordId

> **discordId**: `string`

Defined in: src/events/DiscordChatMessage.ts:16

The Discord snowflake ID of this message.

***

### discordUser

> **discordUser**: [`DiscordUser`](/ReconnectedChat/interfaces/discorduser/)

Defined in: src/events/DiscordChatMessage.ts:19

The Discord user who sent the message.

***

### edited

> **edited**: `boolean`

Defined in: src/events/DiscordChatMessage.ts:22

`true` if this event represents an edit to the original message.

***

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

Defined in: src/events/DiscordChatMessage.ts:10

The message contents, with its original Markdown formatting codes.

***

### renderedText

> **renderedText**: [`RenderedTextObject`](/ReconnectedChat/interfaces/renderedtextobject/)

Defined in: src/events/DiscordChatMessage.ts:13

The message contents, serialised with formatting as Minecraft JSON text.

***

### text

> **text**: `string`

Defined in: src/events/DiscordChatMessage.ts:7

The message contents, without Markdown formatting codes.

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
