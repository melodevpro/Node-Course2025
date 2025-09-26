class Calcular {
    constructor(){
        this.factor = 2;
    }
    multiplicar = (valor) => {
        return valor * this.factor;
    }
    dividir = (valor) => {
        return valor / this.factor;
    }
    mostrar (valor) {
        console.log(valor);
    }
}


const init = () => {
    const calc = new Calcular();
    calc.mostrar(calc.multiplicar(100));
}
init();