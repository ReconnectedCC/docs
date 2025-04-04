# Introspection module
The introspection module allows accessing the inventory of a player, also providing the ability to get basic information about yourself.

**Module: `plethora:introspection` ([view methods](https://plethora.madefor.cc/methods.html#module-methods-plethora:introspection))**

Usable in:

- Manipulator

- Neural interface

- Pocket computers

- Turtle

## Basic usage
Once the introspection module is equipped and wrapped as a peripheral, you will be able to fetch the current entity/turtle’s inventory. With that object you can use any standard inventory method.

```lua
local introspection = peripheral.wrap(--[[ whatever ]])

local inv = introspection.getInventory()
local item = inv.getItemMeta(1)
if item then
	print(item.displayName .. " at slot #1")
end
```

When using the introspection module within a manipulator, you will need to bind it to a player. This can be done by shift + right-clicking it. The module will now function as normal, acting on the bound player’s inventory instead.

Note that the introspection module also works on simple mobs and turtles, though you they do not have as large an inventory as players.

## Transferring between inventories
The introspection module also provides access to the player’s ender chest. While there are methods to access them (`.getEnder()`), you can also use the item transfer system to move things between them.

```lua
local inv = introspection.getInventory()
local ender = introspection.getEnder()

inv.pushItems("ender_chest", 1) -- Move slot 1 into the ender chest
for slot, item in pairs(ender.list()) do
	print(string.format("#%d: %s", slot, item.name))
end
```
## Other functionality
Right-clicking with the introspection module will open the current player’s ender chest.