---
editUrl: false
next: false
prev: false
title: "DiscordUser"
---

Defined in: src/types/DiscordUser.ts:1

## Properties

### avatar

> **avatar**: `string`

Defined in: src/types/DiscordUser.ts:19

URL to the user's avatar on Discord.

***

### discriminator

> **discriminator**: `string`

Defined in: src/types/DiscordUser.ts:16

The user's discriminator on Discord.

***

### displayName

> **displayName**: `string`

Defined in: src/types/DiscordUser.ts:13

The user's server nickname on Discord, or their username if it is not
set.

***

### id

> **id**: `string`

Defined in: src/types/DiscordUser.ts:6

The user's Discord snowflake (ID).

***

### name

> **name**: `string`

Defined in: src/types/DiscordUser.ts:9

The user's username on Discord.

***

### roles

> **roles**: [`DiscordRole`](/ReconnectedChat/interfaces/discordrole/)[]

Defined in: src/types/DiscordUser.ts:22

Array of roles the user has on Discord.

***

### type

> **type**: `"discord"`

Defined in: src/types/DiscordUser.ts:3

The type of user. For Discord events, this is always `discord`.
