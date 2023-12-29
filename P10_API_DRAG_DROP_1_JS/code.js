// API drag and drop

"use strict";

let circulo = document.querySelector(".circulo");
let rectangulo = document.querySelector(".rectangulo");

// circulo.addEventListener("dragstart", ()=> console.log("drag start"));  // ESTO AGARRA EL INICIO DEL DRAG, ES DECIR CUANDO AGARRAS AL OBJETO
// circulo.addEventListener("drag", ()=> console.log("drag")); // ESTO INDICA CUANDO YA ESTÁS MOVIENDO AL OBJETO, INCLUSO CUANDO ESTÁ QUIETO, SI LO SIGUES SOSTENIENDO, ESTE SE SIGUE EJECUTANDO
// circulo.addEventListener("dragend", ()=> console.log("drag end"));  // ESTO INDICA CUANDO SUELTAS AL OBJETO

rectangulo.addEventListener("dragenter", ()=> console.log("drag enter"));   //Indica cuando se ha entrado a la zona
// rectangulo.addEventListener("dragover", ()=> console.log("drag over")); //Indica que ya se está por encima de la zona, sin embargo por defecto esto verifica si se puede dropear un objeto, para este caso no funcionará el drop, para que el drop funcione el drag over tiene que estar de la siguiente manera:
rectangulo.addEventListener("dragover", (e)=> {
    e.preventDefault(); //Gracias al preventDefault se puede accionar ahora si lo que es el drop
    console.log("drag over");
})
rectangulo.addEventListener("drop", ()=> console.log("drop"));  //Indica cuando el objeto se ha soltado dentro del area
rectangulo.addEventListener("dragleave", ()=> console.log("drag leave"));   //Indica cuando el objeto ha abandonado el area