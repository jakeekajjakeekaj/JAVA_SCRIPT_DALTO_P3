// OBJETO SCREEN

/* 
    AnchoTotal = screen.width //Ancho total de la pantalla
    AlturaTotal = screen.height //Altura total de la pantalla

    AnchoDisponible = screen.availWidth //Ancho disponible de la pantalla
    AlturaDisponible = screen.availHeight //Altura disponible de la pantalla

    Resolucion = screen.pixelDepth //Resolución de color de la pantalla
    Profundidad = screen.colorDepth //Profundidad de bits de la paleta de colores
*/

AnchoTotal = screen.width;
AlturaTotal = screen.height;

AnchoDisponible = screen.availWidth;
AlturaDisponible = screen.availHeight;

Resolucion = screen.pixelDepth;
Color = screen.colorDepth;

console.log(`Width= ${AnchoTotal}`);    // Ancho total que se puede mostrar en la página
console.log(`Height= ${AlturaTotal}`);  //Alto total que se puede mostrar en la pagina

console.log(`Avail Width= ${AnchoDisponible}`); // Esto es el disponible, es decir el total menos la interfaz
console.log(`Avail Height= ${AlturaDisponible}`);   //Igual indica el total menos la interfaz, es decir que por ejemplo gracias a nuestra barra de tareas, se quita un poco el disponible

// *** PARA ESTE CASO LA DIFERENCIA CON EL innerHeight o el innerWidth ES QUE EL inner TRABAJA CON EL VIEWPORT, ES DECIR CON LO QUE SE VE QUE ES DISPONIBLE, SI POR EJEMPLO TENEMOS ABIERTA LA CONSOLA, PUES NUESTRA VIEWPORT DE DISMINUYE POR EJEMPLO ***

console.log(`Resolution= ${Resolucion}`);
console.log(`Color= ${Color}`);
