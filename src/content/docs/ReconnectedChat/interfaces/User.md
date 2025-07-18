---
editUrl: false
next: false
prev: false
title: "User"
---

Defined in: [src/types/User.ts:1](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/User.ts#L1)

## Properties

### afk?

> `optional` **afk**: `boolean`

Defined in: [src/types/User.ts:39](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/User.ts#L39)

Whether the player is currently AFK.

***

### alt

> **alt**: `boolean`

Defined in: [src/types/User.ts:42](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/User.ts#L42)

Whether the player is an alt account.

***

### bot

> **bot**: `boolean`

Defined in: [src/types/User.ts:45](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/User.ts#L45)

Whether the player is a bot account.

***

### displayName

> **displayName**: `string`

Defined in: [src/types/User.ts:33](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/User.ts#L33)

The player's name as it appears in chat. May differ from `name`.

***

### group

> **group**: `string`

Defined in: [src/types/User.ts:7](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/User.ts#L7)

The rank of the player. Usually `default`, `moderator`, or `admin`, but 
the server may send anything.

***

### name

> **name**: `string`

Defined in: [src/types/User.ts:36](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/User.ts#L36)

The player's Minecraft username.

***

### pronouns

> **pronouns**: `null` \| `string`

Defined in: [src/types/User.ts:17](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/User.ts#L17)

The [pronouns](https://docs.reconnected.cc/faq/pronouns.html) set by the user by running `/pronouns`. This may be `null`
if the player has not set any preferred pronouns. Where reasonably possible, you should attempt to use the user's
preferred pronouns, or avoid using pronouns entirely. If you are unable to do this, you should use the player's
name instead.

#### Example

```ts
"she/her"
```

***

### supporter

> **supporter**: `number`

Defined in: [src/types/User.ts:52](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/User.ts#L52)

The current public tier of the player's supporter status. This will be `0` if the player is not a supporter or
has opted out of showing their supporter tag, `1` for a Tier 1 supporter, `2` for a Tier 2 supporter, and `3` for
a Tier 3 supporter.

***

### type

> **type**: `"ingame"`

Defined in: [src/types/User.ts:3](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/User.ts#L3)

The type of user. For in-game events, this is always `ingame`.

***

### uuid

> **uuid**: `string`

Defined in: [src/types/User.ts:30](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/User.ts#L30)

The UUID of the player, including hyphens.

***

### world

> **world**: `null` \| `string`

Defined in: [src/types/User.ts:27](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/User.ts#L27)

The world the player is in, or `null` if this information is not 
available. It will be a Minecraft namespaced registry key, for example:

- `minecraft:overworld` - The overworld
- `minecraft:the_nether` - The Nether
- `minecraft:the_end` - The End
