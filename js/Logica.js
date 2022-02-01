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


//console.log("Ejercicios de lógica #5");

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe.miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// 19) Programa una función que valide que un texto sea un nombre válido, pe.miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email válido, pe.miFuncion("jonmircha@gmail.com") devolverá verdadero.

const contarLetras = (cadena = "") => {
    if (cadena === "") return console.warn("No ingresaste un texto");

    if (typeof cadena !== "string") return console.error(`El valor de ${cadena} no es un texto válido`)

    let vocales = 0,
        consonantes = 0;

    cadena = cadena.toLocaleLowerCase();

    for (let letra of cadena) {
        if (/[aeiouáéíóúü]/.test(letra)) vocales++;
        if (/[bcdfghjklmnñpqrstvwxzy]/.test(letra)) consonantes++;

    }

    return console.info({
        cadena,
        vocales,
        consonantes
    })

}

//contarLetras("Hola Mundo");

const textoValido = (texto = "") => {
    if (texto === "") return console.warn("No ingresaste un texto");

    if (typeof texto !== "string") return console.error(`El valor de ${texto} no es un texto válido`)

    soloTxt = /^[A-Z]+$/i

    return console.log(soloTxt.test(texto));
}

//textoValido("1234");


const email = (email = "") => {
    if (email === "") return console.warn("No ingresaste un texto");

    if (typeof email !== "string") return console.error(`El valor de ${email} no es un texto válido`)

    correo = (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)

    return console.log(correo.test(email));
}

//email("johné@g.com");

//console.log("Ejercicios de lógica #6");

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe.mi_funcion([1, 4, 5]) devolverá[1, 16, 25].
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe.miFuncion([1, 4, 5, 99, -60]) devolverá[99, -60].
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe.miFuncion([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) devolverá { pares: [2, 4, 6, 8, 0], impares: [1, 3, 5, 7, 9] }.

const elevadoCuadrado = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo esta vácio");

    for (let numero of arr) {
        if (typeof numero !== "number") console.error(`El valor "${numero}" debe ser números`)
    }

    const newArr = arr.map(el => el * el);

    return console.info(`Arreglo original : ${arr},\nArreglo elevado al cuadrado: ${newArr}`)
}

//elevadoCuadrado([1, 2, 3, 5]);

const arrayMinMax = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo esta vácio");

    for (let numero of arr) {
        if (typeof numero !== "number") console.error(`El valor "${numero}" no es un número`)
    }

    return console.info(`Arreglo original: ${arr}\nValor mayor: ${Math.max(...arr)}\nValor menor: ${Math.min(...arr)}`)
}

// arrayMinMax([1, 2, 99, -60]);


const arrayParImpar = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo esta vácio");

    for (let numero of arr) {
        if (typeof numero !== "number") console.error(`El valor "${numero}" no es un número`)
    }

    return console.info({
        pares: arr.filter(num => num % 2 === 0),
        impar: arr.filter(num => num % 2 === 1)

    })
}

//arrayParImpar([1, 2, 3, 4, 5, 6])

//console.log("Ejercicios de lógica #7");

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe.miFuncion([7, 5, 7, 8, 6]) devolverá { asc: [5, 6, 7, 7, 8], desc: [8, 7, 7, 6, 5] }.
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe.miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá["x", 10, 2, "10", true].
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe.promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) devolverá 4.5.

const ascDes = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo esta vácio");

    for (let numero of arr) {
        if (typeof numero !== "number") console.error(`El valor "${numero}" no es un número`)
    }

    /*     const asc = arr.map(el, la => el - la);
        const desc = arr.map(el, la => la - el);
    
        return console.info({
            desc: arr.sort(),
            asc: arr.reverse()
        }) */

    return console.info({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).sort().reverse()

    })

}

//ascDes([1, 2, 3, 7, 9, 6]);

const duplicados = (arr = undefined) => {

    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo esta vácio");

    for (let numero of arr) {
        if (typeof numero !== "number") console.error(`El valor "${numero}" no es un número`)
    }

    const unique = new Set(arr);

    return console.info(...unique);
}

//duplicados([1, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5]);


const promedio = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo esta vácio");

    for (let numero of arr) {
        if (typeof numero !== "number") console.error(`El valor "${numero}" no es un número`)
    }

    let i = 0,
        suma = 0,
        len = arr.length;

    while (i < len) {
        suma = suma + arr[i++];
    }

    return console.info((suma / len));
}

//promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])

console.log("Ejercicios de lógica #8");

/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros
aceptados *.
  - Crea un método estático que devuelva los géneros aceptados *.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Film Noir, Game - Show, History, Horror, Musical, Music, Mystery, News, Reality - TV, Romance, Sci - Fi, Short, Sport, Talk - Show, Thriller, War, Western. */

class Pelicula {
    constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;
        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music",
            "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }

    static generosAceptados() {
        return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(",")}`);
    }

    validarCadena(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

        if (typeof valor !== "string") return console.error(`${propiedad} "${valor} ingresado, NO es una cadena de texto"`);

        return true;
    }

    validarLongitud(propiedad, valor, longitud) {
        if (valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitido (${longitud}.)`)

        return true;
    }

    validarNumero(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor} esta vacío"`);

        if (typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, NO es un número`);

        return true
    }

    validarArreglo(propiedad, valor) {
        if (!valor === undefined) return console.warn(`${propiedad} "${valor}" esta vacío`);

        if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo`);

        if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);

        for (let cadena of valor) {
            if (typeof cadena !== "string") console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
        }

        return true;
    }

    validarIMDB(id) {
        if (this.validarCadena("IMDB id", id))
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id)))
                return console.error(`IMDB id "${id}" no es válido, debe de tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números`)
    }

    validarTitulo(titulo) {
        if (this.validarCadena("Título", titulo))
            this.validarLongitud("Título", titulo, 100);
    }

    validarDirector(director) {
        if (this.validarCadena("Director", director))
            this.validarLongitud("Director", director, 50);
    }

    validarEstreno(estreno) {
        if (this.validarNumero("Año de Estreno", estreno))
            if (!(/^([0-9]){4}$/.test(estreno)))
                return console.error(`La fecha de estreno "${estreno}" no es válida, debe de tener 4 digitos`);
    }

    validarPais(pais) {
        this.validarArreglo("País", pais);
    }

    validarGeneros(generos) {
        if (this.validarArreglo("Géneros", generos)) {

            for (const genero of generos) {
                console.log(genero, Pelicula.listaGeneros.includes(genero));
                if (!Pelicula.listaGeneros.includes(genero)) {
                    console.error(`Género (s) incorrectos "${generos.join(",")}"`);
                    Pelicula.generosAceptados();
                }
            }

        }

    }

    validarCalificacion(calificacion) {
        if (this.validarNumero("Calificación", calificacion))
            return (calificacion < 0 || calificacion > 10)
                ? console.error(`La califiación tiene que estar en un rango de 0 y 10`) :
                this.calificacion = calificacion.toFixed(1);
    }

    fichaTecnica() {
        console.info(`Ficha Técnica:\nTítulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPaís: "${this.pais.join("-")}"\nGéneros: "${this.generos.join(",")}\nCalificación: "${this.calificacion}"\nIMDB Id: "${this.id}"`);
    }

}


/* const peli = new Pelicula({
    id: "jc1234567",
    titulo: "Los Avengers",
    director: "Gin",
    estreno: 2022,
    pais: ["Colombia"],
    generos: ["Action"],
    calificacion: 8.111
})

peli.fichaTecnica(); */

const misPelis = [
    {
        id: "jc1234567",
        titulo: "Los Avengers",
        director: "Gin",
        estreno: 2022,
        pais: ["Colombia"],
        generos: ["Action"],
        calificacion: 8.111
    },
    {
        id: "jc1234567",
        titulo: "Los Avengers",
        director: "Gin",
        estreno: 2022,
        pais: ["Colombia"],
        generos: ["Action"],
        calificacion: 8.111
    }
]

misPelis.forEach(el => new Pelicula(el).fichaTecnica());