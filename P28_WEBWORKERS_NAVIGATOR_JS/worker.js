// console.log("hola :)");

addEventListener("message", e=> {
    console.log(e.data) // De esta manera se imprime el mensaje recibido al worker desde el script principal
});
// 6:35:54