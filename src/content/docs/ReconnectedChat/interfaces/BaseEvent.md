---
editUrl: false
next: false
prev: false
title: "BaseEvent"
---

Defined in: [src/events/BaseEvent.ts:3](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/BaseEvent.ts#L3)

## Extends

- [`Data`](/ReconnectedChat/interfaces/data/)

## Extended by

- [`AFK`](/ReconnectedChat/interfaces/afk/)
- [`AFKReturn`](/ReconnectedChat/interfaces/afkreturn/)
- [`ChatboxChatMessage`](/ReconnectedChat/interfaces/chatboxchatmessage/)
- [`ChatboxCommand`](/ReconnectedChat/interfaces/chatboxcommand/)
- [`Death`](/ReconnectedChat/interfaces/death/)
- [`WorldChange`](/ReconnectedChat/interfaces/worldchange/)
- [`DiscordChatMessage`](/ReconnectedChat/interfaces/discordchatmessage/)
- [`IngameChatMessage`](/ReconnectedChat/interfaces/ingamechatmessage/)
- [`Join`](/ReconnectedChat/interfaces/join/)
- [`Leave`](/ReconnectedChat/interfaces/leave/)
- [`ServerRestartCancelled`](/ReconnectedChat/interfaces/serverrestartcancelled/)
- [`ServerRestartScheduled`](/ReconnectedChat/interfaces/serverrestartscheduled/)

## Properties

### event

> **event**: `string`

Defined in: [src/events/BaseEvent.ts:5](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/BaseEvent.ts#L5)

***

### id

> **id**: `number`

Defined in: [src/events/BaseEvent.ts:4](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/BaseEvent.ts#L4)

***

### ok

> **ok**: `boolean`

Defined in: [src/packets/Data.ts:2](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/packets/Data.ts#L2)

#### Inherited from

[`Data`](/ReconnectedChat/interfaces/data/).[`ok`](/ReconnectedChat/interfaces/data/#ok)

***

### time

> **time**: `Date`

Defined in: [src/events/BaseEvent.ts:6](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/BaseEvent.ts#L6)

***

### type

> **type**: `string`

Defined in: [src/packets/Data.ts:3](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/packets/Data.ts#L3)

#### Inherited from

[`Data`](/ReconnectedChat/interfaces/data/).[`type`](/ReconnectedChat/interfaces/data/#type)
