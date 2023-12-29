// FileReader

"use strict";

// console.log(fetch("informacion.txt"));  //Antes se ocupaba esto, sin embargo ya no es del todo recomendable porque aparte de consumir recursos, leemos algo de lo que nosotros ya sabemos, algo de nuestro servidor, en su lugar es más recomendable usar lo siguiente:

const archivo = document.getElementById("archivo");

const leerArchivo = ar=> {
    const reader = new FileReader();
    reader.readAsText(ar);
    reader.addEventListener("load", e=> {
        console.log(e);    //Dentro de la consola obtiene el contenido del archivo, puede ser texto o json también
        console.log(e.currentTarget.result);    //De esta manera, obteida de las propiedades de todo el objeto, se puede extraer por ejemplo solo el contenido del objeto
        console.log(typeof e.currentTarget.result); //De esta manera se obtiene que es un tipo string, si nosotros queremos trabajarlo como un json, recordemos que se debe hacer la conversión, esto sería de la manera:
        console.log(typeof JSON.parse(e.currentTarget.result)); //De esta manra ya se transforma a un objeto (json), por el typeof aparece que es un objeto
        console.log(JSON.parse(e.currentTarget.result));    
        // De esta manera imprimimos el contenido del objeto, en este caso lo aparecido en lo que es el resultado
    })
}

archivo.addEventListener("change", e=> {
    leerArchivo(archivo.files[0]);
})
