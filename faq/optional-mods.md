---
title: Choosing Optional Mods
layout: home
parent: FAQ
---

# Choosing optional mods
This guide shows you the considerations that should be made when choosing any of our provided optional mods.

Note that the optional mods have not been as thoroughly tested as our default mods, or might have some issues.

## Sodium

{: .highlight}
Sodium has not been added to the pack because of rendering issues with certain old iGPUs.

Sodium is a mod that improves the performance of Minecraft. It should be installed along with Indium, to provide proper rendering support for 3d prints.

## Iris Shaders

{: .highlight}
Iris hasn't been added as it depends on Sodium.

Iris Shaders is a mod that adds shader support to our pack. It requires Sodium (and thus Indium) to be installed.
It is not supported by Nvidium and some shader packs might not work with Distant Horizons.

## Distant Horizons

{: .highlight}
Distant Horizons hasn't been added because the LOD ComputerCraft monitors don't render, and because the mod is still in an alpha state.

Distant Horizons is a mod that improves the client side render distance by creating LODs beyond the real chunks' render distance.
It only works with shaders built with Distant Horizons support in mind.


## Bobby

{: .highlight}
Bobby hasn't been added because the cached ComputerCraft monitors don't render, and because the disk cache Bobby uses tends to get very large.

Bobby is a mod that improves the client side render distance by caching chunks it receives from the server. It renders the chunks as real Minecraft chunks.

# VulkanMod

{: .highlight}
VulkanMod hasn't been added as it only works with GPUs that support Vulkan, and because it hasn't been thoroughly tested (yet).

VulkanMod is a mod that replaces the default OpenGL renderer with an optimized renderer that uses the Vulkan API.


## Nvidium

{: .highlight}
Nvidium hasn't been added as it only works for NVIDIA 16xx cards and newer, and because its quite an experimental mod.

Nvidium replaces the rendering backend with NVIDIA exclusive OpenGL extensions to increase fps a lot, especially with huge render distances. Sodium (and thus Indium) should be installed for this to work.
Nvidium disables itself when Iris is using a shader.