//APIS

//UNA API es una Interfaz de Programación de Aplicaciones

//Las APIS más comunes son las API Rest, lo que es conectarse a otros sitios web a cambio de información

//Una API que no es rest, sino que es una API, sería Date

// const fecha = Date().__proto__; //Recordemos que al declarar __proto__ accedemos a lo que es el prototipo

// console.log(fecha);

// const fecha = new Date();   //Date es un constructor, por lo que al trabajar con el es muy importante usar el new

// //getDate, obtiene el día
// console.log(fecha.getDate());

// //getDays nos devuelve lo que es el día de la semana, es decir que si hoy es miércoles, nos devuelve 3
// // D-0 L-1 m-2 M-3 J-4 V-5 S-6
// console.log(fecha.getDay());

// //Siempre nos va a devolver un número menos, ya que Enero empieza con el valor de 0
// console.log(fecha.getMonth());

// //Devuelve lo que es el año
// console.log(fecha.getFullYear());

// //Devuelve el año actual menos 1900
// console.log(fecha.getYear());

// //Devuelve la hora del día, sin contar minutos ni nada de eso
// console.log(fecha.getHours());

// //Devuelve los minutos actuales de la hora actual
// console.log(fecha.getMinutes());

// //Devuelve lo que son los segundos de la hora actual
// console.log(fecha.getSeconds());

//EJERCICIO DE ALARMA

"use strict";

const addZeros = n => {
    if (n.toString().length < 2) return "0".concat(n);
    else return n;
}

const actualizarHora = ()=> {
    const time = new Date();
    let horas = time.getHours();
    let minutos = time.getMinutes();
    let segundos = time.getSeconds();
}

// document.querySelector(.horas)