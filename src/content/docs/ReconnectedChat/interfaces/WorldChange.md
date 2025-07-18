---
editUrl: false
next: false
prev: false
title: "WorldChange"
---

Defined in: [src/events/WorldChange.ts:5](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/WorldChange.ts#L5)

The event received when a player changes worlds.

## Extends

- [`BaseEvent`](/reconnectedchat/interfaces/baseevent/)

## Properties

### destination

> **destination**: `string`

Defined in: [src/events/WorldChange.ts:25](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/WorldChange.ts#L25)

The world the player is now in. It will be a Minecraft namespaced registry key, for example:

- `minecraft:overworld` - The overworld
- `minecraft:the_nether` - The Nether
- `minecraft:the_end` - The End

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

### origin

> **origin**: `string`

Defined in: [src/events/WorldChange.ts:16](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/WorldChange.ts#L16)

The world the player has moved from. It will be a Minecraft namespaced registry key, for example:

- `minecraft:overworld` - The overworld
- `minecraft:the_nether` - The Nether
- `minecraft:the_end` - The End

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

Defined in: [src/events/WorldChange.ts:7](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/WorldChange.ts#L7)

The in-game player who changed worlds.
