---
editUrl: false
next: false
prev: false
title: "WorldChange"
---

Defined in: src/events/WorldChange.ts:5

The event received when a player changes worlds.

## Extends

- [`BaseEvent`](/ReconnectedChat/interfaces/baseevent/)

## Properties

### destination

> **destination**: `string`

Defined in: src/events/WorldChange.ts:25

The world the player is now in. It will be a Minecraft namespaced registry key, for example:

- `minecraft:overworld` - The overworld
- `minecraft:the_nether` - The Nether
- `minecraft:the_end` - The End

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

### origin

> **origin**: `string`

Defined in: src/events/WorldChange.ts:16

The world the player has moved from. It will be a Minecraft namespaced registry key, for example:

- `minecraft:overworld` - The overworld
- `minecraft:the_nether` - The Nether
- `minecraft:the_end` - The End

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

Defined in: src/events/WorldChange.ts:7

The in-game player who changed worlds.
