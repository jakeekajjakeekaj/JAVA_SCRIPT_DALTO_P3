// CANVAS

// Es un objeto de HTML con el que se pueden crear gráficos, es como si fuera SVG pero no vectorial, sin embargo al trabajar con gráficas o estadísticas, lo que es CANVAS puede venir muy bien

// CANVAS pasa por la GPU, en los tiempos de antes todo pasaba por la CPU, sin embargo con el pasar del tiempo las GPU han mejorado en comparación de los CPU y es por esto que ahora pasa por la GPU

/*
EJEMPLOS:
    - strokeRect
    - strokeStyle
    - fillRect
    - fillStyle
    - lineWidth
    - lineTo
    - moveTo
    - closePath
    - beginPath
*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");    // Se indica el 2d ya que se puede trabajar tanto con 2d y 3d

ctx.lineWidth = "4";    // D esta manera se cambia el grosor de la linea
ctx.strokeStyle = "#f00";   // De esta manera se cambia el color del rectángulo, NO DEL RELLENO, asi mismo todo lo que tenga que ver con el estilo se debe poner hasta arriba ya que de lo contrario no se contará el cambio
ctx.fillStyle = "#de0"; // De esta manera se cambia el color del relleno
ctx.strokeRect(50, 0, 400, 200);    // Al decir Rect, indicamos que es un rectángulo, así mismo al crear este rectángulo, le indicamos que es left: 50, top: 0, width: 400, height: 200
ctx.fillRect(30, 20, 400, 200); //De esta manera se rellena al rectángulo, las medidas como tal son las mismas, es decir left, top, width, height
ctx.lineTo(100, 300);   // Indicamos un punto en forma de coordenada
ctx.lineTo(120, 350);   // Indicamos otro punto en forma de coordenada ya que aquí será donde se una el otro punto
ctx.lineTo(140, 300);
ctx.stroke();   // Se traza la linea para unir los 2 puntos por ejemplo
ctx.closePath();    // De esta manera se acaba el gráfico para así poder abrir otro con nuevas lineas
ctx.beginPath();    // De esta manera se indica que se inciará un nuevo trazado de lineas, para así finalizar a la anterior y poder crear nuevas
ctx.lineTo(160, 300);
ctx.lineTo(180, 350);
ctx.lineTo(200, 300);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(120, 150, 100, 10, 40);
ctx.stroke();