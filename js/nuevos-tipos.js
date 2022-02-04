// ***************************************************************************************

// Symbols

/* let id = Symbol("id"),
    id2 = Symbol("id2");

console.log(id === id2);
console.log(typeof id, typeof id2);

const NOMBRE = Symbol();
const SALUDAR = Symbol();

const persona = {
    [NOMBRE]: "Gin"
}

console.log(persona);

persona.NOMBRE = "Gin2"

console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = () => {
    console.log("Hola");
}

console.log(persona);
persona[SALUDAR]();

for (const propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

console.log(Object.getOwnPropertySymbols(persona)); */

// ***************************************************************************************

// Sets

/* const set = new Set([1, 2, 3, 4, 5, true, 1, 2, {}, {}, false, true, "hola", "HOLA"]);
console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(1);
set2.add(3);
set2.add(2);
set2.add(true);
set2.add(false);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);
console.log(set2.size);

console.log("Recorriendo set");

for (item of set) {
    console.log(item);
}

console.log("Recorriendo set2");

set2.forEach(item => {
    console.log((item));
});

let arr = Array.from(set);

console.log(arr[0]);

set.delete("HOLA");

console.log(set);

console.log(set.has("hola"));
console.log(set.has("HOLA"));

set2.clear();

console.log(set2); */

// ***************************************************************************************

// Maps

/* const mapa = new Map();
mapa.set("nombre", "Gin");
mapa.set("apellido", "Kurosaki");
mapa.set("edad", 21);

console.log(mapa);
console.log(mapa.size);

console.log(mapa.has("correo"));
console.log(mapa.has("edad"));
console.log(mapa.get("nombre"));

mapa.set("nombre", "GIN");
console.log(mapa.get("nombre"));
mapa.delete("apellido");

mapa.set(19, "1nueve");
mapa.set(false, "falsito");
mapa.set({}, {});

console.log(mapa);

for (let [key, value] of mapa) {
    console.log(`Llave: ${key}, Valor: ${value}`);
}

const mapa2 = new Map([
    ["nombre", "Kenai"],
    ["edad", 8],
    ["animal", "perro"],
    [null, "nulo"]
]);

console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2, valoresMapa2); */

// ***************************************************************************************

// WeakSets & WeakMaps

/* const ws = new WeakSet();
let valor1 = { "valor1": 1 }
let valor2 = { "valor2": 2 }
let valor3 = { "valor3": 3 }

ws.add(valor1);
ws.add(valor2);

console.log(ws);
console.log(ws.has(valor1));
console.log(ws.has(valor3));

ws.delete(valor1);
console.log(ws);

ws.add(valor2);
ws.add(valor3);
console.log(ws);

setInterval(() => {
    console.log(ws);
}, 1000);

setTimeout(() => {
    valor1 = null;
    valor2 = null;
    valor3 = null;
}, 5000); */

/* const wm = new WeakMap();

let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);

console.log(wm.has(llave1));

console.log(wm.get(llave1));

wm.delete(llave2);
console.log(wm);

wm.set(llave2, 2);
wm.set(llave3, 3);
console.log(wm);

setInterval(() => {
    console.log(wm);
}, 1000);

setTimeout(() => {
    llave1 = null;
    llave2 = null;
    llave3 = null;
}, 5000); */

// ***************************************************************************************

// Iterables & Iterators

/* const iterable = new Set([1, 1, 2, 2, 3, 4, 5]),
    // const iterable = "Hola Mundo",
    // const iterable = new Map([["Nombre", "Gin"]]),
    iterador = iterable[Symbol.iterator]();
// Accedemos al iterador del iterable

console.log(iterable);
console.log(iterador);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
let next = iterador.next();

while (!next.done) {
    console.log(next.value);
    next = iterador.next();
}
 */

// ***************************************************************************************

// Generators

// function* iterable() {
//     yield "Hola";
//     console.log("Holaa");
//     yield "Hola2";
//     console.log("Siguiendo más intrucciones");
//     yield "Hola3";
//     yield "Hola4";
// }

// let iterador = iterable();
// // console.log(iterador.next());

// for (let y of iterador) {
//     console.log(y);
// }

// const arr = [...iterable()];
// console.log(arr);

// function cuadrado(valor) {
//     setTimeout(() => {
//         return console.log({ valor, resultado: valor * valor });
//     }, Math.random * 1000);
// }

// function* generador() {
//     console.log("Start");
//     yield cuadrado(0);
//     yield cuadrado(1);
//     yield cuadrado(2);
//     yield cuadrado(3);
//     yield cuadrado(4);
//     yield cuadrado(5);
//     console.log("End");
// }

// let gen = generador();

// for (let y of gen) {
//     console.log(y);
// }