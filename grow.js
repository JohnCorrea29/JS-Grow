//VAR / LET

/*var hola = "Hola Mundo";
let hi = "Hi world";
console.log(hi);
console.log(hola);
console.log(window);
console.log(window.hola);
console.log(window.hi);

var musica = "Rock";
console.log("Variable Musica antes del bloque", musica);
//Esto es un bloque
{
    let musica = "Pop"
    console.log("variable musica dentro del bloque", musica);
}
console.log("Variable música después del bloque", musica);*/

// ***************************************************************************************

//CONSTANTES

/*let a;
const PI = 3.1416;
//const NUEVE;
console.log(PI);
//PI = 3.15;
a = "Kenai"
console.log(a);

const objeto = {
    nombre: "John",
    edad: 21
}

const colores = ["Rojo", "Azul", "White"];

console.log(objeto);
console.log(colores);

objeto.correo = "johncorrea@blacksip.com";
colores.push("Verde");

console.log(objeto);
console.log(colores);*/

// ***************************************************************************************

// STRINGS

/* let nombre = "John";
 let apellido = 'Correa';

 let saludo = new String("Hola Mundo"); //Poco uso

 let lorem = "       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aliquam quisquam saepe asperiores voluptas obcaecati delectus et, cupiditate eos veritatis quod aut. Sunt, debitis? Non architecto corporis eveniet corrupti molestias!"

 console.log(nombre, apellido, saludo);
 console.log(
     nombre.length,
     apellido.length,
     saludo.length,
     nombre.toLocaleUpperCase(),
     apellido.toLowerCase(),
     lorem.includes("amet"),
     lorem.includes("john"),
     lorem,
     lorem.trim(),
     lorem.split(",")
 );

// ***************************************************************************************

/* let nombre = "John";
 let apellido = "Correa";
 // Concatenación
 let saludo = "Hola mi nombre es " + nombre + " " + apellido + "."
 console.log(saludo);

 //Interpolación
 // Template String
 let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`;
 console.log(saludo2);

 // Agregar HTML con "" ó '' debe ser en una sola línea

 let ul = "<ul>< li > Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul>";
 console.log(ul);

 let ul2 = `
         <ul>
             <li>Primavera</li>
             <li>Verano</li>
             <li>Otoño</li>
             <li>Invierno</li>
         </ul>`

 console.log(ul2);

 // let ul3 = "<ul>";
 // ul3 += "<li> Primavera</li>";
 // ul3 += "<li> Verano</li>";
 // ul3 += "<li> Otoño</li>";
 // ul3 += "<li> Invierno</li>";
 // ult3 += "</ul>";
 // console.log(ul3); */

// ***************************************************************************************

//Números

/*let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.6";

console.log(a, b);
console.log(c.toFixed(1));
console.log(c.toFixed(5));
console.log(parseInt(c));
console.log(parseFloat(c));
console.log(typeof c, typeof d);
console.log(a + b);
console.log(c + d);
console.log(c + parseInt(d)); //Recomendable usar librerías para operaciones
console.log(c + parseFloat(d));
console.log(c + Number.parseInt(d));
console.log(c + Number.parseFloat(d));*/

// ***************************************************************************************

// Booleans

/*let verdadero = true;
let falso = false;
// Con el constructor
let v = Boolean(true);
let y = Boolean(false);

console.log(verdadero, falso, v, y);
console.log(typeof verdadero, typeof falso);

// Truthy
console.log(Boolean(0));
console.log(Boolean(-7));
console.log(Boolean(""));
console.log(Boolean(" "));*/

// ***************************************************************************************

// Undefined, null and NaN

//Indica que no se ha inicializado una variable y que el valor está ausente
/*let indefinida; //Asignado por JS
console.log(indefinida);

//Es una valor especial que indica la ausencia de un valor
let nulo = null; //Asignado por el dev 'intencionalmente'
console.log(nulo);

//NaN - Not a Number
// Operaciones aritmeticas diferente al tipo número
let noEsUnNumero = "hola" * 3.5;
console.log(noEsUnNumero);*/

// ***************************************************************************************

// Funciones

// Función declarada

/*function estoEsUnaFuncion() {
    console.log("1");
    console.log("2");
    console.log("3");
}

// Invocación de función
estoEsUnaFuncion();*/

/*function unaFuncionQueDevuelveValor() {
    console.log("1");
    //return 19;
    console.log("2");
    console.log("3");
    return "La función ha retornado una Cadena de texto";
}

let valorDeFuncion = unaFuncionQueDevuelveValor();
console.log(valorDeFuncion)*/

//Función con parametros

/*function saludar(nombre = "John", edad = 0) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar("Gin", 21);
saludar();*/

// Funciones declaradas vs expresadas

//Función declarada
/*funcionDeclarada();

function funcionDeclarada() {
    console.log("Esto es una función declarada, puede invocarse en cualquier parte del código. Incluso antes de que la función sea declara");
}
//Función expresada

//Función anónima

const funcionExpresada = function () {
    console.log("Esto es una funciíon expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición JS nos dira..");

}
funcionExpresada();*/

// ***************************************************************************************

// Arrays

/*const a = [];
const b = [1, true, "Hola", ["a", "b", "c"]];
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[3][2]);

const c = Array.of("x", "y", "z", "9");
console.log(c);

const d = Array(100).fill(false);
console.log(d);

// No se usa e y f
const e = new Array();
console.log(e);

const f = new Array(1, 2, 3, true);
console.log(f);

const colores = ["Blanco", "Negro", "Gris"];
console.log(colores);
// Push agrega elemento al final
colores.push("Azul");
console.log(colores);
// Pop elimina el ultimo elemento
colores.pop();
console.log(colores);

colores.forEach(function (e, index) {
    console.log(`<li id="${index}">${e}</li>`);
});*/

// ***************************************************************************************

// Objetos

/*const b = {

}
console.log(b)

// No utilizado
const c = new Object();
console.log(c);

// Los objetos dentro de un objeto dentro las variables = atributos/propiedades y a las funciones = métodos
const gin = {
    nombre: "Gin",
    edad: 21,
    hobbies: ["Series", "Anime", "VideoGames"],
    soltero: true,
    contacto: {
        correo: "johncorrea@blacksip.com",
        ig: "@Jxxhn__",
        movil: "4564154154154"
    },
    saludar: function () {
        console.log(`Eu meesi :D`)
    },
    decirMiNombre: function () {
        console.log(`Hola me apodo como ${this.nombre} y tengo ${this.edad} años, bandidas al dm IG: ${this.contacto.ig}`)
    }
}
console.log(gin);
// No muy utilizada para objetos
console.log(gin["nombre"]);
// Mejor utilizar el .
console.log(gin.contacto);
console.log(gin.contacto.ig);
console.log(gin.hobbies[2]);
gin.saludar();
gin.decirMiNombre();
console.log(Object.keys(gin));
console.log(Object.values(gin));
console.log(gin.hasOwnProperty("nombre"));
console.log(gin.hasOwnProperty("nacimiento"));*/

// ***************************************************************************************

// Tipos de operadores

// Aritméticos +-*/% ( )

/* let a = 5 + (5 - 10) * 3;
 // Residuo de la división %
 let modulo = 5 % 2;
 console.log(a);
 console.log(modulo);

 // Relacionales

 console.log(9 > 8);
 console.log(8 > 9);
 console.log(8 >= 9);
 console.log(9 >= 8);
 console.log(7 < 7);
 console.log(7 <= 7); */

/* = 1 igual es asignación de variable
==  2 iguales es comparación de valores
=== 3 iguales es comparación de tipo de dato y de valor
*/

// Recomendable utilizar el triple para tipo de dato y valor !
/*console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);*/

// Incremento Decremento

/*let i = 2;

console.log(i++);
//console.log(++i);
//i = i + 2;
//i *= 3;

// Operador unario

i++;
i--;

// No recomendable ↓
++i;
--i;

console.log(i);*/

/* Operadores lógicos ! - Not: Lo verdadero lo vuelve falso y viceversa
|| - Or: Cuando tengo dos o más condiciones con que una se cumpla, es decir, sea true, el OR validará
&& - And: 2 o más condiciones, todas tienen que cumplirse, es decir, ser verdaderas para que AND se valide!
*/

/*console.log(!true);
console.log(!false);
console.log(9 === 9 || ("9") === 9);
console.log(9 === 9 && ("9") === 9);
console.log(9 === 9 && ("9" === "9"));*/

// ***************************************************************************************

// Condicionales

/*if - else*/

/*let edad = 19;

/*if (edad > 17) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")

}

if (edad >= 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")

}

if (edad < 18) {
    console.log("Eres menor de edad")
} else {
    console.log("Eres mayor de edad")

}

if (edad <= 17) {
    console.log("Eres menor de edad")
} else {
    console.log("Eres mayor de edad")

}* /

/*if- else if - else*/

/*
Déjame dormir 12am - 5am
Buenos días 6am - 12pm
Buenas tardes 12pm - 6pm
Buenas noches 6pm - 12am
*/
/*
         let hora = 13;
        if (hora >= 0 && hora <= 5) {
            console.log("Déjame dormir")
        } else if (hora >= 6 && hora <= 11) {
            console.log("Buenos días")
        } else if (hora >= 12 && hora <= 18) {
            console.log("Buenas tardes")
        } else {
            console.log("Buenas noches");
        }

        /*Operador ternario (condición) ? verdadero: false

        console.log("Operador ternario");
        let eresMayor = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
        console.log(eresMayor);

        /*switch - case*/
/*
Domingo - 0
Lunes - 1
Martes - 2
Miercoles - 3
Jueves - 4
Vierenes - 5
Sábado -6


let dia = 1;
switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("No es un día de la semana");
        break;
}*/

// ***************************************************************************************

// Ciclos

// While

/*let contador = 0;

while (contador < 10) {
    console.log("While " + contador);
    contador++;
}

do {
    console.log("Do While " + contador);
    contador++;

} while (contador < 10);*/


// For

/*for (let i = 0; i < 10; i++) {
    console.log("For " + i);
}

let numeros = [10, 20, 30, 40, 50, 60, 47, 80, 90];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Forin || Variante del ciclo for recorrer propiedades primitivo

const gin = {
    nombre: "Gin",
    edad: 21,
    ig: "@jxxhn___"
}

for (const propiedad in gin) {
    console.log(`Key:${propiedad}, Values: ${gin[propiedad]}`);
}

// Forof Cada uno de los elementos que sea iterable(Que se pueda partir(Recorrer))

for (const item of numeros) {
    console.log(item);
}

let cadena = "Hola Mundo";

for (const caracter of cadena) {
    console.log(caracter);
}*/

// ***************************************************************************************

// Manejo de errores

/*try {
    console.log("En el Try se agrega el código a evaluar");
    noExiste;
    console.log("Segundo mensaje en el try");
} catch (error) {
    console.log("Catch, captura cualquier error surguido o lanzado en el Try");
    console.log(error);
} finally {
    console.log("El bloque finally se ejecutará siempre al final de un bloque Try-Catch");
}*/

/*try {
    let numero = "a";
    if (isNaN(numero)) {
        throw new Error("El caractér digitado no es un número");
    }

    console.log(numero * numero)
} catch (error) {
    console.log(`Se produjo el siguiento error: ${error}`)
}*/


// ***************************************************************************************

// Break y Continue

/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        break;
    }
    console.log(numeros[i]);
}

for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        continue;
    }
    console.log(numeros[i]);
}*/

// ***************************************************************************************

// Destructuración

/*const numeros = [1, 2, 3];

// Sin destructuración
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2]

console.log(uno, dos, tres);

// Con destructuración

const [one, two, three] = numeros;

console.log(one, two, three);

const persona = {
    nombre: "John",
    apellido: "Correa",
    edad: 21
}

let { nombre, apellido, edad } = persona;
console.log(nombre, apellido, edad)*/

// ***************************************************************************************

// Objetos literales

/*let nombre = "Gin",
    edad = 2;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function () {
        console.log("Guau Guau!")
    }
}

console.log(perro);
perro.ladrar();


const dog = {
    nombre,
    edad,
    raza: "Callejero",
    ladrar() {
        console.log("Guau Guau Guau!")

    }
}

console.log(dog);
dog.ladrar(); */

// ***************************************************************************************

// Parámetros REST y Operador Spread

/*function sumar(a, b, ...c) {
    let resultado = a + b;

    c.forEach(function (n) {
        resultado += n
    });

    return resultado;
}

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3, 4, 5, 6));

const arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2];
console.log(arr3);*/

// ***************************************************************************************

// Arroy function

/*const saludo = () => console.log("Hola");

saludo();*/


/*const saludo = nombre => console.log(`Hola ${nombre}`);

saludo("Gin");

/*const sumar = function (a, b) {
    return a + b;
}*/

/*const sumar = (a, b) => a + b;

console.log(sumar(1, 1));

// Para varías líneas respetar el cuerpo de la función

const funcionDeVariasLineas = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

funcionDeVariasLineas();

const numeros = [1, 2, 3, 4, 5];

numeros.forEach((el, index) => console.log(`${el} esta en la posición ${index}`));

function perro() {
    console.log(this);
}

perro();

const Perro = {
    nombre: "Gin",
    ladrar() {
        console.log(this);
    }
}

Perro.ladrar();*/

// ***************************************************************************************

// Prototipos

/*POO
    Clases: Modelo a seguir.
    Objetos: Es una instancia de una clase
        -Atributos: caracteristica o propiedad de un objeto (Variables dentro de un objeto)
        -Métodos: acciones que un objeto puede realizar (Funciones dentro un objeto)

*/

/*const animal = {
    nombre: "Gin",
    sonar() {
        console.log("Hago sonido porque estoy vivo");
    }

}

const animal2 = {
    nombre: "Lola Bunny",
    sonar() {
        console.log("x2");
    }
}

console.log(animal);
console.log(animal2);*/


// Función constructora

// Los atributos y los métodos deben de ir con this

/*function Animal(nombre, genero) {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    //Métodos v.1
    this.sonar = function () {
        console.log("Hago sonido porque estoy vivo");
    }

    this.saludar = function () {
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

// Función construcutora donde asignamos funciones al prototipo no a la función como tal

//Métodos agregados al prototipo de la función constructora

Animal.prototype.sonar = function () {
    console.log("Hago sonido porque estoy vivo");
}

Animal.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
}

// ***************************************************************************************

// Herencia prototípica

function Perro(nombre, genero, size) {
    this.super = Animal;
    this.super(nombre, genero);
    this.size = size;
}

// Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobreescritura de métodos de prototipos padre en el hijo
Perro.prototype.sonar = function () {
    console.log("Soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function () {
    console.log("Guau Guauu!");
}

const snoppy = new Perro("Snoppy", "Macho", "Mediano"),
    lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoppy);
console.log(lolaBunny);

snoppy.sonar();
snoppy.saludar();
snoppy.ladrar();

lolaBunny.sonar();
lolaBunny.saludar();*/

// ***************************************************************************************

// Clases y Herencia

// El constructor es un método especial que se ejecuta en el momento de instanciar la clase

/*class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    //Métodos
    sonar() {
        console.log("Hago sonidos pq estoy vivo");
    }

    saludar() {
        console.log(`Klk ${this.nombre}`);
    }
}

class Perro extends Animal {
    constructor(nombre, genero, size) {
        //Super, manda a llamar el constructor padre
        super(nombre, genero);
        this.size = size;
        this.raza = null;
    }

    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar() {
        console.log("Guauu Guauu!");
    }

    // ***************************************************************************************

    // Métodos estáticos, getters y setters

    // Un método estático se puede ejecutar sin necesidad de instanciar la clase

    static queEres() {
        console.log("Los perros son animales mamíferos que pertenecen...");
    }

    // Los setter y getters son métodos especiales que nos permiten establecer y obtener valores de atributos de nuestra clase

    get getRaza() {
        return this.raza;
    }

    set setRaza(raza) {
        this.raza = raza;
    }

}

Perro.queEres();

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Perro("Scooby doo", "Macho", "Gigante");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
//scooby.getRaza();
console.log(scooby.getRaza);
//scooby.setRaza();
scooby.setRaza = "Grán Danés"
console.log(scooby.getRaza);*/

// ***************************************************************************************

// Objeto console

/*console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es un msj informativo");
console.log("Registro de lo que ha pasado en nuestra aplicación");

let nombre = "John",
    apellido = "Correa",
    edad = 21;

console.log(nombre, apellido, edad);
console.log(`Hola mi nombres es ${nombre} ${apellido} y tengo ${edad} años`);

console.log(`Hola mi nombres es %s %s y tengo %d años`, nombre, apellido, edad);

console.clear();

console.log(window);
console.log(document);

console.dir(window);
console.dir(document);

console.clear();

console.group("Los cursos de @JonMircha en YT");
console.log("Curso de JS");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de FlexBox");
console.groupEnd();

console.groupCollapsed("Los cursos de @JonMircha en YT");
console.log("Curso de JS");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de FlexBox");
console.groupEnd();

console.clear();

console.log(console);
console.table(Object.entries(console).sort());

const numeros = [1, 2, 3, 4, 5],
    vocales = ["a", "e", "i", "o", "u"];

console.table(numeros);
console.table(vocales);

const perro = {
    nombre: "Gin",
    edad: 2,
    raza: "Idk"
}

console.table(perro);

console.clear();

console.time("Cuanto tarda mi código");
const arreglo = Array(1000000);

for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
}

console.timeEnd("Cuanto tarda mi código");

//console.log(arreglo);

console.clear();

for (let i = 0; i <= 100; i++) {
    console.count("código for");
    console.log(i);
}

console.clear();

let x = 3,
    y = 2,
    pruebaXY = "Se espera que X siempre sea menor a Y";

console.assert(x < y, [x, y, pruebaXY]);

console.clear();*/

// ***************************************************************************************

// Objeto Date

/*console.log(Date());

let fecha = new Date();
console.log(fecha);
//Día del mes
console.log(fecha.getDate());
//Día de la semana
console.log(fecha.getDay());
//Mes
console.log(fecha.getMonth());
//Año
console.log(fecha.getFullYear());

console.log("----- Hora ------");

//Hora
console.log(fecha.getHours());
//Minutos
console.log(fecha.getMinutes());
//Segundos
console.log(fecha.getSeconds());
//Milisegundos
console.log(fecha.getMilliseconds());

console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
console.log(Date.now());

let HBD = new Date(2000, 11, 29);
console.log(HBD);*/


// ***************************************************************************************

// Objeto Math


/*console.log(Math);
console.log(Math.PI);
//Valor absoluto de un número sin importar + o -
console.log(Math.abs(-7.8));
// Redondear
// Número entero mayor
console.log(Math.ceil(7.2));
// Número entero menor
console.log(Math.floor(7.8));
// Redondear justamente
console.log(Math.round(7.49));
// Raiz cuadrada
console.log(Math.sqrt(81));
// Potencia
console.log(Math.pow(2, 5));
// Negativo, positivo o 0 || -1, 0, 1
console.log(Math.sign(0));
// Random
console.log(Math.random());
console.log(Math.random() * 1000);
console.log(Math.round(Math.random() * 1000));*/

// ***************************************************************************************

// Operador de Cortocircuito

/*Cortocircuito OR: cuando el valor de la izquierda en la expersión siempre pueda validar
a true, es el valor que se cargará por defecto

Cortocircuito AND: cuando el valor de la izquierda en la expresión siempre pueda validar
a false, es el valor que se cargará por defecto
*/

/*function saludar(nombre) {
    nombre = nombre || "Desconocido"
    console.log(`Hola ${nombre}`);
}

saludar("John");
saludar();
console.log("Cadena" || "Valor de la derecha");
console.log(19 || "Valor de la derecha");
console.log(true || "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log({} || "Valor de la derecha");
console.log(false || "Valor de la derecha");
console.log(null || "Valor de la derecha");
console.log(undefined || "Valor de la derecha");
console.log("" || "Valor de la derecha");
console.log(0 || "Valor de la derecha");

console.log(false && "Valor de la derecha");*/


// ***************************************************************************************

// Alert, confirm y prompt

//console.log(window);
/*alert("Esto es una alerta");
confirm("Esto es una confirmación");
prompt("Hola esto es un aviso y le permite al usuario ingresar un valor")*/

/*let alerta = alert("Esto es una alerta"),
    confirmacion = confirm("Esto es una confirmación"),
    aviso = prompt("Hola esto es un aviso y le permite al usuario ingresar un valor");

console.log(alerta);
console.log(confirmacion);
console.log(aviso);*/

// ***************************************************************************************

// Expresiones Regulares

/*let cadena = "Lorem lorem ipsum dolo1r sit amet consectetur";

// i: ignora mayus o minus, g: buscan en todas
// let expReg = new RegExp("lorem", "ig");

// console.log(expReg.test(cadena));
// console.log(expReg.exec(cadena));

let expReg2 = /lorem{1,}/ig;

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));*/

// ***************************************************************************************

// Funciones Anónimas Autoejecutables

/*(function () {
    console.log("Mi primer IIFE");
})();

(function (d, w, c) {
    console.log("Mi segunda IIFE");
    console.log(d);
    console.log(w);
    c.log(c);
})(document, window, console);


//Formas de escribir funciones anónimas

(function () {
    console.log("Versión clásica");
})();

((function () {
    console.log("Versión Cockford");
})());

+function () {
    console.log("Versión Unaria");
}();

!function () {
    console.log("Versión Facebook");
}();*/


