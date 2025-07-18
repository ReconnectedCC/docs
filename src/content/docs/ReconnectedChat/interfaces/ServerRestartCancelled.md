---
editUrl: false
next: false
prev: false
title: "ServerRestartCancelled"
---

Defined in: [src/events/ServerRestartCancelled.ts:3](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/ServerRestartCancelled.ts#L3)

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

### restartType

> **restartType**: `"automatic"` \| `"manual"`

Defined in: [src/events/ServerRestartCancelled.ts:5](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/ServerRestartCancelled.ts#L5)

The type of restart. Will be `automatic` or `manual`.

***

### time

> **time**: `Date`

Defined in: [src/events/ServerRestartCancelled.ts:8](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/ServerRestartCancelled.ts#L8)

The time that this restart was cancelled.

#### Overrides

[`BaseEvent`](/reconnectedchat/interfaces/baseevent/).[`time`](/reconnectedchat/interfaces/baseevent/#time)

***

### type

> **type**: `string`

Defined in: [src/packets/Data.ts:3](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/packets/Data.ts#L3)

#### Inherited from

[`BaseEvent`](/reconnectedchat/interfaces/baseevent/).[`type`](/reconnectedchat/interfaces/baseevent/#type)
