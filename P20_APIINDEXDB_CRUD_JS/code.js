//API indexDB

//indexDB es una DB no SQL, orientada a objetos, asíncrona (es decir que no hace falta actualizar para que se hagan cambios) y trabaja con objetos del DOM

"use strict";

// const IDBRequest = indexedDB;

// console.log(IDBRequest);    //Esto da la "fábrica" de base de datos, ya que como tal todavía no es una petición ni nada

const IDBRequest = indexedDB.open("usuarios", 1);   //Esto indica que si existe una base de datos con un nombre, en este caso 'usuarios', se abre, y si no existe se crea; el siguiente parámetro indica la versión

// console.log(IDBRequest);

IDBRequest.addEventListener("upgradeneeded", ()=> { //Esto se encarga de crear la base de datos
    console.log("Se creó correctamente");
    const db = IDBRequest.result;   //Se está pidiendo abrir la base de datos
    db.createObjectStore("nombres", {  //Se comienza con la creación de los objetos, para este caso su nombre es 'nombres'
        autoIncrement: true //Aqui se registra lo que es el key, indicando aquí que el valor se auto incremente para así ser único
    });
})

IDBRequest.addEventListener("success", ()=> console.log("Todo correcto"))

IDBRequest.addEventListener("error", ()=> console.log("ocurrió un error al abrir la DB"))

const addObjeto = objeto=> {
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres", "readwrite")  //también en vez de poner 'readwrite' se puede poner 'readonly' para que solo se lean los datos
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.add(objeto);
    IDBtransaction.addEventListener("complete", ()=> console.log("Objeto agregado correctamente"))
}

// addObjeto({nombre : "Juan"});    //Al escribir esto por ejemplo en la consola, si nos dirigimos al apartado de Application, IndexDB, nombre de la db (usuarios), tabla (nombres), se puede actualizar la tabla y ver que efectivamente esta información ha sido almacenada
//Cabe mencionar que en la tabla se puede ver lo que es el index ('#') y lo que es el key ('key'), y tienen diferentes valores, el index es un enlistado de los elementos, donde si se elimina uno, el index no se ve afectado, sigue manteniendo su orden numérico; mientras que el key es la identificación de cada objeto, es decir que si uno es eliminado, de cualquier manera el siguiente key generado es el que le sigue, no el que se eliminó, dejando así que el key eliminado quede perdido

const leerObjetos = ()=> {
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres", "readonly");
    const objectStore = IDBtransaction.objectStore("nombres");
    const cursor = objectStore.openCursor();    //leer lo que está en nuestro puntero
    cursor.addEventListener("success", ()=> {
        if(cursor.result) {
            console.log(cursor.result.value);
            cursor.result.continue()
        } else console.log("Todos los objetos fueron leidos");  //Este else siempr ese va a ejecutar, ya que lo que tiene el utilizar el cursor, es que siempre tendrá valor de nulo excepto cuando llegue al final, que eso provocará que se ejecute al final del todo el else
    })
}
//Al escribir en la consola la función 'leerObjetos()' se leen todos los objetos de nuestra db

const modificarObjeto = (key, objeto)=> {
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres", "readwrite");
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.put(objeto, key);   //Este modifica al objeto, y de no encontrarlo lo agrega
    IDBtransaction.addEventListener("complete", ()=> {
        console.log("objeto modificado correctamente");
    })
}

// al escribir en la consola 'modificarObjeto(1, {nombre : "Juan mod"})', se modifica el valor en la key indicada por el contenido indicado

const eliminarObjeto = key=> {
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres", "readwrite");
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.delete(key);
    IDBtransaction.addEventListener("complete", ()=> console.log("Objeto eliminado correctamente"))
}

// solo como dato, el código se puede simplificar nombrando como una variable a estas tres lineas de obtención de request
    // const db = IDBRequest.result;
    // const IDBtransaction = db.transaction("nombres", "readwrite");
    // const objectStore = IDBtransaction.objectStore("nombres");
// No se hará ahorita para que se vea bien lo que se hace en cada función del CRUD, pero esta sería una manera de simplificar el código