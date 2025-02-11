---
editUrl: false
next: false
prev: false
title: "FormattingMode"
---

> **FormattingMode**: `"markdown"` \| `"format"` \| `"minimessage"`

Defined in: [src/types/RenderedTextObject.ts:26](https://github.com/ReconnectedCC/ReconnectedChat/blob/11808a4ccf9a9a1ccda66cd61ef3e2ee6db98c33/src/types/RenderedTextObject.ts#L26)

The formatting mode to use when sending messages.

- `markdown` - Discord-like [Markdown syntax](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-).
  Supports URLs, but not colours.
- `format` - Minecraft-like [formatting codes](https://minecraft.wiki/w/Formatting_codes) using ampersands
 (e.g. `&e` for yellow). Supports colours, but not URLs.
