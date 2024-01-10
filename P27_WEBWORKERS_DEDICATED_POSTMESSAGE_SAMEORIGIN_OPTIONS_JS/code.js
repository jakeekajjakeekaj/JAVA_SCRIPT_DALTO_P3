// Web Workers

// Dedicated Worker
// Los workers no son archivos JS normales, tienen sus propias limitaciones

// Post message

// origen cruzado (same origin): Esto es algo de bastante seguridad y básicamente no permite que los workers (archivos JS), se ejecuten si no pertenecen al mismo origen, se puede desactivar pero no es lo recomendado

// Parámetro options (type, credentials y name), es un parámetro opcional
// - type: Especifica el tipo de worker a crear, puede ser classic o module (si no se especifica, el predeterminado es classic).
// - credentials: Especifica el tipo de credenciales que se utilizarán para el worker. El valor puede ser 'omit', 'same-origin' o 'include', si el valor no se especifica o el worker es classic, el uso predeterminado es es 'omit' (no credenciales requeridas).
// - name: Especifica el nombre de identificación para DedicatedWorkerGlobalScope, representa l alcance del trabajador, que es principalmente útil para fines de depuración.

// La documentación oficial se puede ver en lo que es 'worker mdn'

"use strict";

const worker = new Worker("worker.js"); //De esta manera lo que haya dentro de nuestro worker.js va a arrancar
const worker2 = new Worker("http://localhost:80/CODIGO/worker.js"); //Aquí se inserta la dirección con el puerto 82, de esta manera nos saldrá que no se puede acceder desde un origen hasta el otro origen, con el puerto 80 ya no marca ningún error porque es nuestro puerto
//Lo de arriba es un ejemplo de origen cruzado (same origin), ya que tiene que pertenecer a los mismos puertos para que funcione, de lo contario maracará error
// Es por esta política del same origin que se tiene que trabajar en ciertpos proyectos con un servidor local, porque tienen que pertenecer al mismo origen para poder utilizar las herramientas como solicitar o enviar archivos, etc.
document.querySelector(".button").addEventListener("click", ()=> cargarDatos(".loadResults"));

const cargarDatos = async div => {
    const req = await fetch("content1.txt");
    const res = await req.json();
    const arr = res;
    document.querySelector(div).innerHTML = arr;
    // Hasta aquí lo que se indica es que mientras que los datos no sean cargados, no se puede escribir dentro del input por ejemplo, solo se podrá escribir hasta que los datos ya hayan sido cargados

    worker.postMessage(true);   //Esto sirve para realizar transferencias de mensajes entre lo que es el script main y el worker, pero no solo esto, DE ESTA MANERA SE PUEDE TRABAJAR CON 2 SCRIPTS AL MISMO TIEMPO Y AHORA SI SE PUEDE ESCRIBIR EN EL INPUT MIENTRAS LA INFORMACIÓN SE SIGUE CARGANDO
}

// cargarData(".loadResults");

console.log(worker);