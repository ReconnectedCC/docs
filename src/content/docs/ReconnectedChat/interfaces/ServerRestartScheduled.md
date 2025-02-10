---
editUrl: false
next: false
prev: false
title: "ServerRestartScheduled"
---

Defined in: src/events/ServerRestartScheduled.ts:3

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

### restartAt

> **restartAt**: `Date`

Defined in: src/events/ServerRestartScheduled.ts:11

The time that the server will restart.

***

### restartSeconds

> **restartSeconds**: `number`

Defined in: src/events/ServerRestartScheduled.ts:8

The number of seconds specified until the server restart.

***

### restartType

> **restartType**: `"automatic"` \| `"manual"`

Defined in: src/events/ServerRestartScheduled.ts:5

The type of restart. Will be `automatic` or `manual`.

***

### time

> **time**: `Date`

Defined in: src/events/ServerRestartScheduled.ts:14

The time that this restart was scheduled.

#### Overrides

[`BaseEvent`](/ReconnectedChat/interfaces/baseevent/).[`time`](/ReconnectedChat/interfaces/baseevent/#time)

***

### type

> **type**: `string`

Defined in: src/packets/Data.ts:3

#### Inherited from

[`BaseEvent`](/ReconnectedChat/interfaces/baseevent/).[`type`](/ReconnectedChat/interfaces/baseevent/#type)
