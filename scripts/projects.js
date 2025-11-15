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
    C_LANGUAGE: {
        name: 'C',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-brand-c"><circle cx="12" cy="12" r="10"/><path d="M16 10a4 4 0 1 0 0 4"/></svg>',
        class: "bg-blue text-white"
    },
    JAVA: {
      name: 'Java',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-brand-c"><circle cx="12" cy="12" r="10"/><path d="M16 10a4 4 0 1 0 0 4"/></svg>',
      class: "bg-orange text-white"
    },
    SPRING: {
      name: 'Spring',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-brand-c"><circle cx="12" cy="12" r="10"/><path d="M16 10a4 4 0 1 0 0 4"/></svg>',
      class: "bg-green text-white"
    },
    NODE: {
      name: 'NodeJS',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon" fill="none" aria-hidden="true">'
        + '<path d="M12 2l7 4v8l-7 4-7-4V6l7-4z" fill="#3C873A"/>'
        + '<path d="M12 6.5l4 2.2v4.6l-4 2.2-4-2.2v-4.6l4-2.2z" fill="#68A063"/>'
        + '<path d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#ffffff" opacity="0.06"/>'
      + '</svg>',
      class: "bg-darkgreen text-white"
    }
}

const PROJECTS = [
    {
        title: 'Compilador',
        description: 'Desarrollamos un compilador para un lenguaje propio. Usando Bison y Flex.',
        github: 'https://github.com/ignacioDias/final-project-compilador',
        image: 'src/compilator.webp',
        tags: [TAGS.C_LANGUAGE]
    },
    {
        title: 'Implementación de Hash Table',
        description: 'Desarrollé una implementación de dicha estructura de datos con el algoritmo FNV-1a',
        github: 'https://github.com/ignacioDias/hash-table-in-c',
        image: 'src/hash-table.webp',
        tags: [TAGS.C_LANGUAGE]
    },
    {
        title: 'MonkeyType Clone',
        description: 'Monkeytype permite practicar mecanografía. Ofrece ejercicios de tipeo en diferentes modos y permite medir la velocidad, precisión y consistencia.',
        link: 'https://ignaciodias.github.io/monkeytype-clone/',
        github: 'https://github.com/ignacioDias/monkeytype-clone/',
        image: 'src/monkeytype-clone.webp',
        tags: [TAGS.HTML, TAGS.JS]
    },
      {
        title: 'Tesis',
        description: 'Mi Tesis de Grado. Usando NodeJS, la idea es genera un software que permita a los niños introducirse en el mundo de la programación usando Blockly de Google como herramienta.',
        github: 'https://github.com/ignacioDias/drawing-with-blockly',
        image: 'src/monkeytype-clone.webp',
        tags: [TAGS.HTML, TAGS.JS, TAGS.NODE]
    },
    {
        title: 'Sitio Web Para un Restaurante',
        description: 'Sitio web simple hecho usando NodeJS y Webpack.',
        github: 'https://github.com/ignacioDias/webpack-restaurant-project',
        image: 'src/restaurant.webp',
        tags: [TAGS.HTML, TAGS.JS, TAGS.NODE]
    },
    {
        title: 'Portfolio',
        description: 'Sitio web personal donde muestro mis conocimientos y cuento un poco sobre mí.',
        github: 'https://github.com/ignacioDias/portfolio',
        image: 'src/portfolio.webp',
        tags: [TAGS.HTML, TAGS.JS]
    },
    {
        title: 'Sistena de biblioteca',
        description: 'Pequeño sistema para almacenar libros.',
        link: 'https://ignaciodias.github.io/library-js/',
        github: 'https://github.com/ignacioDias/library-js',
        image: 'src/library.webp',
        tags: [TAGS.HTML, TAGS.JS]
    },
      {
        title: 'Spy',
        description: 'Spy es un juego hecho con Javascript, donde varios jugadores tienen que adivinar quién es el espía. La idea es elegir una categoría e irse pasando el celular hasta asegurar los roles.',
        link: 'https://ignaciodias.github.io/spy/',
        github: 'https://github.com/ignacioDias/spy',
        image: 'src/spy.webp',
        tags: [TAGS.HTML, TAGS.JS]
    },
    {
        title: 'etch-a-sketch',
        description: 'etch-a-sketch es una pizarra simple que permite pintar, implementada con Javascript, HTML y CSS.',
        link: 'https://ignaciodias.github.io/etch-a-sketch/',
        github: 'https://github.com/ignacioDias/etch-a-sketch',
        image: 'src/sketch.webp',
        tags: [TAGS.HTML, TAGS.JS]
    },
    {
        title: 'Calculadora',
        description: 'Simple calculadora implementada con Javascript, html y css.',
        link: 'https://ignaciodias.github.io/calculator/',
        github: 'https://github.com/ignacioDias/calculator',
        image: 'src/calculator.webp',
        tags: [TAGS.HTML, TAGS.JS]
    },
    {
        title: 'Piedra, papel o tijeras',
        description: 'Simple juego implementado con Javascript, html y css.',
        link: 'https://ignaciodias.github.io/rock-paper-scissors/',
        github: 'https://github.com/ignacioDias/rock-paper-scissors',
        image: 'src/rock.webp',
        tags: [TAGS.HTML, TAGS.JS]
    },
    {
        title: 'Pokémon Java',
        description: 'Pokémon de terminal simple que busca mostrar buenas prácticas de la POO.',
        github: 'https://github.com/ignacioDias/pokemon-java',
        image: 'src/pokemon.webp',
        tags: [TAGS.JAVA]
    },
    {
        title: 'TODO-APP',
        description: 'Simple TODO-APP hecha con Spring boot.',
        github: 'https://github.com/ignacioDias/todoapp-springboot',
        image: 'src/monkeytype-clone.webp',
        tags: [TAGS.JAVA, TAGS.SPRING]
    }, 

]

// ====== FUNCIÓN PARA RENDERIZAR PROYECTOS ======
function renderProjects(filterTech = null) {
  const projectContainer = document.getElementById("projects-list");
  projectContainer.innerHTML = "";

  const filtered = filterTech
    ? PROJECTS.filter(p =>
        p.tags.some(tag => tag.name.toLowerCase() === filterTech.toLowerCase())
      )
    : PROJECTS;

  filtered.forEach(({ image, title, description, tags, link, github }) => {
    const article = document.createElement("article");
    article.className = "project-card";

    article.innerHTML = `
      <div class="project-img-col">
        <div class="project-image-wrapper">
          <img src="${image}" alt="${title}" class="project-image" loading="lazy"/>
        </div>
      </div>

      <div class="project-info-col">
        <h3>${title}</h3>

        <ul class="project-tags">
          ${tags
            .map(tag => `<li><span class="tag-badge ${tag.class}" data-tech="${tag.name}">${tag.icon || ''}${tag.name}</span></li>`)
            .join("")}
        </ul>

        <p class="project-description">${description}</p>

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
       projectContainer.appendChild(article);
  });
}

// Render immediately so projects exist before other scripts attach listeners
renderProjects();
