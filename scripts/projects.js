import { TAGS } from "./tags.js";
import { getLang, onLanguageChange } from "./i18n.js";

let PROJECTS = [];

async function init() {
  const res = await fetch("./src/json/projects.json");
  PROJECTS = await res.json();
  renderProjects();
}

function localize(project) {
  const en = getLang() === "en";
  return {
    title: en && project.title_en ? project.title_en : project.title,
    description:
      en && project.description_en
        ? project.description_en
        : project.description,
  };
}

function renderProjects() {
  const projectContainer = document.getElementById("projects-list");
  projectContainer.innerHTML = "";

  PROJECTS.forEach((project) => {
    const { title, description } = localize(project);
    const tagObjects = project.tags.map((tagId) => TAGS[tagId]);

    const article = document.createElement("article");
    article.className = "project-card";

    article.innerHTML = `
      <div class="project-img-col">
        <div class="project-image-wrapper">
          <img src="${project.image}" alt="${title}" class="project-image" loading="lazy"/>
        </div>
      </div>

      <div class="project-info-col">
        <h3>${title}</h3>

        <ul class="project-tags">
          ${tagObjects
            .map(
              (t) =>
                `<li>
                <span class="tag-badge ${t.class}" data-tech="${t.name}">
                  ${t.icon}${t.name}
                </span>
              </li>`,
            )
            .join("")}
        </ul>

        <p class="project-description">${description}</p>

        <footer class="project-footer">
          ${
            project.github
              ? `
          <a href="${project.github}" class="project-link-btn" target="_blank" rel="noopener">
            <svg class="icon" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V25"></path></svg>
            Code
          </a>
        `
              : ""
          }
        ${
          project.link
            ? `
          <a href="${project.link}" class="project-link-btn" target="_blank" rel="noopener">
            <svg class="icon" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 14L21 3m0 0v7m0-7h-7"/><path d="M21 21H3V3h7"/></svg>
            Preview
          </a>
        `
            : ""
        }

        </footer>
      </div>
    `;

    projectContainer.appendChild(article);
  });
}

onLanguageChange(() => renderProjects());
init();
