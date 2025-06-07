const TAGS = {
    JS: {
        name: 'JavaScript',
        icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-javascript"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M7.5 8h3v8l-2 -1" /><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" /></svg>',
        class: "bg-yellow text-darkgray"
    },
    HTML: {
        name: 'HTML',
        icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-html5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" /></svg>',
        class: "bg-orange text-white"
    }
}

const PROJECTS = [
    {
        title: 'MonkeyType Clone',
        description: 'Monkeytype es una plataforma en línea para practicar mecanografía. Ofrece ejercicios de tipeo en diferentes modos (palabras, oraciones, código, etc.) y permite medir la velocidad (WPM), precisión y consistencia del usuario. Es conocida por su diseño minimalista, alta personalización y estadísticas detalladas. Es popular entre quienes quieren mejorar su velocidad de escritura y competir con otros.',
        link: 'https://ignaciodias.github.io/monkeytype-clone/',
        github: 'https://github.com/ignacioDias/monkeytype-clone/',
        image: 'src/monkeytype-clone.webp',
        tags: [TAGS.HTML, TAGS.JS]
    }
]

const projectsList = document.getElementById('projects-list');

PROJECTS.forEach(({ image, title, description, tags }) => {
  const article = document.createElement('article');

  article.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
    <ul class="project-tags">
      ${tags.map(tag => `
        <li>
          <span class="tag-badge ${tag.class}">
            ${tag.icon}
            ${tag.name}
          </span>
        </li>
      `).join('')}
    </ul>
    <img src="${image}" alt="Screenshot del proyecto ${title}" />
  `;

  projectsList.appendChild(article);
});