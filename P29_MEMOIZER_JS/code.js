// Memorization

"use strict";

let cache = [];

const memoizer = func=> {
    return e=> {
        const index = e.toString();
        if(cache[index] == undefined) {
            cache[index] = func(e);
        }
        return cache[index];
    }
}

const hacerAlgo = num=> {
    const a = 20;
    const b = 12;
    let c = 0;
    for (let i = num-1; i >= 0; i--) {
        for (let j = i-1; j >= 0; j--) {
            c+= a * b;
        }
    }
    return c;
}


//Sin el memorizador, lo de abajo al ejecutarse tardaría demasiado tiempo
console.log("Funcion SIN Memoizer");
const date = new Date();
hacerAlgo(60000);
console.log(new Date() - date);

const date2 = new Date();
hacerAlgo(60000);
console.log(new Date() - date2);

const date3 = new Date();
hacerAlgo(60000);
console.log(new Date() - date3);

const date4 = new Date();
hacerAlgo(60000);
console.log(new Date() - date4);

console.log("Funcion CON Memoizer");

const memo = memoizer(hacerAlgo);

const mdate = new Date();
hacerAlgo(60000);
console.log(new Date() - mdate);

const mdate2 = new Date();
hacerAlgo(60000);
console.log(new Date() - mdate2);

const mdate3 = new Date();
hacerAlgo(60000);
console.log(new Date() - mdate3);

const mdate4 = new Date();
hacerAlgo(60000);
console.log(new Date() - mdate4);