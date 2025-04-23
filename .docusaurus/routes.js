import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus/blog',
    component: ComponentCreator('/docusaurus/blog', 'bf3'),
    exact: true
  },
  {
    path: '/docusaurus/blog/archive',
    component: ComponentCreator('/docusaurus/blog/archive', '33c'),
    exact: true
  },
  {
    path: '/docusaurus/blog/authors',
    component: ComponentCreator('/docusaurus/blog/authors', 'd06'),
    exact: true
  },
  {
    path: '/docusaurus/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/docusaurus/blog/authors/all-sebastien-lorber-articles', '834'),
    exact: true
  },
  {
    path: '/docusaurus/blog/authors/yangshun',
    component: ComponentCreator('/docusaurus/blog/authors/yangshun', '00d'),
    exact: true
  },
  {
    path: '/docusaurus/blog/first-blog-post',
    component: ComponentCreator('/docusaurus/blog/first-blog-post', '73e'),
    exact: true
  },
  {
    path: '/docusaurus/blog/long-blog-post',
    component: ComponentCreator('/docusaurus/blog/long-blog-post', '05f'),
    exact: true
  },
  {
    path: '/docusaurus/blog/mdx-blog-post',
    component: ComponentCreator('/docusaurus/blog/mdx-blog-post', '5c8'),
    exact: true
  },
  {
    path: '/docusaurus/blog/tags',
    component: ComponentCreator('/docusaurus/blog/tags', 'd3e'),
    exact: true
  },
  {
    path: '/docusaurus/blog/tags/docusaurus',
    component: ComponentCreator('/docusaurus/blog/tags/docusaurus', '7b8'),
    exact: true
  },
  {
    path: '/docusaurus/blog/tags/facebook',
    component: ComponentCreator('/docusaurus/blog/tags/facebook', '184'),
    exact: true
  },
  {
    path: '/docusaurus/blog/tags/hello',
    component: ComponentCreator('/docusaurus/blog/tags/hello', 'a4f'),
    exact: true
  },
  {
    path: '/docusaurus/blog/tags/hola',
    component: ComponentCreator('/docusaurus/blog/tags/hola', '51d'),
    exact: true
  },
  {
    path: '/docusaurus/blog/welcome',
    component: ComponentCreator('/docusaurus/blog/welcome', '522'),
    exact: true
  },
  {
    path: '/docusaurus/markdown-page',
    component: ComponentCreator('/docusaurus/markdown-page', '34d'),
    exact: true
  },
  {
    path: '/docusaurus/docs',
    component: ComponentCreator('/docusaurus/docs', '35e'),
    routes: [
      {
        path: '/docusaurus/docs',
        component: ComponentCreator('/docusaurus/docs', '5d4'),
        routes: [
          {
            path: '/docusaurus/docs',
            component: ComponentCreator('/docusaurus/docs', '9b0'),
            routes: [
              {
                path: '/docusaurus/docs/⚡ Rendimiento/Herramientas de rendimiento',
                component: ComponentCreator('/docusaurus/docs/⚡ Rendimiento/Herramientas de rendimiento', '63f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/⚡ Rendimiento/Optimización de carga',
                component: ComponentCreator('/docusaurus/docs/⚡ Rendimiento/Optimización de carga', 'b12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/✅ Consejos y Buenas Prácticas/Herramientas y trucos útiles',
                component: ComponentCreator('/docusaurus/docs/✅ Consejos y Buenas Prácticas/Herramientas y trucos útiles', 'd7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/✅ Consejos y Buenas Prácticas/Uso eficiente del Inspector',
                component: ComponentCreator('/docusaurus/docs/✅ Consejos y Buenas Prácticas/Uso eficiente del Inspector', '39e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/🌐 Análisis de Red/Revisión de imágenes y scripts',
                component: ComponentCreator('/docusaurus/docs/🌐 Análisis de Red/Revisión de imágenes y scripts', 'a6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/🌐 Análisis de Red/Solicitudes de red',
                component: ComponentCreator('/docusaurus/docs/🌐 Análisis de Red/Solicitudes de red', 'fec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/🎨 Edición de CSS/Modificar en tiempo real',
                component: ComponentCreator('/docusaurus/docs/🎨 Edición de CSS/Modificar en tiempo real', '901'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/🎨 Edición de CSS/Ver y editar estilos',
                component: ComponentCreator('/docusaurus/docs/🎨 Edición de CSS/Ver y editar estilos', 'a86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/💻 Consola y Depuración/Depuración con breakpoints',
                component: ComponentCreator('/docusaurus/docs/💻 Consola y Depuración/Depuración con breakpoints', 'b38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/💻 Consola y Depuración/Errores y mensajes de JavaScript',
                component: ComponentCreator('/docusaurus/docs/💻 Consola y Depuración/Errores y mensajes de JavaScript', '540'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/📚 Recursos Adicionales/Documentación de navegadores',
                component: ComponentCreator('/docusaurus/docs/📚 Recursos Adicionales/Documentación de navegadores', 'c59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/📚 Recursos Adicionales/Tutoriales y guías',
                component: ComponentCreator('/docusaurus/docs/📚 Recursos Adicionales/Tutoriales y guías', '46b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/🔍 Introducción/- Beneficios para desarrolladores',
                component: ComponentCreator('/docusaurus/docs/🔍 Introducción/- Beneficios para desarrolladores', 'fde'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/🔍 Introducción/- Qué es el Inspector',
                component: ComponentCreator('/docusaurus/docs/🔍 Introducción/- Qué es el Inspector', '791'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/🖱️ Inspección de Elementos/Interacción con el DOM',
                component: ComponentCreator('/docusaurus/docs/🖱️ Inspección de Elementos/Interacción con el DOM', 'd2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/🖱️ Inspección de Elementos/Modificación del HTML',
                component: ComponentCreator('/docusaurus/docs/🖱️ Inspección de Elementos/Modificación del HTML', '2f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/🖱️ Inspección de Elementos/Selección de elementos',
                component: ComponentCreator('/docusaurus/docs/🖱️ Inspección de Elementos/Selección de elementos', 'ac3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/🧭 Acceso al Inspector/- Atajos y menú',
                component: ComponentCreator('/docusaurus/docs/🧭 Acceso al Inspector/- Atajos y menú', '2d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/🧭 Acceso al Inspector/- Métodos de acceso',
                component: ComponentCreator('/docusaurus/docs/🧭 Acceso al Inspector/- Métodos de acceso', 'c09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/🧰 Herramientas Avanzadas/Inspección de cookies y almacenamiento',
                component: ComponentCreator('/docusaurus/docs/🧰 Herramientas Avanzadas/Inspección de cookies y almacenamiento', '8ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/🧰 Herramientas Avanzadas/Modificación de datos web',
                component: ComponentCreator('/docusaurus/docs/🧰 Herramientas Avanzadas/Modificación de datos web', '690'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/🧱 Interfaz Básica/Función de cada sección',
                component: ComponentCreator('/docusaurus/docs/🧱 Interfaz Básica/Función de cada sección', '456'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/🧱 Interfaz Básica/Secciones principales HTML CSS Console Network',
                component: ComponentCreator('/docusaurus/docs/🧱 Interfaz Básica/Secciones principales HTML CSS Console Network', 'd1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus/docs/intro',
                component: ComponentCreator('/docusaurus/docs/intro', 'd9b'),
                exact: true
              },
              {
                path: '/docusaurus/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/congratulations', 'b2e'),
                exact: true
              },
              {
                path: '/docusaurus/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/create-a-blog-post', '257'),
                exact: true
              },
              {
                path: '/docusaurus/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/create-a-document', '827'),
                exact: true
              },
              {
                path: '/docusaurus/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/create-a-page', 'edc'),
                exact: true
              },
              {
                path: '/docusaurus/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/deploy-your-site', 'd67'),
                exact: true
              },
              {
                path: '/docusaurus/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docusaurus/docs/tutorial-basics/markdown-features', '538'),
                exact: true
              },
              {
                path: '/docusaurus/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docusaurus/docs/tutorial-extras/manage-docs-versions', '916'),
                exact: true
              },
              {
                path: '/docusaurus/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docusaurus/docs/tutorial-extras/translate-your-site', '06a'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docusaurus/',
    component: ComponentCreator('/docusaurus/', 'c25'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
