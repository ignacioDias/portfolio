# Portfolio — Ignacio Dias Gundin

Portfolio personal de [Ignacio Dias Gundin](https://ignaciodias.dev), desarrollador backend y estudiante de la Licenciatura en Ciencias de la Computación en la Universidad Nacional de Río Cuarto.

Sitio estático en vivo: [ignaciodias.dev](https://ignaciodias.dev)

## Tecnologías

- [Astro](https://astro.build/) con salida estática
- HTML, CSS y JavaScript vanilla en el cliente
- Sin framework de UI

## Comandos

```bash
npm install    # instalar dependencias
npm run dev    # servidor de desarrollo en localhost
npm run build  # generar el sitio estático en dist/
npm run preview # previsualizar el build local
```

## Estructura

```
.
├── astro.config.mjs
├── package.json
├── public/
│   ├── CNAME
│   ├── cv.pdf
│   ├── images/              # Imágenes de proyectos y perfil
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/          # Secciones y tarjetas Astro
│   ├── data/
│   │   ├── projects.json    # Datos de los proyectos
│   │   └── tags.js          # Iconos y colores de tecnologías
│   ├── i18n/
│   │   └── translations.js  # Textos en español e inglés
│   ├── layouts/
│   │   └── BaseLayout.astro # Head, SEO, header, footer y scripts
│   ├── pages/
│   │   └── index.astro      # Página principal
│   ├── scripts/             # i18n, filtros y copia de correo
│   └── styles/
│       └── global.css
└── dist/                    # Salida del build (generada)
```

## Cómo editar los proyectos

Los proyectos se definen en `src/data/projects.json`. Cada entrada sigue este esquema:

```json
{
  "title": "Nombre del proyecto",
  "title_en": "Project name",
  "description": "Descripción profesional del proyecto.",
  "description_en": "Professional project description.",
  "github": "https://github.com/ignacioDias/repositorio",
  "link": "https://url-opcional-del-demo",
  "image": "/images/imagen.webp",
  "tags": ["GOLANG", "POSTGRES", "JS"]
}
```

Los `tags` deben coincidir con las claves definidas en `src/data/tags.js`. Las imágenes se colocan en `public/images/`.

## Despliegue

El sitio se publica automáticamente en GitHub Pages al hacer push a la rama `main`. El workflow (`.github/workflows/static.yml`) instala dependencias, ejecuta `npm run build` y publica `dist/`. El dominio personalizado está definido en `public/CNAME`.
