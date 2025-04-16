## Node Shell

**Source:** [GitHub](https://github.com/vandesm14/node-shell)

_A CLI to bring scripts, binaries, and packager commands to your fingertips (inspired by nix-shell)._

Inspired by the ease of use of `nix-shell`, I wanted to create a way to easily call commands and binaries in a NodeJS project. So, instead of running `pnpm dev`, you could run `dev`. Or instead of `pnpm prisma format`, you could just run `prisma format`. It was surprisingly simple to implement, though I did have to learn how to instantiate the BASH shell and give it a proper config.
