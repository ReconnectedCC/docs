---
title: Server API
---

The server exposes an HTTP api with various bits of information for people to access

The root URL is `https://api.reconnected.cc`

## Endpoints

| Endpoint                                         | Description                                                       |
| ------------------------------------------------ | ----------------------------------------------------------------- |
| [`/tps`](https://api.reconnected.cc/tps)         | Returns the TPS as a float                                        |
| [`/mspt`](https://api.reconnected.cc/mspt)       | Returns the current MSPT as a float.                              |
| [`/players`](https://api.reconnected.cc/players) | Returns the amount of players online on the server as an integer. |
