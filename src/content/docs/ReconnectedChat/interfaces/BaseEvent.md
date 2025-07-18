---
editUrl: false
next: false
prev: false
title: "BaseEvent"
---

Defined in: [src/events/BaseEvent.ts:3](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/BaseEvent.ts#L3)

## Extends

- [`Data`](/reconnectedchat/interfaces/data/)

## Extended by

- [`AFK`](/reconnectedchat/interfaces/afk/)
- [`AFKReturn`](/reconnectedchat/interfaces/afkreturn/)
- [`ChatboxChatMessage`](/reconnectedchat/interfaces/chatboxchatmessage/)
- [`ChatboxCommand`](/reconnectedchat/interfaces/chatboxcommand/)
- [`Death`](/reconnectedchat/interfaces/death/)
- [`WorldChange`](/reconnectedchat/interfaces/worldchange/)
- [`DiscordChatMessage`](/reconnectedchat/interfaces/discordchatmessage/)
- [`IngameChatMessage`](/reconnectedchat/interfaces/ingamechatmessage/)
- [`Join`](/reconnectedchat/interfaces/join/)
- [`Leave`](/reconnectedchat/interfaces/leave/)
- [`ServerRestartCancelled`](/reconnectedchat/interfaces/serverrestartcancelled/)
- [`ServerRestartScheduled`](/reconnectedchat/interfaces/serverrestartscheduled/)

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

[`Data`](/reconnectedchat/interfaces/data/).[`ok`](/reconnectedchat/interfaces/data/#ok)

***

### time

> **time**: `Date`

Defined in: [src/events/BaseEvent.ts:6](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/events/BaseEvent.ts#L6)

***

### type

> **type**: `string`

Defined in: [src/packets/Data.ts:3](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/packets/Data.ts#L3)

#### Inherited from

[`Data`](/reconnectedchat/interfaces/data/).[`type`](/reconnectedchat/interfaces/data/#type)
