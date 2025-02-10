# ReconnectedChat v3

[ReconnectedCC Chatbox](https://docs.reconnected.cc/chatbox/) v2 module for Node.js written in TypeScript

[![npm version](https://badge.fury.io/js/reconnectedchat.svg)](https://www.npmjs.org/package/reconnectedchat)

## Installation

```sh
npm i reconnectedchat
```

## Documentation

In-depth documentation can be found at [docs.reconnected.cc](https://docs.reconnected.cc/chatbox/):

- [Library documentation](https://docs.reconnected.cc/chatbox/reconnectedchat)
- [API reference](https://docs.reconnected.cc/library/reconnectedchat/)
- [Chatbox websocket API documentation](https://docs.reconnected.cc/chatbox/websocket)

## Example usage

This example will show you how to connect to the ReconnectedCC Chatbox API with a basic Hello World bot.

1. Obtain a Chatbox token by running `/chatbox license` [in-game](https://reconnected.cc). You can click the token to
   copy it to
   your clipboard.
2. Set up your project with `npm init`, and install reconnectedchat by running `npm i reconnectedchat`.
    - To make sure ESM modules are used, open `package.json` and set `"type": "module"`.
3. Create a file called `index.js` with the following code:

```ts
// Import ReconnectedChat
import {Client} from "reconnectedchat";

// Create the Chatbox client
const sc = new Client("YOUR-CHATBOX-TOKEN", {
    // Optional - set the default name and markdown formatting mode for all `.say()` and `.tell()` calls
    defaultName: "Hello World Bot",
    defaultFormattingMode: "markdown",
});


// Add event listener for when a backslash command is received
sc.on("command", async (cmd) => {
    // Only respond if the command is `\helloworld`
    if (cmd.command === "helloworld") {
        // Send message back to the user: "Hello World!"
        await sc.tell(cmd.user.name, "Hello World!");
    }
});

// Event listener for when the client is connected to ReconnectedCC and ready to
// receive messages and events
sc.on("ready", () => {
    console.log("Connected!");
});

// Connect to ReconnectedCC
sc.connect();
```

4. Run your code! If you used JavaScript you can run it with `node index.js`. When it says "Connected!", run
   `\helloworld` in-game, and the Chatbox should respond to you!

## Events

You are able to listen after the following events, which directly map to the events sent by the
[Chatbox websocket API](https://docs.reconnected.cc/chatbox/websocket):

| Friendly name     | Name                       | Trigger                                    |
|-------------------|----------------------------|--------------------------------------------|
| In-game chat      | `chat_ingame`              | A player sent a message in-game            |
| Discord chat      | `chat_discord`             | A player sent a message from Discord       |
| Chatbox message   | `chat_chatbox`             | A chatbox sent a public message            |
| Chatbox command   | `command`                  | A player sent a chatbox command in-game    |
| Join              | `join`                     | A player joined the server                 |
| Leave             | `leave`                    | A player left the server                   |
| Death             | `death`                    | A player died                              |
| World change      | `world_change`             | A player changed worlds                    |
| AFK               | `afk`                      | A player went AFK                          |
| AFK return        | `afk_return`               | A player returned from being AFK           |
| Restart scheduled | `server_restart_scheduled` | The server will restart soon               |
| Restart cancelled | `server_restart_cancelled` | The scheduled server restart was cancelled |

- user - `User` that went AFK

### In-game chat

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#in-game-chat-event) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/IngameChatMessage))

The event received when a player posts a message in public chat.

- text - `string` of the contents of the chat message
- rawText - `string` of the raw contents of the chat message
- renderedText - `RenderedTextObject` of the rendered text of the chat message
- user - `User` that sent the message

### Discord chat

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#discord-chat-event) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/DiscordChatMessage))

The event received when a player posts a message in Discord.

- text - `string` of the contents of the chat message, without formatting codes
- rawText - `string` of the raw contents of the chat message, with its original formatting codes
- renderedText - `RenderedTextObject` of the rendered text of the chat message
- discordId - `string` of the Discord snowflake ID of the message
- discordUser - `DiscordUser` that sent the message
- edited - `boolean` if the message has been edited

### Chatbox message

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#chatbox-chat-event) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/ChatboxChatMessage))

The event received when another chatbox sends a message.

- text - `string` of the contents of the message, without formatting codes
- rawText - `string` of the raw contents of the message, with its original formatting codes
- renderedText - `RenderedTextObject` of the rendered text of the message
- user - `User` of the owner of the chatbox
- name - `string` name of the chatbox, without formatting codes
- rawName - `string` name of the chatbox, with its original formatting codes

### Chatbox command

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#command-event) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/ChatboxCommand))

The event received when a player runs a chatbox command (public backslash commands: `\command`, private owner-only
caret/pipe commands: `^command`) in-game. The `command` capability is required to receive command events.

- user - `User` that ran the chatbox command
- command - The name of the command (the word immediately following the backslash/caret/pipe, excluding the
  backslash/caret/pipe). Example: \\**command** arg1 arg2
- args - Array of space-separated `string` arguments after the command.
- ownerOnly - `boolean` if the command is an owner-only command (`^command`)

### Join

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#join-event) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/Join))

The event received when a player joins the game.

- user - `User` that joined the server

### Leave

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#leave-event) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/Leave))

The event received when a player leaves the game.

- user - `User` that left the server

### Death

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#death-event) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/Death))

The event received when a player dies in-game.

- text - `string` of the death message contents, without formatting codes
- rawText - `string` of the death message contents, with its original formatting codes
- renderedText - `RenderedTextObject` of the death message
- user - `User` that died
- source - `User` | `null` that killed the user. Only set if they were killed by another player

### World change

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#world-change-event) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/WorldChange))

The event received when a player changes worlds.

- user - `User` that changed worlds
- origin - `string` of the world the player moved from
- destination - `string` of the world the player is now in

### AFK

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#afk-event) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/AFK))

The event received when a player goes AFK in-game.

- user - `User` that goes AFK

### AFK return

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#afk-return-event) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/AFKReturn))

The event received when a player returns from being AFK in-game.

### Server restart scheduled

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#server-restart-scheduled-event) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/ServerRestartScheduled))

The event received when a server restart has been scheduled. At the time of `restartAt`, the server will restart and the
ReconnectedChat client will be disconnected.

If a server restart was scheduled before the websocket connected, then the `server_restart_scheduled` event will be
sent after the `hello`/`ready` events. In this case, `restartSeconds` will not be the time until the restart, but
instead the time that was initially specified for the restart. `time` will still be the initial time the restart was
scheduled, and `restartAt` will be the time the restart will happen.

- restartType - `string` that tells you what type of restart it is (`"automatic"` or `"manual"`)
- restartSeconds - `number` that tells you how many seconds until the restart
- restartAt - `Date` that tells you when the restart will happen

### Server restart cancelled

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#server-restart-cancelled-event) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/ServerRestartCancelled))

The event received when a previously scheduled server restart has now been cancelled.

- restartType - `string` that tells you what type of restart it was (`"automatic"` or `"manual"`)

## Rate limits

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#rate-limits))

The Chatbox server has a ratelimit of 500ms per license, with up to 5 messages queued at once.

When the methods `client.say` and `client.tell` are called, the data is enqueued internally before being sent to the
server.

This internal queue makes it safe to go well over the limits, because it processes each message every 500ms to avoid
hitting the rate limit of the server.

## Server -> Client packets

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#server-to-client-packets))

You are also able to listen after these packets that are sent by ReconnectedCC to the client.

| Friendly name      | Name      | Trigger                                                          |
|--------------------|-----------|------------------------------------------------------------------|
| Hello packet       | `ready`   | When ReconnectedChat has successfully connected to ReconnectedCC |
| Player list packet | `players` | When you connect, and when a player joins/leaves                 |
| Error packet       | `error`   | When there is an error                                           |
| Closing packet     | `closing` | When the server is closing the connection                        |

### Hello packet

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#hello-packet) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/Hello))

- guest - `boolean` that says if you are authenticated with the guest key
- licenseOwner - `string` that represents who owns the chatbox license
- licenseOwnerUser - `User` that represents who owns the chatbox license, or null if this is a guest connection
- capabilities - Array of `string`s that can tell you what capabilities you have

### Players packet

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#players-packet) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/Players))

- players - Array of `User`s that are currently online on the server.

### Error packet

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#error-packet) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/Error))

- error - `string` that tells you what type of error that
  occurred ([possible errors](https://docs.reconnected.cc/chatbox/websocket#error-packet)).
- text - `string` that is a human-readable version of `error`.

### Closing packet

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#closing-packet) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/Closing))

- closeReason - `string` reason for closing the
  connection ([possible values](https://docs.reconnected.cc/chatbox/websocket#closing-packet)).
- reason - `string` that is a human-readable version of `closeReason`

## Methods

You can run these methods on your [`Client`](https://docs.reconnected.cc/library/reconnectedchat/classes/Client)
instance.

### client.say

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#say-packet) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/classes/Client#say))

- Syntax: `await client.say(text, name, mode)`
- Returns: Promise<[Success](https://docs.reconnected.cc/library/reconnectedchat/interfaces/Success)>

Sends a message to the in-game public chat. Returns a Promise that resolves to a
[Success](https://docs.reconnected.cc/library/reconnectedchat/interfaces/Success) object, which will tell you if the
message
was sent (`reason` is `"message_sent"`).

| Argument | Type                        | Description                                                                                                                              |
|----------|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `text`   | `string`                    | The message to send.                                                                                                                     |
| `name`   | `string` (optional)         | The name of the chatbox to show. If no name is specified, it will default to the username of the license owner, or `client.defaultName`. |
| `mode`   | `FormattingMode` (optional) | The formatting mode to use (`"markdown"`, `"format"` or `"minimessage"`). Defaults to `client.defaultFormattingMode` or `"markdown"`.    |

### client.tell

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#tell-packet) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/classes/Client#tell))

- Syntax: `await client.tell(user, text, name, mode)`
- Returns: Promise<[Success](https://docs.reconnected.cc/library/reconnectedchat/interfaces/Success)>

Sends a private message to an in-game player. Returns a Promise that resolves to a
[Success](https://docs.reconnected.cc/library/reconnectedchat/interfaces/Success) object, which will tell you if the
message
was sent (`reason` is `"message_sent"`).

| Argument | Type                        | Description                                                                                                                              |
|----------|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `user`   | `string`, `User`            | The username, UUID or the `User` object of the user to send the message to.                                                              |
| `text`   | `string`                    | The message to send.                                                                                                                     |
| `name`   | `string` (optional)         | The name of the chatbox to show. If no name is specified, it will default to the username of the license owner, or `client.defaultName`. |
| `mode`   | `FormattingMode` (optional) | The formatting mode to use (`"markdown"`, `"format"` or `"minimessage"`). Defaults to `client.defaultFormattingMode` or `"markdown"`.    |

### client.connect

([API reference](https://docs.reconnected.cc/library/reconnectedchat/classes/Client#connect))

- Syntax: `client.connect()`

Connects to ReconnectedCC.

### client.close

([API reference](https://docs.reconnected.cc/library/reconnectedchat/classes/Client#close))

- Syntax: `client.close()`

Disconnects the connection to ReconnectedCC.

### client.reconnect

([API reference](https://docs.reconnected.cc/library/reconnectedchat/classes/Client#reconnect))

- Syntax: `client.reconnect()`

Reconnects to ReconnectedCC.

## Data types

### User object

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#user-object) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/User))

The user object represents an in-game player.

- name - The Minecraft username of the player.
- uuid - The Minecraft UUID of the player, with hyphens.
- displayName - The user's name as it appears in chat. May differ from `name`.
- group - The rank of the player, usually `"default"`, `"moderator"` or `"admin"`.
- pronouns - The [pronouns](https://docs.reconnected.cc/faq/pronouns) set by the user by running `/pronouns`. This may
  be
  `null` if the player has not set any preferred pronouns. Where reasonably possible, you should attempt to use the
  user's preferred pronouns, or avoid using pronouns entirely. If you are unable to do this, you should use the player's
  name instead.
- world - The world the player is in, or `null` if this information is not available. It will be a Minecraft namespaced
  registry key, for example:
    - `minecraft:overworld` - The overworld
    - `minecraft:the_nether` - The Nether
    - `minecraft:the_end` - The End
- afk - If the player is AFK
- alt - If the player is an alt account
- bot - If the player is a bot
- supporter - the current public tier of the player's supporter status. This will be `0` if the player is not a
  supporter or has opted out of showing their supporter tag, `1` for a Tier 1 supporter, `2` for a Tier 2 supporter, and
  `3` for a Tier 3 supporter.

### DiscordUser object

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#user-object) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/DiscordUser))

The Discord user object represents a user on Discord.

- id - The Discord snowflake ID of the user
- name - The Discord name of the user
- displayName - The user's server nickname on Discord, or their username if it is not set
- discriminator - The user's discriminator on Discord
- avatar - URL to the avatar of the user
- roles - Array consisting of [roles](https://docs.reconnected.cc/library/reconnectedchat/interfaces/DiscordRole).

### RenderedTextObject

([Websocket API docs](https://docs.reconnected.cc/chatbox/websocket#raw-json-text-object) &ndash;
[API reference](https://docs.reconnected.cc/library/reconnectedchat/interfaces/RenderedTextObject))

Minecraft's serialised [raw JSON text format](https://minecraft.wiki/w/Raw_JSON_text_format). See
the [ReconnectedCC documentation](https://docs.reconnected.cc/chatbox/websocket#raw-json-text-object) for more
information on how this is used.

### FormattingMode

([API reference](https://docs.reconnected.cc/library/reconnectedchat/types/FormattingMode))

The mode to use for outgoing chatbox messages (`.say()`, `.tell()`).

- markdown -
  Discord-like [Markdown syntax](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-).
  Supports URLs, but not colours.
- format - Minecraft-like [formatting codes](https://minecraft.wiki/w/Formatting_codes) using ampersands (e.g. `&e` for
  yellow). Supports colours, but not URLs.
- minimessage - HTML-like [tags](https://docs.advntr.dev/minimessage/format.html) (e.g. `<yellow></yellow>` for yellow).
  Supports colours and hover events.
