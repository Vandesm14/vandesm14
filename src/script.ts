import { marked } from 'marked';
import $ from 'cash-dom';

const PROJECTS_PATH = '/content/projects';

type Project = {
  name: string;
  description: string;
  source?: string;
  website?: string;

  content: string;

  images: string[];
};

async function fetchProjectList(): Promise<string[]> {
  const text = await fetch(`${PROJECTS_PATH}/projects.txt`).then((r) =>
    r.text()
  );
  return text.split('\n').filter((line) => line.trim() !== '');
}

async function fetchProject(name: string) {
  const content = await fetch(`${PROJECTS_PATH}/${name}.md`).then((r) =>
    r.text()
  );
  return marked(content);
}

function appendProjects(projects: string[]) {
  projects.map((project) => {
    $('#projects').append(`
    <div class="project">
      <div class="project-content">${project}</div>
    </div>
  `);
  });
}

(async () => {
  const projectList = await fetchProjectList();
  const projects: string[] = await Promise.all(
    projectList.map(async (name) => fetchProject(name))
  );

  appendProjects(projects);

  const currentYear = new Date().getFullYear();
  const experience = currentYear - 2017;
  const job = currentYear - 2021;

  $('header').html($('header').html().replace('$xp', experience.toString()));

  const tldr = await fetch('/content/tldr.md').then((r) => r.text());
  $('#tldr').html(marked(tldr));

  const testimony = await fetch('/content/testimony.md').then((r) => r.text());
  $('#testimony').html(marked(testimony.replace('$job', job.toString())));
})();
