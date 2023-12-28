// API drag and drop p2

"use strict";

let circulo = document.querySelector(".circulo");
let rectangulo = document.querySelector(".rectangulo");

circulo.addEventListener("dragstart", e=> {
    // console.log(e.dataTransfer);    // De esta manera obtenemos toda la informacion
    // e.dataTransfer.setData("text-plain", e.target.className);   //De esta manera se trabajaría si fueran múltiples objetos, o incluso se trabajaría con id, pero al ser solo un objeto se trabajará se la siguiente manera:
    // e.dataTransfer.setData("text-plain", circulo);   //Al final se vería de esta manera, pero para practicar bien lo haré como se debe hacer
    e.dataTransfer.setData("nombre", e.target.className);
    console.log(e.dataTransfer.getData("nombre"));
});

// rectangulo.addEventListener("dragenter", ()=> console.log("drag enter"));

rectangulo.addEventListener("dragover", e=> {
    e.preventDefault();
    console.log("drag over")
})

rectangulo.addEventListener("drop", e=> {   //Recordemos que para que el drop funcione, debe tener anteriormente un dragover con preventDefault
    console.log(e.dataTransfer.getData("nombre"));
})