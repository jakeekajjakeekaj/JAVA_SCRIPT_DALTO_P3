// Todo sobre funciones flecha

// La sintaxis de las funciones flecha tiende a ser más corta, un ejemplo de esto es:
// const saludar = function() {return nombre = "Pedro"};    De esta manera se declararía una función normal que solo tenga una sentencia, mientras que con la función flecha queda:
// const saludar ()=> nombre = "pedro"; Como se puede apreciar es mucho más corta la sintaxis

// No son recomendadas para ser usadas como métodos o constructores

// Abajo se muestra al manera correcta de declarar el método, como se puede apreciar, no se declara una arrow function, es una función declarada de manera regular
// const objeto = {
//     name : "ruben",
//     saludar : function() {console.log(`Hola ${this.name}`)}
// }

// objeto.saludar();

// Abajo se muestra la manera incorrecta de declarar al método, como se puede apreciar se usar una arrow function y realmente al mandar a llamar al método, este no es ejecutado
// const objeto = {
//     name : "ruben",
//     saludar : ()=> {console.log(`Hola ${this.name}`)}    //Este es el método que no se reconoce al usar al arrow function, y esto es porque al utilizar this, esto ocasiona problemas ya que this, hace referencia a la window
// }

// objeto.saludar();

