---
title: Choosing Optional Mods
---

# Choosing optional mods

This guide shows you the considerations that should be made when choosing any of our provided optional mods.

Note that the optional mods have not been as thoroughly tested as our default mods, or might have some issues.

## Sodium

Sodium is a mod that improves the performance of Minecraft. It should be installed along with Indium, to provide proper rendering support for 3d prints.

!!! notice
    Sodium has two versions that are shipped by the pack, one is compatible with Nvidium but incompatible with Iris and Distant Horizons, the other is incompatible with Nvidium but compatible with Iris and Distant Horizons

    The new version is enabled by default on the pack, as we think it is stable enough. Please report any bugs you see.

## Iris Shaders

Iris Shaders is a mod that adds shader support to our pack. It requires Sodium (and thus Indium) to be installed.
It is not supported by Nvidium and some shader packs might not work with Distant Horizons.

!!! notice
    Iris hasn't been added as it depends on Sodium.

## Distant Horizons

Distant Horizons is a mod that improves the client side render distance by creating LODs beyond the real chunks' render distance.
It only works with shaders built with Distant Horizons support in mind.

!!! notice
    Distant Horizons is not enabled by default due to the LOD ComputerCraft monitors not rendering their display.
    This mod is also in alpha and may be unstable.

## Bobby

Bobby is a mod that improves the client side render distance by caching chunks it receives from the server. It renders the chunks as real Minecraft chunks.

!!! notice
    Bobby is not enabled by default due to cached ComputerCraft monitors not rendering their display.
    Furthermore, the data is stored locally and can get very large.

## VulkanMod

VulkanMod is a mod that replaces the default OpenGL renderer with an optimized renderer that uses the Vulkan API.

!!! notice
    VulkanMod is not enabled by default due to older GPUs not supporting Vulkan.

## Nvidium

Nvidium replaces the rendering backend with NVIDIA exclusive OpenGL extensions to increase fps a lot, especially with huge render distances. Sodium (and thus Indium) should be installed for this to work.
Nvidium disables itself when Iris is using a shader.

!!! notice
    Nvidium hasn't been added as it only works for NVIDIA GeForce GTX 16xx cards and newer (GeForce RTX), and because its quite an experimental mod.
    This mod requires the older version of Sodium.
