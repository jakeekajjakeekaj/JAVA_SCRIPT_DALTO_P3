// Visibility change

"use strict";

addEventListener("visibilitychange", ()=> { //Esto idncica cuando se cambia de pestaña se activa, es decir que tiene un estado para cuando te cambias de pestaña, y tiene otro estado para cuando regresas a la pestaña
    // console.log("se cambió de pestaña");

    console.log(document.visibilityState);  //Esto imprimirá en la consola hidden, para cuando se salga de la pestaña y visible para cuando se regrese a la pestaña
    // Otra manera de apuntar a esto es con el e.target.visibilityState
})