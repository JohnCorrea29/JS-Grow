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

console.log("Ejercicios lógica #3");