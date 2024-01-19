// Web Workers

// Objeto Navigator
// - NavigatorID.appCodeName: Devuelve el nombre código interno del navegador actual. No siempre es correcto
// - NavigatorID.appName: Devuelve el nombre oficial del navegador. No siempre es correcto
// - NavigatorID.appVersion: Devuelve la versión del navegador. No siempre es correcto
// - Navigator.connection: Provee un objeto NetworkInformation
// - NavigatorGeolocation.geolocation: Devuelve un objeto geolocation
// - NavigatorConcurrentHardware.hardwareConcurrency: Devuelve el npumero de núcleos de procesadores lógicos disponibles

console.log("AppCodeName: ", navigator.appCodeName); console.log("");   // No siempre es correcto, devuelve el nombre del navegador, para este caso por ejemplo 'Mozilla'
console.log("AppName: ", navigator.appName); console.log("");   // No siempre es correcto, devuelve el nombre oficial del naveagor, para este caso por ejemplo es Netscape
console.log("AppVersion: ", navigator.appVersion); console.log(""); // No siempre es correcto, versión del OS
console.log("Connection: ", navigator.connection); console.log(""); // Devuelve si el navegador está conectado o no, con su información de red
console.log("Geolocation: ", navigator.geolocation); console.log("");   // Devuelve el objeto geolocation
console.log("HarwareConcurrency: ", navigator.hardwareConcurrency); console.log("");    // Cantidad de núcleos del procesador lógico
console.log("Language: ", navigator.language); console.log(""); // Devuelve el idioma
console.log("Languages: ", navigator.languages); console.log("");   // Devuelv eun arreglo con la cantidad de idiomas que el usuario entiende
console.log("MimeTypes: ", navigator.mimeTypes); console.log("");   // Todos los mimetypes aceptados
console.log("Online: ", navigator.online); console.log(""); // Si está online u offline
console.log("UserAgent: ", navigator.userAgent); console.log("");   //Devuelve información acerca del navegador
console.log("CookiesEnabled: ", navigator.cookieEnabled); console.log(""); // Cookies activadas o desactivadas
console.log("Permissions: ", navigator.permissions); console.log("");   // Nos permite acceder a los permisos del navegador, como el micrófono, cámara, notificaciones, ventanas emergentes, etc
console.log("Platform: ", navigator.platform); console.log(""); // El sistema, ene ste caso por ejemplo win32, pero si estuviéramos en mac, sería mac
console.log("Plugins: ", navigator.plugins); console.log("");   // Devuelven un plugin array, y son los plugins instalados en el navegador
console.log("Product: ", navigator.product); console.log("");   // Devuelve gecko
console.log("ServiceWorker: ", navigator.serviceWorker); console.log("");   // Tiene que ver con los webworkers, a diferencia de estos, este si comparte información a pesar de que la página está cerrada (tema a ver más adelante)

// ------- Métodos --------

// navigator.getUserMedia();    //Se recomienda más trabajar con media string o media recorder o media device; es un método que permite acceder al micrófono y video de nuestro navegador

navigator.registerContentHandler(); //Permite a los sitios web registrarse como posibles controladores de un tipo MIME determinado

navigator.registerProtocolHandler();    //Permite a los sitios web registrarse como posibles controladores de un protocolo determinado

navigator.requestMediaKeySystemAccess();    //Devuelve un objeto Promise para un objeto MediaKeySystemAccess

navigator.javaEnabled();    // Devuelve un valor Boolean que indica si el navegador tiene o no habilitado Java

navigator.sendBeacon(); // Usado para transferir de forma asíncrona conjuntos pequeños de datos HTTP del agente usuario al servidor

navigator.vibrate();    // Causa vibración en el dispositivo que la soporta. No hace nada si el soporte para vibración no está disponible