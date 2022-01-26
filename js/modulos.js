// ***************************************************************************************

// Módulo (import / export)
import Saludar, { saludar, PI, usuario } from "./constantes.js";
import { aritmetica as a } from "./aritmetica.js"

console.log("Archivo modulos.js");

console.log(PI, usuario);

console.log(a.sumar(3, 4));

console.log(a.restar(19, 19));

saludar();

let saludo = new Saludar();
saludo;