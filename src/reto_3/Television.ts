class Television extends Electrodomestico {
    private resolucion: number;
    private es4K: boolean;

    constructor(
        consumo: string,
        resolucion: number = 20,
        es4K: boolean = false
    ) {
        super(consumo);
        this.resolucion = resolucion;
        this.es4K = es4K;
    }

    getResolucion = (): number => {
        return this.resolucion;
    }

    getEs4K = (): boolean => {
        return this.es4K;
    }

    newprecioFinal = (): number => {
        let precioFinal = super.precioFinal();

        if (this.resolucion > 40) {
            precioFinal *= 1.3;
        }

        if (this.es4K) {
            precioFinal += 50;
        }

        return precioFinal;
    }
}

const tv1 = new Television('C');
console.log(tv1.getPrecioBase());
console.log(tv1.getResolucion());
console.log(tv1.getEs4K());
console.log(tv1.newprecioFinal());
