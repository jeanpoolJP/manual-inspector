// @ts-check

// Esto se ejecuta en Node.js - No uses código del lado del cliente aquí (APIs de navegador, JSX...)

/**
 * Crear una barra lateral te permite:
 - crear un grupo ordenado de documentos
 - mostrar una barra lateral para cada documento de ese grupo
 - proporcionar navegación de siguiente/anterior

 Las barras laterales se pueden generar desde el sistema de archivos, o definirse explícitamente aquí.

 Crea tantas barras laterales como desees.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {

  tutorialSidebar: [
    {
      type: 'category',
      label: '🔍 Introducción',
      items: [
        '🔍 Introducción/- Qué es el Inspector',
        '🔍 Introducción/- Beneficios para desarrolladores',
      ]
    },
    {
      type: 'category',
      label: '🧭 Acceso al Inspector',
      items: [
        '🧭 Acceso al Inspector/- Métodos de acceso',
        '🧭 Acceso al Inspector/- Atajos y menú',
      ],
    },
    {
      type: 'category',
      label: '🧱 Interfaz Básica',
      items: [
        '🧱 Interfaz Básica/Secciones principales HTML CSS Console Network',
        '🧱 Interfaz Básica/Función de cada sección',
      ],
    },
    {
      type: 'category',
      label: '🖱️ Inspección de Elementos',
      items: [
        '🖱️ Inspección de Elementos/Selección de elementos',
        '🖱️ Inspección de Elementos/Modificación del HTML',
        '🖱️ Inspección de Elementos/Interacción con el DOM',
      ],
    },
    {
      type: 'category',
      label: '🎨 Edición de CSS',
      items: [
        '🎨 Edición de CSS/Ver y editar estilos',
        '🎨 Edición de CSS/Modificar en tiempo real',
      ],
    },
    {
      type: 'category',
      label: '💻 Consola y Depuración',
      items: [
        '💻 Consola y Depuración/Errores y mensajes de JavaScript',
        '💻 Consola y Depuración/Depuración con breakpoints',
      ],
    },
    {
      type: 'category',
      label: '🌐 Análisis de Red',
      items: [
        '🌐 Análisis de Red/Solicitudes de red',
        '🌐 Análisis de Red/Revisión de imágenes y scripts',
      ],
    },
    {
      type: 'category',
      label: '⚡ Rendimiento',
      items: [
        '⚡ Rendimiento/Herramientas de rendimiento',
        '⚡ Rendimiento/Optimización de carga',
      ],
    },
    {
      type: 'category',
      label: '🧰 Herramientas Avanzadas',
      items: [
        '🧰 Herramientas Avanzadas/Inspección de cookies y almacenamiento',
        '🧰 Herramientas Avanzadas/Modificación de datos web',
      ],
    },
    {
      type: 'category',
      label: '✅ Consejos y Buenas Prácticas',
      items: [
        '✅ Consejos y Buenas Prácticas/Uso eficiente del Inspector',
        '✅ Consejos y Buenas Prácticas/Herramientas y trucos útiles',
      ],
    },
    {
      type: 'category',
      label: '📚 Recursos Adicionales',
      items: [
        '📚 Recursos Adicionales/Documentación de navegadores',
        '📚 Recursos Adicionales/Tutoriales y guías',
      ],
    },

  ]

};

export default sidebars;
