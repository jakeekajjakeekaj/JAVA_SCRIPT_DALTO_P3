// LocalStorage y SessionStorage

// SessionStorage: Significa que toda la información de la página, al momento de actualizar la página o cerrarla, toda esta información se pierde

// LocalStorage: Significa que toda la información de la página, se almacena de manera local, significando que esta información no sea perdida

// localStorage.setItem("nombre", "pepe"); //Si nos dirigimos en las herramientas de desarrollador de google, en la sección de 'application, storage, local storage, file://' encontraremos la información almacenada, para este caso 'pepe'

// console.log(localStorage);  //Esto imrpime la información del localStorage

// console.log(localStorage.getItem("nombre"));    //Esto imprime la información deseada del Item de LocalStorage

// DE ESTA MANERA, SI NOSOTROS RECARGAMOS LA PÁGINA PERO CON LA LINEA DONDE DEFINIMOS A PEPE COMENTADA, O DIRECTAMENTE ELIMINADA, AÚN NOS SEGUIRÁ ARROJANDO EL RESULTADO DE PEPE, YA QUE ES INFORMACIÓN QUE FUE ALMACENADA EN LO QUE ES LA localStorage

// sessionStorage.setItem("nombre", "pepe temp");  //Si nos dirigimos en las herramientas de desarrollador de google, en la sección de 'application, storage, local storage, file://' encontraremos la información almacenada, sin embargo si nosotros cargamos la página de nuevo con la linea comentada, la información no quedará almacenada como en localStorage, ya que esta es más una información temporal

// console.log(sessionStorage);

// console.log(sessionStorage.getItem("nombre"));

// setTimeout(()=> {
    // let nombre = localStorage.removeItem("nombre"); //Con el remove Item, nosotros podemos remover los items, en este caso por ejemplo, estamos borrando del localStorage al Item después de 2 segundos gracias al setTimeout
// }, 2000)

// setTimeout(()=> {
    // let nombre = localStorage.clear();  //Esto funciona como el removeItem, solo que en vez de especificar al item, directamente se elimina todo, y esto es gracias al clear()
// }, 2000)

// -- EJEMPLO PRÁCTICO DE UTILIZAR EL LOCAL STORAGE

"use strict";

const modal = document.querySelector(".modal-overlay");
const cerrarModal = ()=> {
    modal.style.animation = "desaparecer 1s forwards";
    setTimeout(()=> modal.style.display = "none", 1000)
}

const definirIdioma = ()=> {
    document.querySelector(".en").addEventListener("click", ()=> {
        localStorage.setItem("idioma", "en");
        cerrarModal();
    })
    document.querySelector(".es").addEventListener("click", ()=> {
        localStorage.setItem("idioma", "es");
        cerrarModal();
    })
}

const idioma = localStorage.getItem("idioma");

if (idioma === null) definirIdioma();   //Esto indica que si no hay un idioma definido, se tiene que definir el idioma
else {
        console.log(`El idioma es ${idioma}`);  //En caso de ya haber un idioma definido, se imprimirá en la consola
        modal.style.display = "none";
}

// setTimeout(()=> {
//     let clear = localStorage.clear();
// }, 2000)

// Para este ejemplo, lo que se hizo es que al inicio la página le pregunta al usuario su idioma, una vez respondido, esta infromación se almacena en el localstorage, para ya después con ayuda de funciones mostrar la página en el idioma correspondiente