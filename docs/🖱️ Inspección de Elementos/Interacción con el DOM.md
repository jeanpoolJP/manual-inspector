# Interacción con el DOM

El DOM (Document Object Model) es una representación estructural de los elementos HTML de una página web. El Inspector de Elementos te permite interactuar directamente con el DOM, lo que te ayuda a modificar, depurar y entender mejor la estructura de la página. Aquí te explicamos cómo puedes interactuar con el DOM usando el Inspector de Elementos.

---

## 🧱 Explorar el DOM

El panel de **HTML** en el Inspector te permite explorar el DOM como un árbol jerárquico, donde cada etiqueta HTML se representa como un nodo. Algunas acciones que puedes hacer son:

- **Expandir y colapsar nodos**: Puedes ver la estructura completa de la página expandiendo los elementos.
- **Navegar entre elementos**: Puedes hacer clic sobre cualquier nodo en el árbol y ver su contenido o propiedades.
  
> Esta exploración es útil para entender cómo se organiza la página y para localizar elementos rápidamente.

---

## ✍️ Modificar el DOM

El Inspector también permite modificar el DOM en tiempo real:

- **Editar el contenido HTML**: Como se explicó anteriormente, puedes cambiar el texto o atributos de cualquier elemento HTML.
- **Añadir o eliminar nodos**: Puedes agregar nuevos elementos dentro de otros o eliminar nodos del DOM.

> Estas modificaciones son temporales, y solo afectan a la vista local de la página, permitiéndote probar cómo se verían esos cambios antes de hacer modificaciones permanentes.

---

## 🎯 Agregar Eventos JavaScript

Desde el panel del DOM, puedes:

1. **Agregar eventos** directamente sobre los elementos seleccionados. Por ejemplo, puedes añadir un evento `click` a un botón para probar su funcionamiento.
2. **Ver eventos existentes**: Puedes inspeccionar los eventos que ya están asociados con un elemento (por ejemplo, ver qué funciones de JavaScript se ejecutan cuando haces clic en un botón).

> Esto te permite depurar interacciones JavaScript y probar funciones sin tener que modificar directamente el código fuente.

---

## 🖥️ Depuración en Vivo

Una de las mayores ventajas de interactuar con el DOM es que puedes realizar cambios en vivo para probar el comportamiento de la página. Algunas utilidades incluyen:

- **Añadir clases o estilos** a elementos para ver cómo cambian en tiempo real.
- **Probar cambios de contenido** sin tener que editar archivos HTML o recargar la página.

> Esto es muy útil cuando necesitas ver rápidamente cómo se afectan otros elementos al cambiar uno solo o cuando estás depurando la interacción entre el DOM y JavaScript.

---

## 📜 Inspección y Manipulación Avanzada

El Inspector de Elementos también te permite realizar manipulaciones más avanzadas del DOM utilizando JavaScript:

- Puedes **acceder y modificar elementos** del DOM mediante la consola JavaScript (abriendo la pestaña **Console** y usando comandos de JavaScript).
- Usar funciones como `document.getElementById()`, `document.querySelector()`, entre otras, para seleccionar y modificar elementos.

> Esto te da un control total sobre el DOM, permitiéndote interactuar con la página a nivel de programación y probar cambios sin necesidad de reescribir todo el código.

---

🎯 **Siguiente paso:** Aprende cómo usar la consola para manipular el DOM en la sección [Interaccion-con-la-Console](../../interaccion-con-la-console/Interaccion-con-la-Console.md).
