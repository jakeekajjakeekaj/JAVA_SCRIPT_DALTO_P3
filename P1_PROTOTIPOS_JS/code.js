// prototipos

// todos contienen el prototipo objeto (__proto__: Object), es decir que incluso los strings o enteros tienen este tipo de prototipo objeto

// Para acceder a un protoptip heredado, es decir los ya creados que contienen por ejemplo el string, los enteros o los objetos, se accede de la forma "variable.__proto__", sin embargo si se quiere acceder memdiante prototipos no heredados, es decir los que nosotros tenemos que crear que es por ejemplo para el caso de crear funciones, nosotros tenemos que crear el prototipo en la forma "variable.prototype", y para acceder al mismo sería en la forma "variable.prototype.__proto__"

// CARACTERISTICAS:
// - Un prototipo deifinido en su codigo fuente es mutable
// - Es en si un objeto, así como otros
// - Tiene una existencia física en la memoria
// - Puede ser modificado y llamado
// Puede ser visto como un modelo ejemplar de una familia objeto
// Un objeto heredad propiedades (valores y métodos) de su prototipo

// Todos los métodos por ejemplo lo que es el push, reverse, etc. están alojados en lo que es el prototipo
// Al crear un objeto, todo se aloja dentro de lo que es el prototipo

class Objeto {
    constructor() {};
    hablar() {
        console.log("hola");
    }
}

const objeto = new Objeto();

objeto.hablar = ()=> {
    console.log("Hola desde afuera");
}

objeto.__proto__.hablar();  //De esta manera mandas a llamar a lo que está dentro del proto, en este caso sería lo declarado durante la creación del objeto
objeto.hablar();    //En este caso mandas a llamar a la función que está afuera, no a la declarada durante la creación del objeto