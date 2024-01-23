// Servie Workers

// Trabajando con caché y modo offline
// Si nos metemos a las herramientas del desarrollador, en la sección de network y de aquí seteamos el estado en offline, sale el dinosaurio porque es simulando que no se tiene conexión a internet; sin embargo se puede mostrar la página (al menos lo que quedó guardado en caché) sin internet

if(navigator.serviceWorker) {
    navigator.serviceWorker.register("sw.js"); //Este es el método para registrar serviceworkers, se selecciona la opción de unregister desde las dev tools de google, en la sección de Application / Service workers para así eliminar al service worker
}

navigator.serviceWorker.ready.then(res=> res.active.postMessage("hola como tas?"));    //Esto verifica que el service worker ya haya cargado, ya que luego tardan, y es por esto que también se devuelve una promesa, por lo que se trabaja con .then; aparte es para el ejercicio del addEventListener("message"), donde se envía un mensaje al service worker

navigator.serviceWorker.addEventListener("message", e=> {
    console.log("Mensaje recibido del service worker: ");
    console.log(e.data);
})