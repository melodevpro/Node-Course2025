function imprimirHeroe({nombre, apellido, poder, edad = 0}) {
    nombre = 'Melo';
    console.log(nombre, apellido, poder, edad);
}

const heroes = ['Deadpool', 'Wolverine', 'Hulk', 'Thor'];
const [,,hulk] = heroes;
console.log(hulk);