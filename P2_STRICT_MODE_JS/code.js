// strict mode

// CARACTERISTICAS:
// - Convierte errores de JS en excepxiones
// - Mejora la optimización de los errores y consigu mejores tiempos de ejecución
// - Evita sintaxis usadas en posteriores a ES6
// - No permite que el programador realice una "mala sintaxis"

// "use strict";   //De esta manera se declara que se comenzará a programar con el modo estricto

// hola = "hola";  //Al usar el modo estricto esto arroja un error

// let hola = "hola";  //Al usar el modo estricto, esta es la manera correcta de declarar una varibale, necesariamente se tiene que declarar todo para que esté "en regla"

// const obj = {};

// Object.defineProperty(obj, 'nombre', {value: "pedro", writeable: false});   //Esta es una manra de definir propiedades dentro de un objeto, para este caso se indica 'writeable: false', es decir que no es eitable, solo es de lectura, con y sin el modo estricto, realmente el objeto no se modifica, sin embargo con el modo estricto arroja un error en caso de que el objeto se trate de modificar

// obj.nombre = "roberto"; //No permite modificarse debido a que se declaró a la propiedad como no editable, sin el modo estricto esto no se modifica pero tampoco avisa que se intenta modificar, sin embargo con el modo estricto tampoco se modifica, pero si avisa que el objeto únicamente es de lectura y que no es posible su edición

// console.log(obj.nombre);

// ----

// "use strict";

// const obj = { nombre: "lucas" };

// Object.preventExtensions(obj);  //Gracias a esto, se indica que están prohibidas las extensiones del objeto, por ejemplo si ahora se desa agregar apellido o edad, esto queda prohibido, sin embargo con el modo estricto se marca el error, y sin el modo estricto directamente no pasa nada

// obj.apellido = "dalto";

// console.log(obj.apellido);

// Con el modo strict, el this deja de funcionar, así mismo arguments y eval tampoco pueden ser usados como variables