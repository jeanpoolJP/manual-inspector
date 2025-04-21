# Revisión de Imágenes y Scripts

Cuando estás desarrollando o depurando una página web, es crucial entender cómo se cargan los recursos como **imágenes** y **scripts**. La pestaña **Network** del Inspector de Elementos te proporciona herramientas poderosas para revisar cómo se cargan estos recursos, verificar su rendimiento y solucionar problemas relacionados con ellos.

---

## 🖼️ Revisión de Imágenes

Las imágenes son uno de los tipos de recursos más comunes que se cargan en una página web, y es vital asegurarse de que se carguen de manera eficiente y sin errores. A través de la pestaña **Network**, puedes ver cómo se cargan las imágenes y detectar problemas como tiempos de carga largos o imágenes no encontradas.

### ⚙️ Cómo Ver Imágenes en la Pestaña **Network**:

1. **Filtrar por "Img"**: En la pestaña **Network**, puedes usar el filtro **Img** para ver todas las solicitudes relacionadas con imágenes (JPG, PNG, GIF, SVG, etc.).
   
2. **Recargar la Página**: Después de abrir la pestaña **Network** y filtrar por **Img**, recarga la página para ver las solicitudes de imágenes mientras se cargan.
   
3. **Revisar Códigos de Estado**: Asegúrate de que las imágenes se carguen correctamente. Un código de estado **200 OK** indica que la imagen se ha cargado correctamente. Si ves un **404 Not Found**, significa que la imagen no se encontró en el servidor.

4. **Ver el Tamaño de la Imagen**: Puedes revisar el tamaño de cada imagen descargada. Si el tamaño es demasiado grande, puede afectar negativamente al tiempo de carga de la página. Las imágenes grandes pueden ser optimizadas para mejorar el rendimiento.

### 🔎 Análisis de Problemas Comunes en Imágenes:

- **Imagen rota (404 Not Found)**: Si una imagen no se carga, revisa la URL que se muestra en la solicitud y asegúrate de que la ruta sea correcta.
- **Tiempos de carga largos**: Si una imagen tarda mucho en cargarse, revisa el tamaño del archivo y considera optimizarla, utilizando formatos más livianos como **WebP**.

---

## 🖥️ Revisión de Scripts

Los scripts JavaScript son esenciales para la interactividad de la página web. A través de la pestaña **Network**, puedes revisar cómo se cargan y ejecutan los scripts y detectar problemas de rendimiento o errores de carga.

### ⚙️ Cómo Ver Scripts en la Pestaña **Network**:

1. **Filtrar por "JS" o "Script"**: En la pestaña **Network**, puedes filtrar por **JS** para ver todas las solicitudes de archivos JavaScript. Esto incluye tanto archivos internos como externos.

2. **Recargar la Página**: Una vez filtrados los scripts, recarga la página para ver cómo se cargan y ejecutan. Los scripts generalmente se cargan durante la fase de construcción de la página.

3. **Ver el Código de Estado**: Como con las imágenes, es importante verificar que los scripts se hayan cargado correctamente. Un código **200 OK** indica que el archivo se descargó sin problemas, mientras que un **404** o **500** puede indicar que hay un problema con el archivo o con el servidor.

4. **Depurar con la Consola**: Si un script tiene errores o no funciona como se espera, puedes usar la pestaña **Console** para ver los mensajes de error o advertencia generados por el script.

### 🛠️ Depuración de Scripts:

- **Errores de carga (404 Not Found)**: Si un script no se carga, revisa la URL del archivo en la solicitud para verificar que esté correcto y que el archivo exista en el servidor.
- **Errores de ejecución**: Si el script se carga correctamente pero no funciona, abre la pestaña **Console** y busca errores de JavaScript. Esto te dará pistas sobre qué parte del código está fallando.
- **Tiempo de carga**: Algunos scripts pueden ser demasiado pesados o mal optimizados, lo que puede retrasar la carga de la página. Verifica el tamaño de los archivos y, si es posible, usa técnicas de **lazy loading** o **minificación** de scripts.

---

## 🚀 Optimización de Imágenes y Scripts

Para mejorar la velocidad de carga de la página web, es importante optimizar tanto las imágenes como los scripts. Aquí te dejamos algunas recomendaciones:

### **Optimización de Imágenes**:

- **Comprimir imágenes**: Utiliza herramientas como **TinyPNG** o **ImageOptim** para reducir el tamaño de las imágenes sin perder calidad.
- **Usar formatos modernos**: Considera usar el formato **WebP** para imágenes, ya que ofrece una compresión de alta calidad y reduce el tamaño de las imágenes.
- **Lazy Loading**: Implementa **lazy loading** para cargar imágenes solo cuando el usuario las vea en pantalla.

### **Optimización de Scripts**:

- **Minificación**: Utiliza herramientas como **UglifyJS** o **Terser** para reducir el tamaño de los archivos JavaScript.
- **Carga asíncrona**: Usa la propiedad **async** o **defer** en las etiquetas `<script>` para asegurarte de que los scripts no bloqueen el renderizado de la página.
- **División de código (Code Splitting)**: Divide tu código JavaScript en archivos más pequeños para que solo se carguen los que son necesarios en cada momento.

---

## 🛠️ Herramientas para la Revisión de Imágenes y Scripts

### **1. Lighthouse**:
**Lighthouse** es una herramienta de Google que te ayuda a auditar la calidad de tu página web, incluyendo el rendimiento de imágenes y scripts. Puedes utilizarla desde las herramientas de desarrollo de Chrome o como una extensión.

### **2. WebPageTest**:
**WebPageTest** te permite realizar pruebas de rendimiento de tu página web y analizar el tiempo de carga de imágenes y scripts. También te proporciona información detallada sobre qué recursos están demorando más.

---

## 🔍 Resumen

- La pestaña **Network** del Inspector de Elementos te permite revisar cómo se cargan las imágenes y los scripts en una página web.
- Es importante verificar los códigos de estado de las solicitudes de imágenes y scripts para asegurarte de que se cargan correctamente.
- La optimización de imágenes y scripts es clave para mejorar el rendimiento de la página web.

---

🎯 **Siguiente paso:** Ahora que has aprendido a revisar imágenes y scripts, es hora de profundizar en la **optimización de la red** para mejorar aún más el rendimiento de tu página web en la sección [Optimización-de-red](../../optimizacion-de-red/Optimización-de-red.md).

