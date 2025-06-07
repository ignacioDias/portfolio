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
    },
    C: {
        name: 'C',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-brand-c"><circle cx="12" cy="12" r="10"/><path d="M16 10a4 4 0 1 0 0 4"/></svg>',
        class: "bg-blue text-white"
    }
}

const PROJECTS = [
    {
        title: 'MonkeyType Clone',
        description: 'Monkeytype es una plataforma en línea para practicar mecanografía. Ofrece ejercicios de tipeo en diferentes modos (palabras, oraciones, código, etc.) y permite medir la velocidad (WPM), precisión y consistencia del usuario.',
        link: 'https://ignaciodias.github.io/monkeytype-clone/',
        github: 'https://github.com/ignacioDias/monkeytype-clone/',
        image: 'src/monkeytype-clone.webp',
        tags: [TAGS.HTML, TAGS.JS]
    },
        {
        title: 'Compilador',
        description: 'Desarrollamos un compilador para un lenguaje propio. Usando Bison y Flex.',
        github: 'https://github.com/ignacioDias/final-project-compilador',
        image: 'src/compilator.webp',
        tags: [TAGS.C]
    }
]

const projectsList = document.getElementById('projects-list');

PROJECTS.forEach(({ image, title, description, tags, link, github }) => {
  const article = document.createElement('article');
    article.className = 'project-card';

  article.innerHTML = `
    <div class="project-img-col">
      <div class="project-image-wrapper">
        <img 
          src="${image}" 
          alt="Screenshot del proyecto ${title}" 
          class="project-image"
          loading="lazy"
        />
      </div>
    </div>
    <div class="project-info-col">
      <h3 class="project-title">${title}</h3>
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
      <div class="project-description">${description}</div>
      <footer class="project-footer">
        ${github ? `
          <a href="${github}" class="project-link-btn" target="_blank" rel="noopener">
            <svg class="icon" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V25"></path></svg>
            Code
          </a>
        ` : ''}
        ${link ? `
          <a href="${link}" class="project-link-btn" target="_blank" rel="noopener">
            <svg class="icon" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 14L21 3m0 0v7m0-7h-7"/><path d="M21 21H3V3h7"/></svg>
            Preview
          </a>
        ` : ''}
      </footer>
    </div>
  `;

  projectsList.appendChild(article);
});