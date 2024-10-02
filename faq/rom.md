---
title: ROM
layout: home
parent: FAQ
---

# The ReconnectedCC ROM

Here are the programs included in the ComputerCraft ROM on ReconnectedCC.

The GitHub repo for the ReconnectedCC ROM can be found at [https://github.com/ReconnectedCC/cc-rom](https://github.com/ReconnectedCC/cc-rom)

## Libraries
### bigfont.lua
A library by Wojbie that allows you to write bigger text than the stock font

### switchcraft.lua
An SC3 and SC2 compatible API, for backwards compatibility with older applications.

### connecticut.lua
An API specific to the ReconnectedCC server

## Programs
### Cloud Catcher
A web interface for ComputerCraft, allowing you to remote into computers and edit files on them

### Ninja Catcher
Cloud Catcher but with raised file size limits

## MBS
A mildly better shell for ComputerCraft

## hopper.lua
Move items from A to B without any hassle, acts like a commandline hopper.


## Custom shell commands
- `touch [file]` - Creates a file
- `github limits [key|guest]` - View the GitHub limits as a guest or on a specific key


**Specific to turtles:**
- `dig` - digs in front of the turtle
- `drop [slot]` - Drops an item in the selected or specified slot
- `forward` - Moves the turtle forward
- `left` - Rotates the turtle to the left
- `right` - Rotates the turtle to the right
- `place` - Places the item in the selected or specified slot
- `select` - Selects the specified slot