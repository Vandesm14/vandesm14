import { html, tokens } from "https://deno.land/x/rusty_markdown@v0.4.1/mod.ts";

const parse = (content: string) => html(tokens(content));

let main = Deno.readTextFileSync("src/index.html");

const tldr = Deno.readTextFileSync("src/content/tldr.md");
const experience = Deno.readTextFileSync("src/content/experience.md");
const projects = Deno.readTextFileSync("src/content/projects.md").split("---")
  .map(
    (entry) => entry.trim(),
  );

let project_strings: string = "";
for (const project of projects) {
  project_strings += `<section class="project">\n${
    parse(project)
  }\n</section>\n`;
}

const year = new Date().getFullYear();
// Since starting web dev.
const xp = year - 2017;
// Since starting Rust dev.
const rust = year - 2022;

main = main.replaceAll("{tldr}", parse(tldr));

main = main.replaceAll("$xp", xp.toString());
main = main.replaceAll("$year", year.toString());
main = main.replaceAll("$rust", rust.toString());

main = main.replaceAll("{projects}", project_strings);
main = main.replaceAll(
  "{experience}",
  parse(experience),
);

Deno.mkdirSync("dist/", { recursive: true });
Deno.writeTextFileSync("dist/index.html", main);

for (const file of Deno.readDirSync("src/static")) {
  Deno.copyFileSync(`src/static/${file.name}`, `dist/${file.name}`);
}
