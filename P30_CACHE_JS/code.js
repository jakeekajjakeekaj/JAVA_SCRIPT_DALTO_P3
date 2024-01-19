//cache

// El caché es una memoria a corto plazo y trabaja con las promesas

"use strict";

// caches.open("archivos-estaticos");  // De esta manera se crea el caché con este nombre, la manera de acceder al mismo es a través de la consola, en application, en cache storage y ya se accede a lo que se acaba d crear, para este caso es como si se creara una pequeña tabla de base de datos, sus atributos son:
// - #
// - name
// - Response Type  Indica el tipo, por ejemplo basic
// - Content Type   Tipo de contenido, por ejemplo text HTML
// - Content Length Indica el tamaño
// - Time Cached    Cuándo se almacenó

caches.open("archivos-estaticos").then(cache=> {
    console.log(cache);
    // cache.add("index.html");    //Toma una URL, la recupera y agrega al objeto de respuesta resultante a la caché dada. Esto es funcionalmente equivalente a llamar fetch() y luego usar put() para agregar los resultados a la caché
    // cache.addAll(["index.html", "style.css", "code.js"]); // Pasa todo en forma de array
    cache.match("index.html");   //Devuelve un Promise que se resuelve con la respuesta asociada con la primra solicitud coincidente en el objeto
    // cache.matchAll();    //Devuelve un Promise que se resuelve en una matriz de todas las solicitudes coincidentes en el objeto almacenado
    // cache.put(); //Toma tanto una solicitud como su respuesta y la agrega a la caché dada
    // cache.delete();  // Elimina el recurso
    // cache.keys();    //Devuelve un Promise que se resuelve en una matriz de keys de los objetos almacenados
});