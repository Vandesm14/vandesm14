---
name: CC-Twigs
description: A package manager and networking system for ComputerCraft
source: https://github.com/vandesm14/CC-Twigs

images:
  - cc-twigs.png
---

CC-Twigs is a collection of packages for **ComputerCraft** (a Minecraft mod). It uses Typescript-to-Lua to compile TS code into Lua to be used in ComputerCraft. I have built **my own package manager**, called `mngr`, specifically for downloading and managing packages in-game. My goal for this project was to utilize the power of Typescript and build a system to allow my friends and I to build everything locally, then ship to the computers in-game without worrying about Pastebin or other hacks.

Along with that, I have also taken a **fascination towards networking**. However, in my opinion, networking is pretty difficult to get started with IRL due to _physics and low-level processing_. So instead of doing things in the real world, I decided to utilize ComputerCraft to give me an **abstract model** to work off of. Simply using wireless and wired modems in the game, I was able to build a **BGP-like system** that allowed computers ("nodes") to **auto-discover** each other and route IP/UDP packets.
