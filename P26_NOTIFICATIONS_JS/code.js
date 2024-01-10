// Notifications

"use strict";

if(!('Notification' in window)) {
    console.log("Las notificaciones no estan disponibles en tu navegador");
}

Notification.requestPermission( ()=> {
    if(Notification.permission == "granted") {
        // console.log("Permiso concedido");   //Aquí se imprime que el permiso ha sido concedido
        new Notification("Hoooolaaaa :))"); //Aquí saltarían notificaciones, estas se verían por ejemplo en el sistema como una ventanita saliendo en la esquina inferior derecha
    }
});