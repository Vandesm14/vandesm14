![projects](/projects.png)

## Airwave

**Development:** August 2024 - Present

**Download:** [Itch.io](https://arwv.cc/itch)

**Website:** [https://airwavegame.com](https://airwavegame.com)

![in-game screenshot](/airwave.png)

_Airwave is an air traffic control sim-game that aims to make air traffic control fun for the enthusiast and the expert._

Frustrated by the current landscape of ATC games, I sought out to build one powered by your voice instead of directing aircraft with buttons strict text commands. Within a week, the first prototype was born. It was surprisingly fun to play, despite the limited functionality. As I kept building it, however, there was strain on having to support both a Rust backend and a TypeScript (SolidJS) frontend. So around February of 2026, after a much needed hiatus to focus on other work, I began rewriting Airwave into [Bevy](https://bevy.org/).

As of now (August of 2026), Airwave has been released to [Itch.io](https://arwv.cc/itch) under an in-development alpha. The debut release was published on July 20th, 2026. As of now, Airwave supports voice (and text) control, native multiplayer, multi-airport management, and both air _and_ ground control. I plan to continue development of Airwave to expand its feature set and vision, leaning more towards uncharted waters where players are given more responsibilities and roles, optionally handing these off to Auto ATC if they'd like to focus on a subset of them, or bringing their friends to help out.

You can view an in-depth narrative on how Airwave came to be along with the big decisions I made along the way on [the blog](https://arwv.cc/blog). I also have a [Discord server](https://arwv.cc/discord) that you can join to provide feedback, report bugs, get help with Airwave, or simply follow along for the ride.

---

## Quip

**Development:** April 2026 - May 2026

**Source:** [GitHub](https://github.com/vandesm14/quip)

Quip is a dynamic lisp-like language born out of the dream of building a language that was highly embeddable and strict in it's ruleset, making it infinitely expandable. I was frustrated with poorly-implemented DSLs that screwed the developer over once they wanted to implement more than a few if statements and a for loop. Inspired by the composition and native expansion of lisp-like languages, I built Quip to let the developer build their own functionality and behavior, all without leaving the language. This way, the implementor of Quip could provide a functionally small set of intrinsics while still allowing the end user to build anything with those primitives.

A spiritrual successor to [Stack](#stack) (see below), Quip was a reincarnation of the same principles but with a constrained scope and direction.

---

## Stack

**Development:** December 2023 - July 2024

**Source:** [GitHub](https://github.com/vandesm14/stack)

**Website:** [https://vandesm14.github.io/stack](https://vandesm14.github.io/stack) (Website and Documentation)

_Stack is a dynamic, stack-based, concatenative programming language._

I like to call myself the idea man. I'll have a random idea, such as "How hard is it to make an OS?" or "What if there was a language that implemented the bare-bones and allowed you to build it up from there?". Can you guess which one stuck? Fast forward from mid-December of 2023, I, and my good friend [Leon](https://codeberg.org/leonski), started on the daunting task to create our own programming language.

Surprisingly, parsing and executing the code was easy. The part I found most challenging was sketching the behavior of the language. Because Stack is incredibly dynamic, the evaluation engine couldn't make almost any inferences about the code, which means I had to find creative ways to get features like scopes (took me many tries to perfect).

Another fun feature was building a debugger with Egui, which allowed us to see inside the language and keep track of every operation (and even go back in time!).

Stack isn't finished and neither am I. I'm still working hard to make it a fully-fledged and usable language.

---

## Ratio Timer

**Development:** July 2021 - July 2022

**Source:** [GitHub](https://github.com/vandesm14/ratio-timer)

**Website:** [https://vandesm14.github.io/ratio-timer](https://vandesm14.github.io/ratio-timer)

_Ratio Timer is a dynamic pomodoro-like timer where you define a work:break ratio instead of rigid, fixed intervals._

A long time ago, I tried using a pomodoro timer. They were all the rage. The theory was neat, except for one fatal flaw: If you were in the zone and wanted to work for longer, you'd either have to start another 25min work session or pause the timer, do your work, then only have a 5min break regardless if you worked 25min or longer. I sought to fix that.

It was easy, really. Pomodoro timers use the same exact ratio: 5:1 (for every 5 work minutes, provide 1 break minute) but restrict you under a 5x step of that ratio, giving us the 25min:5min timer we're used to. But if you simply remove that limitation of 5x the ratio, you could have a timer that follows you as you work, giving you just the right amount of break time from the ratio you set. It's similar to a chess clock in a way, where you have two timers with only one running at a time.

To use it, you set a ratio, then you're off. Stay in the work mode while you work, then when you want to take a break, switch to the break mode and enjoy your ratio-perfect break! If you go over your break time, not a problem. It tracks the overage and applies an offset to your work time, showing you how much you need to work to resolve the disparity (more break + not enough work = more work).
