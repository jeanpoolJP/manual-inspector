# Inspección de Cookies y Almacenamiento

El Inspector de Elementos también proporciona herramientas poderosas para inspeccionar y gestionar las cookies y el almacenamiento de la web. Estas herramientas son útiles para analizar el comportamiento de la página en cuanto a la información que guarda en el navegador del usuario, ya sea para sesiones, preferencias o información persistente.

---

## 🍪 Inspección de Cookies

Las cookies son pequeños archivos de texto que los navegadores almacenan en el dispositivo del usuario. Son utilizadas por los sitios web para almacenar información entre sesiones, como el estado de la sesión, preferencias del usuario, o información de seguimiento.

### 🛠️ Cómo Inspeccionar Cookies:
1. Abre el **Inspector de Elementos** y navega a la pestaña **Application**.
2. En el panel izquierdo, selecciona la opción **Cookies**.
3. Allí verás una lista de todas las cookies asociadas al sitio web actual.
4. Cada cookie tendrá información como su nombre, valor, dominio, ruta, fecha de expiración, y más.

### 📋 Información Común en las Cookies:
- **Nombre**: El identificador de la cookie.
- **Valor**: El valor almacenado en la cookie.
- **Dominio**: El dominio para el cual la cookie es válida.
- **Fecha de expiración**: La fecha y hora en la que la cookie expira.
- **Secure**: Indica si la cookie solo se puede enviar a través de conexiones HTTPS.

---

## 🧰 Modificación de Cookies

Puedes modificar o eliminar cookies directamente desde el Inspector de Elementos para probar cómo afecta al comportamiento de la página.

### 🛠️ Cómo Modificar una Cookie:
1. En el panel de cookies, selecciona la cookie que deseas modificar.
2. Haz clic en el valor de la cookie y modifícalo.
3. El cambio será aplicado inmediatamente y podrás ver el impacto sin recargar la página.

### 🗑️ Cómo Eliminar una Cookie:
1. Selecciona la cookie que deseas eliminar.
2. Haz clic derecho y selecciona **Delete** para eliminarla.

---

## 🧱 Almacenamiento Web

Además de las cookies, los sitios web pueden utilizar otras tecnologías de almacenamiento local para guardar información, como el **LocalStorage**, **SessionStorage** y el **IndexedDB**. Estos métodos de almacenamiento permiten guardar datos más grandes y más complejos que las cookies.

### 🛠️ Inspección de Almacenamiento:
1. Abre el **Inspector de Elementos** y navega a la pestaña **Application**.
2. En el panel izquierdo, selecciona las opciones bajo **LocalStorage**, **SessionStorage** o **IndexedDB**.
3. Podrás ver los datos almacenados y sus valores.

#### **Tipos de Almacenamiento**:
- **LocalStorage**: Almacena datos de forma persistente, incluso después de que el navegador se cierre.
- **SessionStorage**: Almacena datos solo durante la sesión del navegador, y se elimina al cerrar la ventana o pestaña.
- **IndexedDB**: Base de datos de bajo nivel que permite almacenar grandes cantidades de datos estructurados, como archivos o registros complejos.

---

## 🛠️ Modificación del Almacenamiento

Puedes modificar los valores almacenados en LocalStorage, SessionStorage o IndexedDB directamente desde el Inspector de Elementos.

### 🛠️ Cómo Modificar LocalStorage:
1. Selecciona **LocalStorage** en el panel izquierdo.
2. Haz clic en la clave que deseas modificar.
3. Cambia su valor directamente y observa cómo cambia el comportamiento de la página.

### 🛠️ Cómo Modificar SessionStorage:
1. Selecciona **SessionStorage** en el panel izquierdo.
2. Haz clic en el valor que deseas modificar.
3. Cambia el valor para probar cómo afecta a la página en tiempo real.

### 🛠️ Cómo Modificar IndexedDB:
1. En el panel de **IndexedDB**, selecciona la base de datos que deseas explorar.
2. Haz clic en las tablas de datos y modifica los registros como desees.

---

## 🔄 Aplicación Práctica: Inspección de Cookies y Almacenamiento

La inspección y modificación de cookies y almacenamiento es útil para desarrolladores y testers al verificar cómo la página interactúa con el navegador del usuario y cómo gestiona la persistencia de los datos.

### **¿Cuándo Usar la Inspección de Cookies y Almacenamiento?**
- **Depuración de Sesiones**: Asegúrate de que las cookies y el almacenamiento local estén funcionando correctamente.
- **Pruebas de Persistencia**: Verifica que los datos almacenados sean persistentes entre sesiones y recargas de página.
- **Seguridad**: Revisa cómo se almacenan y gestionan los datos sensibles, como tokens de autenticación.

---

## 🏁 Conclusión

La inspección de cookies y almacenamiento es una herramienta esencial para entender cómo un sitio web maneja los datos entre sesiones. Gracias a esta función, puedes analizar y modificar cookies y otros tipos de almacenamiento local en tiempo real, lo que facilita las pruebas y la depuración de tu aplicación web.

---

🎯 **Siguiente paso:** Ahora que sabes cómo inspeccionar cookies y almacenamiento, continúa explorando más sobre **Solicitudes de Red** en la sección [Solicitudes-de-red](../../Herramientas-Avanzadas/Solicitudes-de-red.md).
