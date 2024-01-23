self.addEventListener("install", e=> {
    console.log("Instalando service worker");
}); //De esta manera se 'instalaría' lo que es el service worker, una vez instalado, ya no se volverá a ejecutar esta parte porque ya ha sido instalado

self.addEventListener("activate", ()=> {
    console.log("El service worker está activo");
}); // De esta manera se verifica si el service worker se encuentra activado

self.addEventListener("error", e=> {
    console.log(`Error ${e}`);
}); // Este srive para trabajar con errores

self.addEventListener("fetch", ()=> {
    console.log("service worker interceptando petición");
}); // De esta manera se trabaja con peticiones de por medio

self.addEventListener("message", e=> {
    console.log("Mensaje recibido del navegador: ");
    console.log(e.data);    //Hasta aquí es el recibimiento del mensaje a nuestro service worker desde el navegador
    e.source.postMessage("Pos bien y tu?");    //De esta manera se envía el mensaje desde el service worker
}); //De esta manera se recibió el mensaje a nuestro servidor gracias a los service workers

