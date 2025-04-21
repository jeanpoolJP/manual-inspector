# Depuración con Breakpoints

El uso de breakpoints (puntos de interrupción) es una técnica fundamental para la depuración de código JavaScript. Los breakpoints permiten pausar la ejecución del código en un punto específico y examinar el estado de las variables, el flujo de ejecución y la pila de llamadas. Esta técnica es especialmente útil cuando el código no se comporta como se espera, ya que te permite inspeccionar cada parte del proceso en detalle.

---

## 🛑 ¿Qué son los Breakpoints?

Un **breakpoint** es una marca en una línea de código que le dice al depurador que debe detenerse en esa línea antes de ejecutar el código siguiente. Cuando la ejecución se detiene, puedes inspeccionar el valor de las variables, ver la pila de llamadas, e incluso cambiar el valor de algunas variables para probar diferentes escenarios.

---

## 🧩 Cómo Usar Breakpoints en el Inspector de Elementos

1. **Abrir las herramientas de desarrollo**: Asegúrate de tener abiertas las herramientas de desarrollo en tu navegador y navega a la pestaña **Sources** (Fuentes).
   
2. **Seleccionar el archivo JavaScript**: En el panel de la izquierda, busca y selecciona el archivo JavaScript en el que quieres establecer el breakpoint. Puedes encontrar los archivos en la sección de **file navigator**.

3. **Establecer el breakpoint**: Haz clic en el número de línea donde quieres que se detenga la ejecución del código. Esto agregará un punto de interrupción en esa línea.
   
   - Si hay un **punto de interrupción activo**, la línea se resaltará en azul.
   
4. **Recargar la página**: Para activar los breakpoints, recarga la página o ejecuta el código que lleva al punto donde agregaste el breakpoint.

---

## 🚶‍♂️ Cómo Funciona la Ejecución con Breakpoints

Cuando el código alcanza una línea con un breakpoint, la ejecución se detiene y verás que el código se resalta en la consola. En ese momento puedes realizar varias acciones, tales como:

1. **Inspeccionar variables**: Verifica el valor de las variables en ese momento de la ejecución.
2. **Paso a paso**: Puedes ejecutar las líneas de código una por una usando las opciones de "Step Over", "Step Into", y "Step Out".
   
   - **Step Over**: Ejecuta la línea actual y se mueve a la siguiente.
   - **Step Into**: Entra en una función llamada en la línea actual.
   - **Step Out**: Si estás dentro de una función, sale y continúa con el código después de la función.

3. **Continuar la ejecución**: Después de inspeccionar las variables y la pila de llamadas, puedes hacer que la ejecución continúe normalmente con el botón **Resume** o continuar paso a paso con los botones **Step**.

---

## ⚙️ Opciones Adicionales al Usar Breakpoints

- **Condicionales**: Puedes establecer breakpoints condicionales que solo se activan si una determinada condición se cumple. Esto es útil para depurar bucles o funciones que se ejecutan muchas veces.

   - **Cómo usar**: Haz clic derecho en el breakpoint y selecciona "Edit breakpoint". Luego, ingresa una expresión que debe ser verdadera para que el breakpoint se active.

- **Logpoints**: En lugar de detener la ejecución, un **logpoint** te permite imprimir un mensaje en la consola cuando se alcanza una línea específica sin detener el flujo de ejecución.

   - **Cómo usar**: Haz clic derecho en el número de línea donde quieres agregar un logpoint y selecciona "Add logpoint". Escribe el mensaje que quieres ver en la consola.

---

## 🧑‍💻 Consejos para Depurar con Breakpoints

- **Usa breakpoints en funciones clave**: Coloca breakpoints en funciones que consideres críticas para la ejecución, como aquellas que procesan datos importantes o interactúan con elementos del DOM.
- **Realiza pasos breves**: No te apresures al usar breakpoints. Tómate tu tiempo para inspeccionar cada línea y cada valor de las variables antes de proceder.
- **Desactiva breakpoints cuando ya no los necesites**: Después de realizar la depuración, elimina los breakpoints innecesarios para evitar que interrumpan la ejecución de tu código en el futuro.

---

## 🔄 Eliminar o Desactivar Breakpoints

Si ya no necesitas un breakpoint, puedes eliminarlo fácilmente:

1. **Haz clic en el número de línea** del breakpoint para quitarlo.
2. **Haz clic derecho sobre el breakpoint** y selecciona "Remove breakpoint" (Eliminar breakpoint).

También puedes **desactivar temporalmente** los breakpoints sin eliminarlos, desmarcando la casilla de "Pause on exceptions" en la barra de herramientas de la pestaña **Sources**.

---

🎯 **Siguiente paso:** Ahora que sabes cómo utilizar breakpoints, es hora de explorar más herramientas de depuración, como las herramientas de **networking** y **performance**, en la sección [Depuración-avanzada](../../depuracion-avanzada/Depuracion-avanzada.md).
