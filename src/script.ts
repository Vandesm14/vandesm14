import { marked } from 'marked';
import $ from 'cash-dom';
import metadataParser from 'markdown-yaml-metadata-parser';

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
  return await fetch(`${PROJECTS_PATH}/projects.json`).then((r) => r.json());
}

async function fetchProject(name: string) {
  const projectContent = await fetch(`${PROJECTS_PATH}/${name}.md`).then((r) =>
    r.text()
  );
  const parsed = metadataParser<Project>(projectContent);
  return { ...parsed.metadata, content: marked(parsed.content) };
}

function appendProjects(projects: Project[]) {
  projects.map((project) => {
    $('#projects').append(`
    <div class="project">
      <h2>${project.name}</h2>
      <div class="project-content">${project.content}</div>
    </div>
  `);
  });
}

(async () => {
  const projectList = await fetchProjectList();
  const projects: Project[] = await Promise.all(
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
