---
title: Websocket API
---

## Connection

You can access the chatbox API via websocket at `wss://chat.reconnected.cc/v2`. Add your license key onto the end,
e.g. `wss://chat.reconnected.cc/v2/5c80b08d-9c68-4df3-83b8-8a8008196934`, or use `wss://chat.reconnected.cc/v2/guest` to connect as a 
guest (only allowed in-game).

The API uses JSON for sending and receiving packets. Packet payloads will have a `type` property, and packets from
the server will additionally contain an `ok` property, to let you know if something was successful or not.

When sending chat messages to the server, you can specify an integer `id` property to uniquely identify your packet.
Then, when the message has been successfully sent, you will receive a [`success`](#success-packet) packet with the same
`id`.

<!--
## JavaScript/TypeScript API

AlexDevs has written a [JavaScript/TypeScript package](/chatbox/switchchat) to integrate with the Chatbox API.
-->

## Rate limits

Messages can be sent at most once per 0.5 seconds per license, with up to 5 messages queued at once. Any more than that,
and you will receive `"error": "rate_limited"`.

## Server-to-client packets

### Hello packet

When you connect to the socket successfully, you will receive a `hello` payload that looks like this:

```json
{
  "ok": true,
  "type": "hello",
  "guest": false,
  "licenseOwner": "Yemmel",
  "licenseOwnerUser": {
    "type": "ingame",
    "name": "Yemmel",
    "displayName": "Yemmel",
    "uuid": "07b382be-f2a8-4bf0-b9f5-c3a1b73c18c7",    
    /* ... the rest of the User Object */ 
  },
  "capabilities": ["tell", "read", "command", "say"]
}
```


### Players packet

If you have the `read` capability, you will also receive the `players` packet when you connect, and whenever somebody
joins or leaves. It will contain an array of [user objects](#user-object) as `players`:

```json
{
  "type": "players",
  "ok": true,
  "time": "2019-02-18T15:16:24Z",
  "players": [{
    "type": "ingame",
    "name": "Yemmel",
    "displayName": "Yemmel",
    "uuid": "07b382be-f2a8-4bf0-b9f5-c3a1b73c18c7",
    "group": "admin",
    "pronouns": "he/they",
    "world": "minecraft:overworld",
    "afk": false,
    "alt": false,
    "bot": false,
    "supporter": 0,
    "linkedUser": { /* ... */ }
  }]
}
```


### Event packet

When an [event](#events) occurs, and you have the `read` capability, you will receive an `event` packet. It will have an 
`event` parameter specifying which [type of event](#events) occurred. They may also contain a `user` object 
([User](#user-object)), `source` ([User](#user-object)), `text` (string), `rawText` (string), and 
`renderedText` ([raw JSON text](#raw-json-text-object)). 

The `user` property is a [User object](#user-object) for all in-game events. The `discordUser` property is a
[Discord user object](#discord-user-object) for Discord message events (`chat_discord`).

A full list of event types and the parameters they return can be found under [Events](#events).

#### Examples

Example of an `event` packet for the [`chat_ingame`](#in-game-chat-event) event:

```json
{
  "type": "event",
  "event": "chat_ingame",
  "ok": true,
  "time": "2019-02-21T00:33:32+01:00",
  "edited": false,
  "text": "Hello world",
  "rawText": "Hello **world**",
  "renderedText": { /* ...raw JSON text... */ },
  "user": {
    "type": "ingame",
    "name": "Yemmel",
    "displayName": "Yemmel",
    "uuid": "07b382be-f2a8-4bf0-b9f5-c3a1b73c18c7",
    "group": "admin",
    "pronouns": "he/they",
    "world": "minecraft:overworld",
    "afk": false,
    "alt": false,
    "bot": false,
    "supporter": 0,
    "linkedUser": { /* ... */ }
  }
}
```

Example of an `event` packet for a [`chat_discord`](#discord-chat-event) event:

```json
{
  "type": "event",
  "event": "chat_discord",
  "ok": true,
  "discordId": "693312311141597245", // The message snowflake ID
  "text": "test",
  "rawText": "test",
  "renderedText": { /* ...tellraw object... */ },
  "discordUser": {
    "type": "discord",
    "id": "478798120650670091",
    "name": "Lemmmy",
    "displayName": "Lemmmy",
    "discriminator": "8924",
    "roles": [{
      "id": "198138742333112320",
      "name": "Administrator",
      "colour": 15158332
    }],
    "linkedUser": { /* ... */ }
  },
  "time": "2020-03-28T05:15:36+01:00",
  "edited": false,
  "id": -1
}
```

Example of an `event` packet for the [`death`](#death-event) event:

```json
{
  "type": "event",
  "ok": true,
  "time": "2020-03-28T04:13:20+01:00",
  "event": "death",
  "text": "Yemmel died",
  "renderedText": { /* ...raw JSON text... */ },
  "user": {
    "type": "ingame",
    "name": "Yemmel",
    "displayName": "Yemmel",
    "uuid": "07b382be-f2a8-4bf0-b9f5-c3a1b73c18c7",
    "group": "admin",
    "pronouns": "he/they",
    "world": "minecraft:overworld",
    "afk": false,
    "alt": false,
    "bot": false,
    "supporter": 0,
    "linkedUser": { /* ... */ }
  },
  "source": { /* ...user object... */ },
}
```

### Success packet

When sending chat messages to the server, you can specify an integer `id` property to uniquely identify your packet.
Then, when the message has been successfully sent, you will receive a `success` packet with the same `id`.

If your message was sent immediately, the success reason will be `message_sent`. If you were rate limited and your
message was added to the queue, the success reason will be `message_queued`.

Example of a `success` packet:

```json
{
  "type": "success",
  "ok": true,
  "id": 1,
  "reason": "message_sent"
}
```

### Error packet

When an error occurs, you will receive an `error` payload containing:
- `ok` - `false`
- `type` - `error`
- `error` - The type of error that occurred.
- `message` - A human-readable message describing the error.

Possible errors that you may receive:

| Error                | Message                                                                                        |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| `invalid_json`       | You have a syntax error in your JSON.                                                          |
| `not_connected`      | Your connection isn't ready yet - please wait for the 'hello' message before sending anything. |
| `missing_type`       | The 'type' argument is required.                                                               |
| `unknown_type`       | Unrecognised message type.                                                                     |
| `unknown_error`      | An unknown error occurred.                                                                     |
| `missing_capability` | You don't have the required capability to run this.                                            |
| `missing_text`       | The 'text' argument is required.                                                               |
| `missing_user`       | The 'user' argument is required.                                                               |
| `unknown_user`       | That user is not online.                                                                       |
| `rate_limited`       | You are sending too many messages, please slow down.                                           |
| `text_too_large`     | Your text is too large.                                                                        |
| `name_too_large`     | Your name is too large.                                                                        |


### Closing packet

When your websocket connection is being closed by the server, you may receive a `closing` packet with the following:
- `ok` - `false`
- `type` - `closing`
- `closeReason` - The reason your connection is being closed.
- `reason` - A human-readable message describing the close reason.

Possible errors that you may receive:

| Close reason                  | Message                                                           |
| ----------------------------- | ----------------------------------------------------------------- |
| `server_stopping`             | Server is restarting, please reconnect in a few minutes           |
| `external_guests_not_allowed` | External guests are not allowed                                   |
| `unknown_license_key`         | Unknown license key. Get one with /chatbox license register       |
| `invalid_license_key`         | Invalid license key. Get one with /chatbox license register       |
| `disabled_license`            | Your license has been disabled. Please contact a member of staff  |
| `changed_license_key`         | Your license key was invalidated                                  |
| `fatal_error`                 | A fatal error occurred.                                           |
| `unsupported_endpoint`        | Unsupported websocket endpoint. Supported endpoints: `/v2/:token` |


## Client-to-server packets

### Say packet

Sends a message to the in-game public chat.

#### Packet parameters

* `type` - `say`
* `text` - The message to send.
* `name` - (*optional*) The name of the chatbox to show. If no name is specified, it will default to the username of the 
  license owner.
* `mode` - (*optional*) The formatting mode to use. You can use these formatting modes:
  * `markdown` - (**default**) Discord-like [Markdown syntax](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-).
    Supports URLs, but not colours.
  * `format` - Minecraft-like [formatting codes](https://minecraft.wiki/w/Formatting_codes) using ampersands
    (e.g. `&e` for yellow). Supports colours, but not URLs.
  * `minimessage` - HTML-like [tags](https://docs.advntr.dev/minimessage/format.html)
    (e.g. `<yellow></yellow>` for yellow). Supports colours and hover events.
* `id` - (*optional*) Numeric ID to identify this message. If specified, the [`success`](#success-packet) response 
  packet will contain this ID so you can identify when this specific message has been sent.

Example of a `say` packet:

```json
{
  "type": "say",
  "name": "My Bot", // name of the chatbox, as it appears in the chat
  "text": "Hello, world!",
  "mode": "markdown" // "markdown" or "format"
}
```

### Tell packet

Sends a private message to an in-game player. The `user` parameter can be a player's username or a UUID. If the player
is not online in-game, you will receive the `unknown_user` error.

#### Packet parameters

* `type` - `tell`
* `user` - The username or UUID of the user to send the message to.
* `text` - The message to send.
* `name` - (*optional*) The name of the chatbox to show. If no name is specified, it will default to the username of the
  license owner.
* `mode` - (*optional*) The formatting mode to use. You can use these formatting modes:
  * `markdown` - (**default**) Discord-like [Markdown syntax](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-).
    Supports URLs, but not colours.
  * `format` - Minecraft-like [formatting codes](https://minecraft.wiki/w/Formatting_codes) using ampersands
    (e.g. `&e` for yellow). Supports colours, but not URLs.
  * `minimessage` - HTML-like [tags](https://docs.advntr.dev/minimessage/format.html)
    (e.g. `<yellow></yellow>` for yellow). Supports colours and hover events.
* `id` - (*optional*) Numeric ID to identify this message. If specified, the [`success`](#success-packet) response
  packet will contain this ID so you can identify when this specific message has been sent.

Example of a `tell` packet:

```json
{
  "type": "tell",
  "user": "Lemmmy",
  "name": "My Bot", // name of the chatbox, as it appears in the chat
  "text": "Hello, world!",
  "mode": "markdown" // "markdown" or "format"
}
```

## Events

Supported events:

* [`chat_ingame`](#in-game-chat-event) - A player sent a message in-game.
* [`chat_discord`](#discord-chat-event) - A player sent a message from [Discord](https://discord.com/invite/AfmU7qKeVT).
* [`command`](#command-event) - A player sent a chatbox command in-game (`\command`, `^command` or `|command`).
* [`join`](#join-event) - A player joined the server. Will contain the `user` property.
* [`leave`](#leave-event) - A player left the server. Will contain the `user` property.
* [`death`](#death-event) - A player died. Will contain the `user`, `text` and `renderedText` properties, and may also 
  contain the `source` property, if one exists.
* [`world_change`](#world-change-event) - A player changed worlds. Will contain the `user` property.

Not yet supported events:

* [`afk`](#afk-event) - A player went AFK (`/afk`). Will contain the `user` property.
* [`afk_return`](#afk-return-event) - A player returned from being AFK (`/afk`). Will contain the `user` property.
* [`server_restart_scheduled`](#server-restart-scheduled-event) - The server will restart soon. 
* [`server_restart_cancelled`](#server-restart-cancelled-event) - The scheduled server restart was cancelled.
* [`chat_chatbox`](#chatbox-chat-event) - A chatbox sent a message.

### In-game chat event

The [event](#event-packet) received when a player posts a message in public chat.

| Name           | Type                               | Argument Description                                                     |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------ |
| `event`        | string                             | `"chat_ingame"`                                                          |
| `text`         | string                             | The message contents, without formatting codes.                          |
| `rawText`      | string                             | The message contents, with its original formatting codes.                |
| `renderedText` | [JSON text](#raw-json-text-object) | The message contents, serialised with formatting as Minecraft JSON text. |
| `user`         | [User object](#user-object)        | The in-game player who sent the message.                                 |
| `time`         | string                             | The time (as ISO-8601) this message was sent according to the server.    |

??? example "Example payload of the `chat_ingame` event"

    ```json
    {
      "ok": true,
      "type": "event",
      "id": -1,
      "event": "chat_ingame",
      "text": "Hello, world!",
      "rawText": "Hello, world!",
      "renderedText": {
        "extra": [
          {
            "text": "Hello, world!"
          }
        ],
        "text": ""
      },
      "user": {
        "type": "ingame",
        "name": "Lemmmy",
        "uuid": "cdb33b76-a445-47a1-b13d-94f34e006243",
        "displayName": "Lemmmy",
        "group": "default",
        "pronouns": "he/they",
        "world": "minecraft:overworld",
        "afk": false,
        "alt": false,
        "bot": false,
        "supporter": 0,
        "linkedUser": { /* ... */ }
      },
      "time": "2022-07-12T18:54:01+01:00"
    }
    ```

### Discord chat event

The [event](#event-packet) received when a player posts a message in [Discord](https://discord.com/invite/AfmU7qKeVT).

| Name           | Type                                 | Argument Description                                                     |
| -------------- | ------------------------------------ | ------------------------------------------------------------------------ |
| `event`        | string                               | `"chat_discord"`                                                         |
| `text`         | string                               | The message contents, without Markdown formatting codes.                 |
| `rawText`      | string                               | The message contents, with its original Markdown formatting codes.       |
| `renderedText` | [JSON text](#raw-json-text-object)   | The message contents, serialised with formatting as Minecraft JSON text. |
| `discordId`    | string                               | The Discord snowflake ID of this message.                                |
| `discordUser`  | [Discord user](#discord-user-object) | The Discord user who sent the message.                                   |
| `edited`       | boolean                              | `true` if this event represents an edit to the original message.         |
| `time`         | string                               | The time (as ISO-8601) this message was sent according to Discord.       |

??? example "Example payload of the `chat_discord` event"

    ```json
    {
      "ok": true,
      "type": "event",
      "id": -1,
      "event": "chat_discord",
      "text": "Hello, world!",
      "rawText": "Hello, world!",
      "renderedText": {
        "extra": [
          {
            "text": "Hello, world!"
          }
        ],
        "text": ""
      },
      "discordId": "996474482015350814",
      "discordUser": {
        "type": "discord",
        "id": "478798120650670091",
        "name": "Lemmmy",
        "displayName": "remi",
        "discriminator": "4600",
        "avatar": "https://cdn.discordapp.com/avatars/478798120650670091/9515e4c502041370671112ed364de8a2.png",
        "roles": [{
          "id": "198138742333112320",
          "name": "Administrator",
          "colour": 15158332
        }],
        "linkedUser": { /* The linked Minecraft player, if available */ }
      },
      "edited": false,
      "time": "2022-07-12T18:53:50+01:00"
    }
    ```

### Chatbox chat event

!!! warning
    Not yet implemented

The [event](#event-packet) received when another chatbox sends a message.

| Name           | Type                               | Argument Description                                                     |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------ |
| `event`        | string                             | `"chat_chatbox"`                                                         |
| `text`         | string                             | The message contents, without formatting codes.                          |
| `rawText`      | string                             | The message contents, with its original formatting codes.                |
| `renderedText` | [JSON text](#raw-json-text-object) | The message contents, serialised with formatting as Minecraft JSON text. |
| `user`         | [User object](#user-object)        | The owner of the chatbox that sent the message.                          |
| `name`         | string                             | The name of the chatbox, without formatting codes.                       |
| `rawName`      | string                             | The name of the chatbox, with its original formatting codes.             |
| `time`         | string                             | The time (as ISO-8601) this message was sent according to the server.    |

??? example "Example payload of the `chat_chatbox` event"

    ```json
    {
      "ok": true,
      "type": "event",
      "id": -1,
      "event": "chat_chatbox",
      "text": "Hello, world!",
      "rawText": "Hello, world!",
      "renderedText": {
        "text": "Hello, world!"
      },
      "user": {
        "type": "ingame",
        "name": "Yemmel",
        "uuid": "07b382be-f2a8-4bf0-b9f5-c3a1b73c18c7",
        "displayName": "Yemmel",
        "group": "default",
        "pronouns": "he/they"
      },
      "name": "Example",
      "rawName": "Example",
      "time": "2022-07-12T19:05:28+01:00"
    }
    ```

### Command event

The [event](#event-packet) received when a player runs a chatbox command (public backslash commands: `\command`, private
owner-only caret/pipe commands: `^command`) in-game. The `command` capability is required to receive command events.

| Name        | Type                        | Argument Description                                                                                                   |
| ----------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `event`     | string                      | `"command"`                                                                                                            |
| `user`      | [User object](#user-object) | The in-game player who ran the command.                                                                                |
| `command`   | string                      | The name of the command (the word immediately following the backslash/caret/pipe, excluding the backslash/caret/pipe). |
| `args`      | string[]                    | Array of space-separated string arguments after the command.                                                           |
| `ownerOnly` | boolean                     | `true` if the command is an owner-only command (`^command`).                                                           |
| `time`      | string                      | The time (as ISO-8601) this command was sent according to the server.                                                  |

??? example "Example payload of the `command` event (`\example arg1 arg2 arg3`)"

    ```json
    {
      "ok": true,
      "type": "event",
      "id": -1,
      "event": "command",
      "user": {
        "type": "ingame",
        "name": "Lemmmy",
        "uuid": "cdb33b76-a445-47a1-b13d-94f34e006243",
        "displayName": "Lemmmy",
        "group": "default",
        "pronouns": "he/they",
        "world": "minecraft:overworld",
        "afk": false,
        "alt": false,
        "bot": false,
        "supporter": 0,
        "linkedUser": { /* ... */ }
      },
      "command": "example",
      "args": [
        "arg1",
        "arg2",
        "arg3"
      ],
      "ownerOnly": false,
      "time": "2022-07-12T19:08:02+01:00"
    }
    ```

### Join event

The [event](#event-packet) received when a player joins the game.

| Name    | Type                        | Argument Description                                              |
| ------- | --------------------------- | ----------------------------------------------------------------- |
| `event` | string                      | `"join"`                                                          |
| `user`  | [User object](#user-object) | The in-game player who joined.                                    |
| `time`  | string                      | The time (as ISO-8601) the player joined according to the server. |

??? example "Example payload of the `join` event"

    ```json
    {
      "ok": true,
      "type": "event",
      "id": -1,
      "event": "join",
      "user": {
        "type": "ingame",
        "name": "Lemmmy",
        "uuid": "cdb33b76-a445-47a1-b13d-94f34e006243",
        "displayName": "Lemmmy",
        "group": "default",
        "pronouns": "he/they"
      },
      "time": "2022-07-12T20:10:07+01:00"
    }
    ```

### Leave event

The [event](#event-packet) received when a player leaves the game.

| Name    | Type                        | Argument Description                                            |
| ------- | --------------------------- | --------------------------------------------------------------- |
| `event` | string                      | `"leave"`                                                       |
| `user`  | [User object](#user-object) | The in-game player who left.                                    |
| `time`  | string                      | The time (as ISO-8601) the player left according to the server. |

??? example "Example payload of the `leave` event"

    ```json
    {
      "ok": true,
      "type": "event",
      "id": -1,
      "event": "leave",
      "user": {
        "type": "ingame",
        "name": "Lemmmy",
        "uuid": "cdb33b76-a445-47a1-b13d-94f34e006243",
        "displayName": "Lemmmy",
        "group": "default",
        "pronouns": "he/they"
      },
      "time": "2022-07-12T20:10:07+01:00"
    }
    ```

### Death event

The [event](#event-packet) received when a player dies in-game.

| Name           | Type                               | Argument Description                                                           |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------------ |
| `event`        | string                             | `"death"`                                                                      |
| `text`         | string                             | The death message contents, without formatting codes.                          |
| `rawText`      | string                             | The death message contents, with its original formatting codes.                |
| `renderedText` | [JSON text](#raw-json-text-object) | The death message contents, serialised with formatting as Minecraft JSON text. |
| `user`         | [User object](#user-object)        | The in-game player who died.                                                   |
| `source`       | [User object](#user-object)        | The player that killed this player (if available), or `null`.                  |
| `time`         | string                             | The time (as ISO-8601) this player died according to the server.               |

??? example "Example payload of the `death` event"

    ```json
    {
      "ok": true,
      "type": "event",
      "id": -1,
      "event": "death",
      "text": "Yemmel fell out of the world",
      "rawText": "Yemmel fell out of the world",
      "renderedText": {
        "text": "Yemmel fell out of the world"
      },
      "user": {
        "type": "ingame",
        "name": "Yemmel",
        "uuid": "07b382be-f2a8-4bf0-b9f5-c3a1b73c18c7",
        "displayName": "Yemmel",
        "group": "default",
        "pronouns": "he/they",
        "world": "minecraft:overworld",
        "afk": false,
        "alt": false,
        "bot": false,
        "supporter": 0,
        "linkedUser": { /* ... */ }
      },
      "time": "2022-07-12T20:37:00+01:00"
    }
    ```

### World change event

The [event](#event-packet) received when a player changes worlds.

| Name          | Type                        | Argument Description                                          |
| ------------- | --------------------------- | ------------------------------------------------------------- |
| `event`       | string                      | `"world_change"`                                              |
| `user`        | [User object](#user-object) | The in-game player who changed worlds.                        |
| `origin`      | string                      | The identifier string of the world the player has moved from. |
| `destination` | string                      | The identifier string of the world the player is now in.      |

??? example "Example payload of the `world_change` event"

    ```json
    {
      "ok": true,
      "type": "event",
      "id": -1,
      "event": "world_change",
      "user": {
        "type": "ingame",
        "name": "Yemmel",
        "uuid": "07b382be-f2a8-4bf0-b9f5-c3a1b73c18c7",
        "displayName": "Yemmel",
        "group": "default",
        "pronouns": "he/they",
        "world": "minecraft:the_nether",
        "afk": true
      },
      "origin": "minecraft:overworld",
      "destination": "minecraft:the_nether"
    }
    ```

### AFK event

!!! warning
    Not yet implemented

The [event](#event-packet) received when a player goes AFK in-game.

| Name    | Type                        | Argument Description                                                 |
| ------- | --------------------------- | -------------------------------------------------------------------- |
| `event` | string                      | `"afk"`                                                              |
| `user`  | [User object](#user-object) | The in-game player who went AFK.                                     |
| `time`  | string                      | The time (as ISO-8601) this player went AFK according to the server. |

??? example "Example payload of the `afk` event"

    ```json
    {
      "ok": true,
      "type": "event",
      "id": -1,
      "event": "afk",
      "user": {
        "type": "ingame",
        "name": "Yemmel",
        "uuid": "07b382be-f2a8-4bf0-b9f5-c3a1b73c18c7",
        "displayName": "Yemmel",
        "group": "default",
        "pronouns": "he/they",
        "world": "minecraft:overworld",
        "afk": true
      },
      "time": "2022-07-12T20:43:37+01:00"
    ```

### AFK return event

!!! warning
    Not yet implemented

The [event](#event-packet) received when a player returns from being AFK in-game.

| Name    | Type                        | Argument Description                                                                |
| ------- | --------------------------- | ----------------------------------------------------------------------------------- |
| `event` | string                      | `"afk_return"`                                                                      |
| `user`  | [User object](#user-object) | The in-game player who returned from being AFK.                                     |
| `time`  | string                      | The time (as ISO-8601) this player returned from being AFK according to the server. |

??? example "Example payload of the `afk_return` event"

    ```json
    {
      "ok": true,
      "type": "event",
      "id": -1,
      "event": "afk_return",
      "user": {
        "type": "ingame",
        "name": "Yemmel",
        "uuid": "07b382be-f2a8-4bf0-b9f5-c3a1b73c18c7",
        "displayName": "Yemmel",
        "group": "default",
        "pronouns": "he/they",
        "world": "minecraft:overworld",
        "afk": false,
        "alt": false,
        "bot": false,
        "supporter": 0,
        "linkedUser": { /* ... */ }
      },
      "time": "2022-07-12T20:55:40+01:00"
    }
    ```


### Server restart scheduled event

!!! warning
    Not yet implemented

The [event](#event-packet) received when a server restart has been scheduled. At the time of `restartAt`, the server 
will restart and the websocket will be disconnected with [`server_stopping` (4000)](#closing-packet).

If a server restart was scheduled before the websocket connected, then the `server_restart_scheduled` packet will be
sent after the `hello` packet. In this case, `restartSeconds` will not be the time until the restart, but instead the
time that was initially specified for the restart. `time` will still be the initial time the restart was scheduled,
and `restartAt` will be the time the restart will happen.

| Name             | Type   | Argument Description                                      |
| ---------------- | ------ | --------------------------------------------------------- |
| `event`          | string | `"server_restart_scheduled"`                              |
| `restartType`    | string | The type of restart. Will be `"automatic"` or `"manual"`. |
| `restartSeconds` | number | The number of seconds specified until the server restart. |
| `restartAt`      | string | The time (as ISO-8601) that the server will restart.      |
| `time`           | string | The time (as ISO-8601) that this restart was scheduled.   |

??? example "Example payload of the `server_restart_scheduled` event"

    ```json
    {
      "ok": true,
      "type": "event",
      "id": -1,
      "event": "server_restart_scheduled",
      "restartType": "manual",
      "restartSeconds": 60,
      "restartAt": "2022-07-16T03:23:17+01:00",
      "time": "2022-07-16T03:22:17+01:00"
    }
    ```

### Server restart cancelled event

!!! warning
    Not yet implemented

The [event](#event-packet) received when a previously scheduled server restart has now been cancelled.

| Name          | Type   | Argument Description                                      |
| ------------- | ------ | --------------------------------------------------------- |
| `event`       | string | `"server_restart_cancelled"`                              |
| `restartType` | string | The type of restart. Will be `"automatic"` or `"manual"`. |
| `time`        | string | The time (as ISO-8601) that this restart was cancelled.   |

??? example "Example payload of the `server_restart_cancelled` event"

    ```json
    {
      "ok": true,
      "type": "event",
      "id": -1,
      "event": "server_restart_cancelled",
      "restartType": "manual",
      "time": "2022-07-16T03:24:46+01:00"
    }
    ```

## Data types

The following data types may be returned by the API:

### User object

The user object represents an in-game player.

The `group` is the rank of the player. Valid groups are:

* `default` - The default player group
* `admin` - Staff of the server

The `pronouns` string is the [pronouns](/faq/pronouns) set by the user by running `/pronouns`. This may be `null` if the
player has not set any preferred pronouns. Where reasonably possible, you should attempt to use the user's preferred
pronouns, or avoid using pronouns entirely. If you are unable to do this, you should use the player's name instead.

The `world` may be the world the player is in, or `null` if this information is not available. It will be a Minecraft
namespaced registry key, for example:

* `minecraft:overworld` - The overworld
* `minecraft:the_nether` - The Nether
* `minecraft:the_end` - The End

The `supporter` field is the current public tier of the player's supporter status. This will be `0` if the player is not
a supporter or has opted out of showing their supporter tag, `1` for a Tier 1 supporter, `2` for a Tier 2 supporter, and
`3` for a Tier 3 supporter.

If the player has linked their Discord account to their Minecraft account, then the `linkedUser` field will be present
and will contain the linked Discord user (as a [Discord user object](#discord-user-object)). The nested Discord user
will *not* contain another `linkedUser` field to avoid recursive serialization.

Example of a user object:

```json
{
  "type": "ingame",
  "name": "Lemmmy",
  "uuid": "cdb33b76-a445-47a1-b13d-94f34e006243",
  "displayName": "Lemmmy", // the name as it appears in chat, may differ from `name`
  "group": "admin",
  "pronouns": "he/they",
  "world": "minecraft:overworld",
  "afk": false,
  "alt": false,
  "bot": false,
  "supporter": 0,
  "linkedUser": { 
    /* The linked Discord user, if available */
    "type": "discord",
    /* ... */
  }
}
```

### Discord user object

The Discord user object represents a user on [Discord](https://discord.com/invite/AfmU7qKeVT). If the user has linked their Discord
account to their Minecraft account, then the `linkedUser` field will be present and will contain the linked Minecraft
player (as a [user object](#user-object)). The nested Minecraft player will *not* contain another `linkedUser` field to
avoid recursive serialization.

Example of a Discord user object:

```json
{
  "type": "discord",
  "id": "478798120650670091",
  "name": "Lemmmy",
  "displayName": "remi",
  "discriminator": "4600",
  "avatar": "https://cdn.discordapp.com/avatars/478798120650670091/9515e4c502041370671112ed364de8a2.png",
  "roles": [{
    "id": "198138742333112320",
    "name": "Administrator",
    "colour": 15158332
  }],
  "linkedUser": { 
    /* The linked Minecraft player, if available */ 
    "type": "ingame",
    /* ... */
  }
}
```

### Raw JSON text object

Messages will be accompanied by their string representation (`text`) as well as their in-game rich text representation
(`renderedText`). The rendered text is serialised as a JSON object conforming to the Minecraft 
[raw JSON text format](https://minecraft.wiki/w/Raw_JSON_text_format). As rendered text is generated
automatically by the server, it is not guaranteed that you will receive the same JSON for every version, and the
serialised form may not be optimal or compact.

Example of JSON text:

```json
{
  "renderedText": {
    "extra": [
      {
        "text": "Hello, world! "
      },
      {
        "bold": true,
        "text": "This text is bold."
      }
    ],
    "text": ""
  }
}
```
