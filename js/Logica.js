// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe.miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe.miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.miFuncion('hola que tal', ' ') devolverá['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe.miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

/*console.log("Ejercicios lógica #1");

// Ejercicio N.1
const cadena = (frase = "") =>
    (!frase) ? console.warn("Olvidaste ingresar datos") :
        console.info(`La frase ${frase} tiene ${frase.length} caracteres`);

cadena();
cadena("Hola Mundo");


const recortarTexto = (cadena = "", longitud = undefined) =>
    (!cadena) ? console.warn("No ingresaste valores") : console.info(cadena.slice(0, longitud));

recortarTexto("Hola Mundo", 4);



const separarTexto = (texto = "") => {
    (!texto) ? console.warn("No ingresaste un texto") : console.info(texto.split(" "));
}

separarTexto("Hola Sapaaaa")


const repetirTexto = (texto = "", veces = undefined) => {
    if (!texto && veces === undefined) {
        console.warn("Debes ingresar un texto y cantidad validos")
    } else if (veces === 0) {
        console.error("cantidad no puede ser 0");
    } else {
        for (let i = 0; i < veces; i++) {
            console.info(`${texto}, ${i}`);

        }
    }
}

repetirTexto("Sapaaa", 3)*/

// 5) Programa una función que invierta las palabras de una cadena de texto, pe.miFuncion("Hola Mundo") devolverá "odnuM aloH".
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe.miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo(que se lee igual en un sentido que en otro), pe.mifuncion("Salas") devolverá true.
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe.miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

/*console.log("Ejercicios lógica #2");


const inverso = (palabra = "") => {
    (!palabra) ? console.warn("No ingresate valor") : console.info(`La palabra ${palabra} se ve inversa así ${palabra.split("").reverse().join("")}`)
}

inverso("Super John Cena");


const contarTexto = (cadena = "", texto = "") => {
    if (!cadena) return console.warn("No ingresaste cadena");
    if (!texto) return console.warn("No ingresaste cadena");

    let i = 0;
    let contador = 0;

    while (i !== -1) {
        i = cadena.indexOf(texto, i)
        if (i !== -1) {
            i++;
            contador++;
        }
    }

    return console.info(`La palabra ${texto} se repite ${contador}`)
}

contarTexto("Mundo hola mundo mundo mundo", "Mundo")


const palindromo = (palabra = "") => {
    if (!palabra) return console.warn("No ingresaste la palabra");

    palabra = palabra.toLocaleLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return (palabra === alReves) ?
        console.info(`Sí es palíndromo, Palabra original ${palabra}, Palabra al reves ${alReves}`) :
        console.info(`No es palíndromo, Palabra original ${palabra}, Palabra al reves ${alReves}`)
}

palindromo();
palindromo("Sapas");

const eliminarCaracteres = (texto = "", patron = "") =>
    (!texto) ? console.warn("No ingresaste un texto") : (!patron) ? console.warn("No ingresaste un patron") :
        console.info(texto.replace(new RegExp(patron, "ig"), ""));

eliminarCaracteres();
eliminarCaracteres("xyz1");
eliminarCaracteres("xyz1, xyz2, xyz", "xyz");*/

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// 10) Programa una función que reciba un número y evalúe si es capicúa o no(que se lee igual en un sentido que en otro), pe.miFuncion(2002) devolverá true.
// 11) Programa una función que calcule el factorial de un número(El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.miFuncion(5) devolverá 120.

/*console.log("Ejercicios lógica #3");

const random = () => {

    let numeroRandom = 0;

    while (numeroRandom < 501 || numeroRandom >= 600) {
        numeroRandom = Math.random() * 1000;
    }
    return Math.round(numeroRandom)
}

console.log(random());


const nCapicua = (numero = 0) => {
    if (!numero) return console.error("No ingresaste un número");

    if (typeof numero !== "number") return console.error(`El valor de ${numero} no es un número`);

    numero = numero.toString();

    let capicua = numero.split("").reverse().join("");

    return (numero == capicua) ? console.info(`Es capicua, numero ingresado ${numero}, numero capicua ${capicua}`) : console.info("No es un número capicua")

}

nCapicua(121);

const factorial = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un número");

    if (typeof numero !== "number") return console.error(`El valor de ${numero} no es un número válido`)

    if (Math.sign(numero) === 0) return console.warn("El número no puede ser 0");

    if (numero === -1) return console.warn("El número no puede ser negativo");

    let factorial = 1;

    for (let i = numero; i > 1; i--) {
        factorial *= i;
    }

    return console.info(`El factorial de ${numero} es ${factorial}`)
}

factorial(5);*/


// 12) Programa una función que determine si un número es primo(aquel que solo es divisible por sí mismo y 1) o no, pe.miFuncion(7) devolverá true.
// 13) Programa una función que determine si un número es par o impar, pe.miFuncion(29) devolverá Impar.
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.miFuncion(0, "C") devolverá 32°F.

/*console.log("Ejercicios de lógica #4");

const numeroPrimo = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un número");

    if (typeof numero !== "number") return console.error(`El valor de ${numero} no es un número válido`)

    if (Math.sign(numero) === -1) return console.warn("El número no puede ser negativo");

    if (numero === 1) return console.warn("El número no puede ser 1");

    if (numero === 0) return console.warn("El número no puede ser 0");

    let divisible = false;

    for (let i = 2; i < numero; i++) {
        if ((numero % i) === 0) {
            divisible = true;
            break;
        }
    }

    return (divisible) ? console.log(`El número ${numero} no es primo`) : console.log(`El número ${numero} sí es primo`)
}

numeroPrimo(7);


const parImpar = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un número");

    if (typeof numero !== "number") return console.error(`El valor de ${numero} no es número válido`)

    return ((numero % 2) === 0) ? console.info("El número es par") : console.info("El número es impar")

}

parImpar(3);


const temperatura = (grados = undefined, tipo = "") => {

    if (grados === undefined) return console.log("No ingresaste número de grados a calcular");

    if (typeof grados !== "number") return console.error(`El valor de ${grados} no es número válido`);

    if (typeof tipo !== "string") return console.error(`El valor de ${tipo} no es una letra`);

    console.info("Ingresa la letra C para convertir de Celsius a Fahrenheit ó F para convertir de Fahrenheit a Celsius");

    tipo = tipo.toLocaleUpperCase();

    if (tipo === "C") {
        return console.info(`${grados}°C = ${Math.round(grados * 9 / 5) + 32}°F`);
    }
    else if (tipo === "F") {
        return console.info(`${grados}°F = ${Math.round(grados - 32) * 5 / 9}°C`);
    } else {
        console.warn("Solo puedes ingresar el valor de C (Celsius) ó F (Fahrenheit)");
    }

    return console.info("Síabueno");
}

temperatura(0, "f");*/

/* console.log("Ejercicios de lógica #4");

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe.miFuncion(100, 2) devolverá 4 base 10.
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe.miFuncion(1000, 20) devolverá 800.
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe.miFuncion(new Date(1984, 4, 23)) devolverá 35 años(en 2020).

const binario = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.info("No ingresaste un número");
    if (typeof numero !== "number") return console.error(`El valor de ${numero} no es un número válido`);
    if (base === undefined) return console.info("No ingresaste una base");
    if (typeof base !== "number") return console.error(`El valor de ${base} no es una base válida`);

    if (base === 2) {
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    }

}

binario(100, 2);



const descuento = (monto = undefined, descuento = undefined) => {
    if (monto === undefined) return console.log("No ingresaste un monto");
    if (descuento === undefined) return console.log("No ingresaste un descuento");

    if (typeof monto !== "number") return console.error(`El monto ${monto} no es válido`);
    if (typeof descuento !== "number") return console.error(`El descuento ${descuento} no es válido`);

    let aplicarDescuento = monto - (monto * descuento) / 100;

    return console.log(aplicarDescuento);
}

descuento(1000, 20)


const calcularYear = (fecha = undefined) => {
    if (fecha === undefined) return console.warn("No ingresaste la fecha");
    if (!(fecha instanceof Date)) return console.error(`El valor de ${fecha} no es una fecha válida`);

    let hoy = new Date().getTime() - fecha.getTime(),
        yearsInMS = 1000 * 60 * 60 * 24 * 365,
        yearHuman = Math.floor(hoy / yearsInMS);

    return (Math.sign(yearHuman) === -1)
        ? console.info(`Faltan ${Math.abs(yearHuman)} años para el ${fecha.getFullYear()}`)
        : (Math.sign(yearHuman) === 1)
            ? console.info(`Han pasado ${yearHuman} años, desde ${fecha.getFullYear()}`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)

}

calcularYear(new Date(2000, 11, 29)) */


console.log("Ejercicios de lógica #5");

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe.miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// 19) Programa una función que valide que un texto sea un nombre válido, pe.miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email válido, pe.miFuncion("jonmircha@gmail.com") devolverá verdadero.


const textoValido = (texto = "") => {
    if (texto === "") return console.warn("No ingresaste un texto");

    if (typeof texto !== "string") return console.error(`El valor de ${texto} no es un texto válido`)

    soloTxt = /^[A-Z]+$/i

    return console.log(soloTxt.test(texto));
}

textoValido("1234");