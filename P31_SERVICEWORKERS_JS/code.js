// Servie Workers

// El service worker se ejecuta en el almacenamiento local del usuario, es por esto que al registrarse un service worker por ejemplo de lo que es wha web, al cerrar nosotros el navegador, todavía podemos sseguir recibiendo notificaciones del mismo

/* 
    - Interfaz serviceWorker
    - serviceWorker lifeCycle: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
    - Registrar un service worker con el método Register()
    - Enviar mensajes con el método postMessage()
    - Evento Fetch
    - Registrar caché y mostrar sitio web offline
    - Chat Realtime
*/

// console.log(navigator.serviceWorker);   //De esta manera se compurueba si el navegador admite a los service workers, ya que de lo contrario debería arrojar un error o aparecería como undefined

// if(!navigator.serviceWorker) {  //Otra manera de comprobarlo
    // console.log("Tu navegador no soporta Service Workers");
// }

if(navigator.serviceWorker) {
    navigator.serviceWorker.register("sw.js"); //Este es el método para registrar serviceworkers, se selecciona la opción de unregister desde las dev tools de google, en la sección de Application / Service workers para así eliminar al service worker
}

navigator.serviceWorker.ready.then(res=> res.active.postMessage("hola como tas?"));    //Esto verifica que el service worker ya haya cargado, ya que luego tardan, y es por esto que también se devuelve una promesa, por lo que se trabaja con .then; aparte es para el ejercicio del addEventListener("message"), donde se envía un mensaje al service worker

navigator.serviceWorker.addEventListener("message", e=> {
    console.log("Mensaje recibido del service worker: ");
    console.log(e.data);
})