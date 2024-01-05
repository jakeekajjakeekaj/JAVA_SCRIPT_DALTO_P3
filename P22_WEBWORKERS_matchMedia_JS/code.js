// Web Workers, aquí existe un concepto bastante interesante, y es que en un sitio, solo se puede ejecutar una cosa a la vez, pero esto mismo provoca que si el sitio se encarga de hacer una operación que tarda mucho, el usuario puede pensar que el sitio se congeló e irse, para esto se ejecutan 2 cosas a la vez, para que de esta manera se quite este límite de que algo cunfione con el aspecto de una cosa a la vez, esto tiene sus ventajas pero también tiene sus desventajas, y estas se irán viendo en los próximos ejemplos

// matchMedia, nos prmite trabajar con responsive design, pero se recomienda trabajar con estilos que no se pueden hacer con css

"use strict";

// const mq = matchMedia("(max-width: 500px)");    // Si en el responsive, fuera menor de 500px, en la consola nos diría true, pero si es mayor, nos diria false, es como ocupar el @media pero desde JS

// console.log(mq.matches);    //De esta manera nos imprime directamente el valor en la consola de true o false

// console.log(mq);    //Nos imprime todos los valores

// mq.addEventListener("change", ()=> {    //De esta manera se reconoce cada que la resolución es cambiada, es decir cada que el matches cambie a true o false, se ejecutará esta acción
    // console.log("Resolución cambiada");
// })

//-- Ejemplo de uso

const mq = matchMedia("(max-width: 500px)");
const cajaRes = document.querySelector(".caja__no-responsive");

mq.addEventListener("change", ()=> {
    if(mq.matches) {
        cajaRes.classList.replace("caja__no-responsive", "caja__si-responsive");
    } else {
        cajaRes.classList.replace("caja__si-responsive", "caja__no-responsive");
    }
});

// Esto fue un ejemplo sencillo en donde se cambian los estilos, **PARA CAMBIAR ESTILOS SE PUEDE HACER PERFECTAMENTE CON CSS Y NO HACE FALTA HACERLO DESDE AQUI**, para ser más claros, esto sirve mayormente para cuando se quiere cambiar clases y que hagan diferentes funciones y ese tipo de cosas, básicamente cosas que ya no se podrían hacer con lo que es css