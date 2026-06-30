![projects](/projects.png)

## Airwave

**August 2024 - Present**

**Source:** [GitHub](https://arwv.cc/github)

**Website:** [https://airwavegame.com](https://airwavegame.com)

![in-game screenshot](/airwave.png)

_Airwave is an air traffic control sim-game that aims to make air traffic control fun for the enthusiast and the expert._

Frustrated by the current landscape of ATC games, I sought out to build one powered by AI. But wait, not just because AI is a buzzword, but because it allowed me to parse tasks from speech-to-text requests made by the user without a hard-coded syntax for the user to follow.

Utilizing Rust, I was able to build a comprehensive simulation that matched the real-world operations of aircraft and ATC. As the game grew, the scope started to change. Focusing more on the gamification aspect of Airwave, I rebuilt it to feature airport-management strategies rather than the OG idea of building an ATC MMO-style simulator.

---

## Quip

**April 2026 - May 2026**

**Source:** [GitHub](https://github.com/vandesm14/quip)

Quip is a dynamic lisp-like language born out of the dream of building a usable language that was highly embeddable and strict in it's ruleset, making it infinitely expandable.

A spiritrual successor to [Stack](#stack) (see below), Quip was a reincarnation of the same principles but with a constrained scope and direction.

---

## Stack

**December 2023 - July 2024**

**Source:** [GitHub](https://github.com/vandesm14/stack)

**Website:** [https://vandesm14.github.io/stack](https://vandesm14.github.io/stack) (Website and Documentation)

_Stack is a dynamic, stack-based, concatenative programming language._

I like to call myself the idea man. I'll have a random idea, such as "How hard is it to make an OS?" or "What if there was a language that implemented the bare-bones and allowed you to build it up from there?". Can you guess which one stuck? Fast forward from mid-December of 2023, I, and my good friend [Leon](https://codeberg.org/leonski), started on the daunting task to create our own programming language.

Surprisingly, parsing and executing the code was easy. The part I found most challenging was sketching the behavior of the language. Because Stack is incredibly dynamic, the evaluation engine couldn't make almost any inferences about the code, which means I had to find creative ways to get features like scopes (took me many tries to perfect).

Another fun feature was building a debugger with Egui, which allowed us to see inside the language and keep track of every operation (and even go back in time!).

Stack isn't finished and neither am I. I'm still working hard to make it a fully-fledged and usable language.
