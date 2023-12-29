// Geolocalización

"use strict";

const geolocation = navigator.geolocation;

console.log(geolocation);   //Al imprimirlo en consola se obtiene
// clearWatch: Elimina la posición
// getCurentPosition: Obtiene la posición actual
// watchPosition: Vigila la posición ante cambios que se hagan, es decir cambios en la posición actual

//getCurrentPosition tiene que tener parámetros, estos son:
// position, error, options
// Las propiedades de option son:
// enableHighAccuracy, timeout, maximumAge

const posicion = pos=> {
    // console.log("Todo salió bien");
    console.log(pos);    //Obtiene todo el objeto de la posición
    // console.log(pos.coords.latitude);   //Obtiene la latitud
    // console.log(pos.coords.longitude);  //Obtiene la longitud

}

// geolocation.getCurrentPosition(posicion);  // De esta manera se trabaja con un parámetro, que sería la función, sin embargo qué pasa si ocurre un error? bueno para eso está el siguiente parámetro de error; así mismo existe el otro parámetro para las opciones que es como se muestra a continuación

const err = ()=> console.log(e);

const options = {
    maximumAge: 0,  // Esto indica cuánto tiempo se va a querer guardar la información, ya que esta información se almacena en el caché, en pocas palabras es como decir cada cuánto se volverá a pedir la información de la ubicación actualizada
    timeout: 3000,  // Tiempo que tarde en darnos la información
    enableHighAccuracy: true    //Activa la alta precisión

}

geolocation.getCurrentPosition(posicion, err, options);
