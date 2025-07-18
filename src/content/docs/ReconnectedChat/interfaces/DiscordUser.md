---
editUrl: false
next: false
prev: false
title: "DiscordUser"
---

Defined in: [src/types/DiscordUser.ts:1](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/DiscordUser.ts#L1)

## Properties

### avatar

> **avatar**: `string`

Defined in: [src/types/DiscordUser.ts:19](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/DiscordUser.ts#L19)

URL to the user's avatar on Discord.

***

### discriminator

> **discriminator**: `string`

Defined in: [src/types/DiscordUser.ts:16](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/DiscordUser.ts#L16)

The user's discriminator on Discord.

***

### displayName

> **displayName**: `string`

Defined in: [src/types/DiscordUser.ts:13](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/DiscordUser.ts#L13)

The user's server nickname on Discord, or their username if it is not
set.

***

### id

> **id**: `string`

Defined in: [src/types/DiscordUser.ts:6](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/DiscordUser.ts#L6)

The user's Discord snowflake (ID).

***

### name

> **name**: `string`

Defined in: [src/types/DiscordUser.ts:9](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/DiscordUser.ts#L9)

The user's username on Discord.

***

### roles

> **roles**: [`DiscordRole`](/reconnectedchat/interfaces/discordrole/)[]

Defined in: [src/types/DiscordUser.ts:22](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/DiscordUser.ts#L22)

Array of roles the user has on Discord.

***

### type

> **type**: `"discord"`

Defined in: [src/types/DiscordUser.ts:3](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/DiscordUser.ts#L3)

The type of user. For Discord events, this is always `discord`.
