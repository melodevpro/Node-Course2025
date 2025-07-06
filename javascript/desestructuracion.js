function imprimirHeroe({nombre, apellido, poder, edad = 0}) {
    nombre = 'Melo';
    console.log(nombre, apellido, poder, edad);
}

const heroes = ['Deadpool', 'Wolverine', 'Hulk', 'Thor'];
const [,,hulk] = heroes;
console.log(hulk);

const Deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }
}
function imprimirHeroe(heroe) {

    const { nombre, apellido, poder, edad = 0 } = heroe;
    console.log(nombre, apellido, poder, edad);
}

imprimirHeroe( Deadpool );

