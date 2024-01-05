// Intersection Observer

// Esto sirve ya que antes lo que se tenía que hacer era determinar con el view port height cuándo una persona ya pasó a otra sección, es decir aunque en la computadora solo se ve una fracción del sitio, lo cierto es que detrás de esta, hay un sitio mucho más largo que es donde está alojado todo, y nosotros por eso debemos hacer un scroll sobre la misma, pues por esta razón se tenía que hacer lo del view port height, pero esto ya ha cambiado gracias a intersection observer

"use strict";

// const caja3 = document.querySelector(".caja3");

// const verifyVisibility = (entries)=> {
    // const entry = entries[0];
    // console.log(entry); //Aquí aparece el mensaje en consola de si está siendo intersecting o no
    // console.log(entry.isIntersecting);  //Aquí ya aparece el mensaje directamente si es true o false
// }

// const observer = new IntersectionObserver(verifyVisibility)    //Los parámetros son (callback, options), el options no es necesario pero aumenta posibilidades

// observer.observe(caja3) //observe es un método que observa al elemento que le digamos, **HASTA AHORITA CON LO QUE SE HA HECHO, CADA QUE SE VEA LA CAJA 3 EN NUESTRA PANTALLA, SE EJECUTA EL MENSAJE EN LA CONSOLA DE QUE EL isIntersecting ES TRUE O FALSE

//-- EJERCICIO 2 --

const cajas = document.querySelectorAll(".caja");

const verifyVisibility = (entries)=> {
    // const entry = entries[0];
    // console.log(entry.isIntersecting);
    for(const entry of entries) {
        if(entry.isIntersecting) {
            console.log("Se está viendo la caja: ", entry.target.textContent);
        }
    }
}

const options = ()=> {
    // root:   //Toma un elemento como referencia, por defecto es el viewport
    // rootMargin:     //Modifica el margen en que se activará el evento, es decir que si aumentamos el margen, se activará el evento aún cuando todavía no se ve la caja, y viceversa, si tiene un margen negativo se activará el evento aún después de ya estarse mostrando la caja
    
}

const observer = new IntersectionObserver(verifyVisibility, options);

for(const caja of cajas) {  //Recuerda que si lo hacemos con el in, nos aparecen las propiedades y si lo hacemos con el of, nos aparecen los div enteros
    // console.log(caja)
    observer.observe(caja); //Hasta aquí por cada caja mostrada aparece un verdadero y por cada caja salida aparce un falso
}