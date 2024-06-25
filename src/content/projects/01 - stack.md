## Stack

**Source:** [GitHub](https://github.com/vandesm14/stack)

**Website:** [Website/Docs](https://vandesm14.github.io/stack)

_Stack is a dynamic, stack-based, concatenative programming language._

I like to call myself the idea man. I'll have a random idea, such as "How hard is it to make an OS?" or "What if there was a language that implemented the bare-bones and allowed you to build it up from there?". Can you guess which one stuck? Fast forward from mid-December of 2023, I, and my good friend [Leon](https://codeberg.org/leonski), started on the daunting task to create our own programming language.

Surprisingly, parsing and executing the code was easy. The part I found most challenging is sketching the behavior of the language. Because Stack is incredibly dynamic, the evaluation engine couldn't make almost any inferences about the code, which means I had to find creative ways to get features like scopes (took me many tries to perfect).

Another fun feature was building a debugger with Egui, which allowed us to see inside the language and keep track of every operation (and even go back in time!).

Stack isn't finished and neither am I. I'm still working hard to make it a fully-fledged and usable language.
