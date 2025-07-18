---
editUrl: false
next: false
prev: false
title: "IngameChatMessage"
---

Defined in: [src/events/IngameChatMessage.ts:5](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/IngameChatMessage.ts#L5)

The event received when a player posts a message in public chat.

## Extends

- [`BaseEvent`](/reconnectedchat/interfaces/baseevent/)

## Properties

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

Defined in: [src/events/IngameChatMessage.ts:10](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/IngameChatMessage.ts#L10)

The message contents, with its original formatting codes.

***

### renderedText

> **renderedText**: [`RenderedTextObject`](/reconnectedchat/interfaces/renderedtextobject/)

Defined in: [src/events/IngameChatMessage.ts:13](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/IngameChatMessage.ts#L13)

The message contents, serialised with formatting as Minecraft JSON text.

***

### text

> **text**: `string`

Defined in: [src/events/IngameChatMessage.ts:7](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/IngameChatMessage.ts#L7)

The message contents, without formatting codes.

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

***

### user

> **user**: [`User`](/reconnectedchat/interfaces/user/)

Defined in: [src/events/IngameChatMessage.ts:16](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/IngameChatMessage.ts#L16)

The in-game player who sent the message.
