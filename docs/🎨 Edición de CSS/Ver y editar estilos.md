# Ver y Editar Estilos

Una de las funcionalidades más útiles del Inspector de Elementos es la capacidad de ver y editar los estilos CSS de cualquier elemento en tiempo real. Esto te permite experimentar con el diseño de una página y solucionar problemas de estilos de manera rápida. A continuación, te mostramos cómo usar esta herramienta para modificar los estilos de los elementos.

---

## 🎨 Ver los Estilos Aplicados

1. **Selecciona un elemento** en la página usando el Inspector de Elementos (como se explicó en las secciones anteriores).
2. En la pestaña **CSS** del panel derecho, verás todas las reglas de estilo aplicadas a ese elemento.
   
   - Las reglas se muestran por orden de prioridad, y puedes ver tanto los estilos **inline** como los **heredados** de las hojas de estilo externas.
   - Si hay propiedades **sobrescritas**, aparecerán tachadas, lo que te permite ver fácilmente qué estilos se están aplicando realmente al elemento.

---

## ✏️ Editar los Estilos en Tiempo Real

Una de las ventajas del Inspector es que puedes modificar los estilos directamente desde el panel de CSS:

1. **Haz clic en una propiedad CSS** (por ejemplo, `color`, `font-size`, etc.) para editar su valor.
2. **Cambia el valor** de la propiedad (puedes escribir un nuevo valor o elegir uno de la lista desplegable si es una propiedad con valores predeterminados).
3. **Presiona Enter** para aplicar el cambio en la página.

> Los cambios se verán reflejados inmediatamente en la página, lo que te permite ajustar el diseño sobre la marcha.

---

## 🖌️ Agregar Nuevas Propiedades CSS

Si deseas probar nuevas propiedades CSS, puedes agregar nuevas reglas al estilo de un elemento:

1. En la pestaña de **CSS**, haz clic en el área en blanco debajo de las reglas actuales.
2. Escribe el nombre de la propiedad CSS que deseas agregar (por ejemplo, `background-color`).
3. Luego, introduce el valor de la propiedad (por ejemplo, `#ff0000` para rojo).

> Este método es útil para probar cambios de estilo sin necesidad de editar el archivo CSS original.

---

## 🚫 Desactivar Propiedades de Estilo

Si quieres ver cómo se ve un elemento sin una propiedad específica:

1. **Haz clic en la casilla de verificación** junto a una propiedad CSS.
2. Desmarcarla desactivará la propiedad y verás cómo cambia el estilo del elemento.

> Esta opción es útil para comparar cómo afecta o no una propiedad al diseño de un elemento.

---

## 🔄 Ver los Estilos Heredados

En el Inspector de Elementos, puedes ver fácilmente los estilos heredados que un elemento recibe de sus padres o de otras reglas:

- Los estilos heredados suelen estar **en gris** y pueden venir de reglas aplicadas a un contenedor o a la etiqueta `body`.
- Esto te ayuda a entender de dónde provienen ciertos estilos, lo cual es útil cuando intentas resolver problemas de diseño causados por reglas heredadas.

---

## 📋 Copiar y Pegar Estilos

El Inspector de Elementos te permite copiar las reglas CSS de un elemento para reutilizarlas:

1. Haz clic derecho sobre cualquier propiedad en el panel de CSS.
2. Selecciona **"Copiar declaración"** para copiar toda la regla CSS.
3. Pega la regla en tu archivo CSS o en otra sección del Inspector.

> Esto es útil cuando deseas aplicar rápidamente un estilo similar a otros elementos sin tener que escribir la misma regla manualmente.

---

🎯 **Siguiente paso:** Aprende a depurar y optimizar el rendimiento de la página en la sección [Optimizar-el-rendimiento](../../optimizar-el-rendimiento/Optimizar-el-rendimiento.md).
