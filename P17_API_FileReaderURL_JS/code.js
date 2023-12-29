// FileReader
// ReadAsDataURL()

"use strict";

const archivo = document.getElementById("archivo");

const leerArchivo = ar=> {
    for (let i = 0; i < ar.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(ar[i]);    //A difernecia de leer los archivos, para este caso solo se modifica esta linea
        reader.addEventListener("load", e=> {
            // console.log(JSON.parse(e.currentTarget.result)); //Para que funcione también se reemplaza esta linea para agregar:
            let newImg = `<img src='${e.currentTarget.result}'>`;
            document.querySelector(".resultado").innerHTML += newImg;
        });
    }
}

archivo.addEventListener("change", ()=> {
    leerArchivo(archivo.files);
})
