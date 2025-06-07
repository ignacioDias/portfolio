const TAGS = []

const PROJECTS = [
    {
        title: 'MonkeyType Clone',
        description: 'Monkeytype es una plataforma en línea para practicar mecanografía. Ofrece ejercicios de tipeo en diferentes modos (palabras, oraciones, código, etc.) y permite medir la velocidad (WPM), precisión y consistencia del usuario. Es conocida por su diseño minimalista, alta personalización y estadísticas detalladas. Es popular entre quienes quieren mejorar su velocidad de escritura y competir con otros.',
        link: 'https://ignaciodias.github.io/monkeytype-clone/',
        github: 'https://github.com/ignacioDias/monkeytype-clone/',
        image: '../src/monkeytype-clone.webp',
        tags: ['TECH', 'CSS', 'JS']
    }
]

const projectsList = document.getElementById('projects-list');

PROJECTS.forEach(({ image, title, description, tags }) => {
    const article = document.createElement('article');
    article.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <ul>
            ${tags.map(tag => `<li>${tag}</li>`).join('')}
        </ul>
        <img src="${image}" alt="Screenshot del proyecto ${image}" />
    `;
    projectsList.appendChild(article);
});