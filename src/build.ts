import { html, tokens } from "https://deno.land/x/rusty_markdown@v0.4.1/mod.ts";

const parse = (content: string) => html(tokens(content));

let main = Deno.readTextFileSync("src/index.html");

const tldr = Deno.readTextFileSync("src/content/tldr.md");
const testimony = Deno.readTextFileSync("src/content/testimony.md");
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
const experience = year - 2017;
const rust = year - 2022;
const job = year - 2021;

main = main.replaceAll("{tldr}", parse(tldr));

main = main.replaceAll("$xp", experience.toString());
main = main.replaceAll("$year", year.toString());
main = main.replaceAll("$rust", rust.toString());

main = main.replaceAll("{projects}", project_strings);
main = main.replaceAll(
  "{testimony}",
  parse(testimony.replaceAll("$job", job.toString())),
);

Deno.mkdirSync("dist/", { recursive: true });
Deno.writeTextFileSync("dist/index.html", main);

for (const file of Deno.readDirSync("src/static")) {
  Deno.copyFileSync(`src/static/${file.name}`, `dist/${file.name}`);
}
