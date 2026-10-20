# Portfolio — Ignacio Dias Gundin

Portfolio personal de [Ignacio Dias Gundin](https://idias.me), desarrollador backend y estudiante de la Licenciatura en Ciencias de la Computación en la Universidad Nacional de Río Cuarto.

Sitio estático en vivo: [idias.me](https://idias.me)

## Tecnologías

- HTML, CSS y JavaScript vanilla
- Sin frameworks ni build step

## Estructura

```
.
├── index.html              # Página principal
├── style/
│   └── style.css           # Estilos
├── scripts/
│   ├── projects.js         # Renderizado de proyectos
│   ├── script.js           # Filtro de tecnologías y copia de correo
│   └── tags.js             # Tags de tecnologías
├── src/
│   ├── json/projects.json  # Datos de los proyectos
│   ├── cv.pdf              # Currículum descargable
│   └── *.webp              # Imágenes
├── robots.txt
└── sitemap.xml
```

## Cómo editar los proyectos

Los proyectos se definen en `src/json/projects.json`. Cada entrada sigue este esquema:

```json
{
  "title": "Nombre del proyecto",
  "description": "Descripción profesional del proyecto.",
  "github": "https://github.com/ignacioDias/repositorio",
  "link": "https://url-opcional-del-demo",
  "image": "src/imagen.webp",
  "tags": ["GOLANG", "POSTGRES", "JS"]
}
```

Los `tags` deben coincidir con las claves definidas en `scripts/tags.js`.

## Despliegue

El sitio se publica automáticamente en GitHub Pages al hacer push a la rama `main` (ver `.github/workflows/`). El dominio personalizado está definido en `CNAME`.
