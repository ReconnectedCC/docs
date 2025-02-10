---
editUrl: false
next: false
prev: false
title: "ChatboxCommand"
---

Defined in: src/events/ChatboxCommand.ts:6

The event received when a player runs a chatbox command (public backslash commands: `\command`, private owner-only 
caret/pipe commands: `^command`) in-game. The `command` capability is required to receive command events.

## Extends

- [`BaseEvent`](/ReconnectedChat/interfaces/baseevent/)

## Properties

### args

> **args**: `string`[]

Defined in: src/events/ChatboxCommand.ts:15

Array of space-separated string arguments after the command.

***

### command

> **command**: `string`

Defined in: src/events/ChatboxCommand.ts:12

The name of the command (the word immediately following the backslash/caret/pipe, excluding the 
backslash/caret/pipe).

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

### ownerOnly

> **ownerOnly**: `boolean`

Defined in: src/events/ChatboxCommand.ts:18

`true` if the command is an owner-only command (`^command`).

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

Defined in: src/events/ChatboxCommand.ts:8

The in-game player who ran the command.
