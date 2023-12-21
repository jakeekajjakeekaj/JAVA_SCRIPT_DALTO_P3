// this

// window es igual a this, esto se puede comprpbar diciendo
// console.log(window == this);    //true
// console.log(window === this);   //true

// this.nombre = "ruben";

// const objeto = {
//     nombre : "Lucas",
//     saludar : ()=> {
//         console.log(`Hola ${this.nombre}`);
//     }
// }

// function otroContext() {
//     nombre = "Roberto";
//     objeto.saludar()
// }

// objeto.saludar();   // Aquí se imprime ruben, esto debido a que this.nombre tiene este valor, ignorando así a Lucas

// otroContext();  //Aquí se imprime Roberto, esto debido a que se modificó el valor de lo que es el this.nombre

// console.log(this.nombre);   //Se imprime Roberto, debido a que se modificó el valor del this.nombre

// Sin embargo aquí todo está funcionando e una manera más compleja, y esto es debido a que se usan arrow functions, si nosotros no usamos arrow functions queda de la manera: 

// this.nombre = "Ruben";

// const saludar = function() {
//     console.log(`Hola ${this.nombre}`);
// }

// const objeto = {
//     nombre : "Lucas",
//     saludar
// }

// function otroContext() {
//     this.nombre = "Roberto";
//     this.saludar = saludar;
// }

// objeto.saludar();   //Hola Lucas

// const objeto2 = new otroContext();

// objeto2.saludar();  //Hola Roberto

