---
editUrl: false
next: false
prev: false
title: "DiscordChatMessage"
---

Defined in: [src/events/DiscordChatMessage.ts:5](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/DiscordChatMessage.ts#L5)

The event received when a player posts a message in Discord.

## Extends

- [`BaseEvent`](/reconnectedchat/interfaces/baseevent/)

## Properties

### discordId

> **discordId**: `string`

Defined in: [src/events/DiscordChatMessage.ts:16](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/DiscordChatMessage.ts#L16)

The Discord snowflake ID of this message.

***

### discordUser

> **discordUser**: [`DiscordUser`](/reconnectedchat/interfaces/discorduser/)

Defined in: [src/events/DiscordChatMessage.ts:19](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/DiscordChatMessage.ts#L19)

The Discord user who sent the message.

***

### edited

> **edited**: `boolean`

Defined in: [src/events/DiscordChatMessage.ts:22](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/DiscordChatMessage.ts#L22)

`true` if this event represents an edit to the original message.

***

### event

> **event**: `string`

Defined in: [src/events/BaseEvent.ts:5](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/BaseEvent.ts#L5)

#### Inherited from

[`BaseEvent`](/reconnectedchat/interfaces/baseevent/).[`event`](/reconnectedchat/interfaces/baseevent/#event)

***

### id

> **id**: `number`

Defined in: [src/events/BaseEvent.ts:4](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/BaseEvent.ts#L4)

#### Inherited from

[`BaseEvent`](/reconnectedchat/interfaces/baseevent/).[`id`](/reconnectedchat/interfaces/baseevent/#id)

***

### ok

> **ok**: `boolean`

Defined in: [src/packets/Data.ts:2](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/packets/Data.ts#L2)

#### Inherited from

[`BaseEvent`](/reconnectedchat/interfaces/baseevent/).[`ok`](/reconnectedchat/interfaces/baseevent/#ok)

***

### rawText

> **rawText**: `string`

Defined in: [src/events/DiscordChatMessage.ts:10](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/DiscordChatMessage.ts#L10)

The message contents, with its original Markdown formatting codes.

***

### renderedText

> **renderedText**: [`RenderedTextObject`](/reconnectedchat/interfaces/renderedtextobject/)

Defined in: [src/events/DiscordChatMessage.ts:13](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/DiscordChatMessage.ts#L13)

The message contents, serialised with formatting as Minecraft JSON text.

***

### text

> **text**: `string`

Defined in: [src/events/DiscordChatMessage.ts:7](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/DiscordChatMessage.ts#L7)

The message contents, without Markdown formatting codes.

***

### time

> **time**: `Date`

Defined in: [src/events/BaseEvent.ts:6](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/BaseEvent.ts#L6)

#### Inherited from

[`BaseEvent`](/reconnectedchat/interfaces/baseevent/).[`time`](/reconnectedchat/interfaces/baseevent/#time)

***

### type

> **type**: `string`

Defined in: [src/packets/Data.ts:3](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/packets/Data.ts#L3)

#### Inherited from

[`BaseEvent`](/reconnectedchat/interfaces/baseevent/).[`type`](/reconnectedchat/interfaces/baseevent/#type)
