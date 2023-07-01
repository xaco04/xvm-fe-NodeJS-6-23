"use strict";
class Television extends Electrodomestico {
    constructor(consumo, resolucion = 20, es4K = false) {
        super(consumo);
        this.getResolucion = () => {
            return this.resolucion;
        };
        this.getEs4K = () => {
            return this.es4K;
        };
        this.newprecioFinal = () => {
            let precioFinal = super.precioFinal();
            if (this.resolucion > 40) {
                precioFinal *= 1.3;
            }
            if (this.es4K) {
                precioFinal += 50;
            }
            return precioFinal;
        };
        this.resolucion = resolucion;
        this.es4K = es4K;
    }
}
const tv1 = new Television('C');
console.log(tv1.getPrecioBase());
console.log(tv1.getResolucion());
console.log(tv1.getEs4K());
console.log(tv1.newprecioFinal());
