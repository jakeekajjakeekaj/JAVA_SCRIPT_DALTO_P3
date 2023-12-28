// API drag and drop minip

"use strict";

const zona = document.querySelector(".zona");

zona.addEventListener("dragover", e=> {
    e.preventDefault();
})

zona.addEventListener("drop", e=> {
    let n = e.dataTransfer.getData("textura");
    console.log(n);
    zona.style.background = `url("img/textura${n}.jpg")`
    zona.style.backgroundSize = "cover";
})

const transferirTextura = (n, e)=> {
    e.dataTransfer.setData("textura", n);
}

for (let i = 0; i < document.querySelector(".texturas").children.length; i++) {
    document.querySelector(`.textura${i}`).addEventListener("dragstart", e=> transferirTextura(i, e))
}