// Recursividad, clausulas, parámetros por defecto

// Abjo de muestra un ejemplo de función recursiva
// "strict mode";

// const validarEdad = (msg)=> {
//     let edad;
//     try {
//         if (msg) edad = prompt("Escribe tu edad: ");
//         else edad = prompt("Introduce tu edad");
//         edad = parseInt(edad);  //Convierte un string a entero
//         if (isNaN(edad)) throw "Introduce un número para la edad";
//         if (edad > 17) console.log("Eres mayor de edad");
//         else console.log("Eres menor de edad");
//     } catch(e) {
//         validarEdad(e);
//     }
// }

// validarEdad();

// --Clausulas, funciones que retornan otras funciones

// "strict mode";

// const saludar = (nombre)=> {
//     return function() { //Funcion retornada
//         console.log(nombre);
//     }
// }

// let saludo = saludar("ruben");  //De esta manera se está retornando la función

// addEventListener("load", saludo);   //Esta es una de las posibles funciones de una cláusula, que al cargarse la página, se arroje un mensaje por ejemplo

//Segundo ejemplo de cláusulas funcionando con index y style

// const changeSize = size => {
//     document.querySelector(".texto").style.fontSize = `${size}px`;
// }

// document.querySelector(".btn-12").addEventListener("click", ()=>changeSize(12));

// document.querySelector(".btn-14").addEventListener("click", ()=>changeSize(14));

// document.querySelector(".btn-16").addEventListener("click", ()=>changeSize(16));

//El EJEMPLO DE ARRIBA, ES UN EJEMLO TRABAJANDO SIN CLÁUSULAS, AHORA SE TRABAJARÁ CON CLÁUSULAS

// const changeSize = size => {
//     return ()=> {
//         document.querySelector(".texto").style.fontSize = `${size}px`;
//     }
// }

// px12 = changeSize(12);
// px14 = changeSize(14);
// px16 = changeSize(16);

// document.querySelector(".btn-12").addEventListener("click", px12);

// document.querySelector(".btn-14").addEventListener("click", px14);

// document.querySelector(".btn-16").addEventListener("click", px16);

//El ejemplo de arriba es una forma práctica de trabajar con cláusulas ;)

// -- PARÁMETROS POR DEFECTO

// "strict mode";

// const suma = (a = 0, b = 0) => {    // Esta es la mejor manera de volver un parámetro por defecto, indicando desde aquí el valor de 0, para que en caso de no recibir valor, el valor predeterminado sea 0
    // b = typeof b !== 'undefinded' ? b:0;    //Esta es una manera de hacer el valor por defecto, sin embargo NO ES DEL TODO RECOMENDADA (es la forma antigua)

    // b = b || 0; // Aquí se indica que 'b' es igual a 'b' o a '0', sin embargo esta manra tampoco es la más recomendad


    // console.log(a + b);
// }

// suma(10);   //Qué pasaría si el usuario no ingresó el dato? para esto sirven los parámetros por defecto