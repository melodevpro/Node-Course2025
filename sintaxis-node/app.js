import uniq from 'lodash/uniq.js';
import { MiClase } from './MiClase.js';

const miClase = new MiClase();
miClase.mostrar();

// Datos simples
let misValores = ' Curso de node js';
misValores = 10;
misValores = true;
console.log(misValores);

// Datos compuestos
const lista = [1, 2, 3, 4, 5];
console.log(lista);

const listaDos = [1, 2, 3, 4, 5];
console.log(lista[0]);

let curso =  {
    tema: "Node",
    leccion: "datos compuestos",
    nivel: "basico",
}
console.log(curso);

//Importar paquetes externos usando el servicio en la nube de NPM
const numeros = [1, 5, 8, 10, 1, 5, 5, 5];
console.log ( uniq(numeros) );



