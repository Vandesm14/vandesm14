import { html, tokens } from 'https://deno.land/x/rusty_markdown@v0.4.1/mod.ts';

const parse = (content: string) => html(tokens(content));

let main = Deno.readTextFileSync('src/index.html');

const tldr = Deno.readTextFileSync('src/content/tldr.md');
const testimony = Deno.readTextFileSync('src/content/testimony.md');

const projects_unsorted = Deno.readDirSync('src/content/projects');
const project_sorted = Array.from(projects_unsorted);
project_sorted.sort((a, b) => {
  const a_name = a.name;
  const b_name = b.name;
  if (a_name < b_name) {
    return -1;
  }
  if (a_name > b_name) {
    return 1;
  }
  return 0;
});

let project_strings: string = '';
for (const project of project_sorted) {
  const name = project.name;
  const content = Deno.readTextFileSync(`src/content/projects/${name}`);

  project_strings += `<section class="project">\n${parse(
    content
  )}\n</section>\n`;
}

const year = new Date().getFullYear();
const experience = year - 2017;
const rust = year - 2022;
const job = year - 2021;

main = main.replace('$xp', experience.toString());
main = main.replace('$year', year.toString());
main = main.replace('$rust', rust.toString());

main = main.replace('{tldr}', parse(tldr));
main = main.replace(
  '{testimony}',
  parse(testimony.replace('$job', job.toString()))
);
main = main.replace('{projects}', project_strings);

Deno.mkdirSync('dist/', { recursive: true });
Deno.writeTextFileSync('dist/index.html', main);
Deno.copyFileSync('src/style.css', 'dist/style.css');
Deno.copyFileSync('src/fav.png', 'dist/fav.png');
Deno.copyFileSync('src/banner.jpg', 'dist/banner.jpg');
