// FileReader

"use strict";

const archivo = document.getElementById("archivo");

const leerArchivo = ar=> {
    for (let i = 0; i < ar.length; i++) {
        // console.log(ar[i]);  //Imprime los objetos de los archivos a los que se les hizo upload
        const reader = new FileReader();
        reader.readAsText(ar[i]);
        reader.addEventListener("load", e=> console.log(JSON.parse(e.currentTarget.result)));
    }
}

archivo.addEventListener("change", ()=> {
    leerArchivo(archivo.files);
})
