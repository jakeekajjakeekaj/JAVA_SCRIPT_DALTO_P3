// OPERADORES FALTANTES
//TERNARIO, SPREAD

//** OJO, EL OPERADOR TERNARIO USA MENOS RECURSOS QUE UN IF

//OPERADOR TERNARIO

// let edad = 25;

// LO DE ABAJO ES UN EJEMPLO SIN TERNARIO
// if (edad >= 18) console.log("Eres mayor de edad");
// else console.log("Eres menor de edad");

// LO DE ABAJO ES UN EJEMPLO CON TERNARIO
// (edad >= 18) ? console.log("Ternario Eres mayor de edad")
//              : console.log("Eres menor de edad");

//LO DE ABAJO ES UN EJEMPLO TERNARIO, PERO CON MÁS SENTENCIAS
// (edad >= 18) ? (    //Abriendo un paréntesis es la manera con la que puedes trsbajar con más sentencias usando operadores ternarios
    // console.log("Eres mayor de edad"),  //Se deben separar por comas
    // console.log("Por lo que si puedes pasar :O")
// ) : (
    // console.log("Eres menor de edad"),
    // console.log("Por lo que no puedes pasar :(")
// )

// -- OPERADOR SPREAD

// El de abajo es un ejemplo de usarlo
// let valor1 = "valor 1";
// let valor2 = "valor 2";
// let valor3 = "valor 3";

// let arr = ["valor 1", "valor 2", "valor 3"];

// console.log(valor1, valor2, valor3);
// console.log(...arr);    //Como se puede apreciar, se desarmó lo que es el array

//Otro ejemplo sería
// let arr = ["manzana", "pera", "plátano"];
// let arr2 = ["kiwi", "naranja"];

// arr.push(...arr2);  //De esta manera podemos agregar el contenido del arr2 dentro de lo que sería el arr

// console.log(arr);

//Otro ejemplo sería (concatenar arrays)
// let arr = ["manzana", "pera", "plátano"];
// let arr2 = ["kiwi", "naranja"];

// console.log(...arr, ...arr2);   //De esta manera se concatenan los arrays