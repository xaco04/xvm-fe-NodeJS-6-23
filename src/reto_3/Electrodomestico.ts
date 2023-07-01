type tColor = 'blanco' | 'negro' | 'rojo' | 'azul' | 'gris';

const defColor: tColor = 'blanco';
const defConsumo = 'F';
const defPrecio = 100;
const defPeso = 5;

class Electrodomestico {
    protected preciobase: number;
    protected color: tColor;
    protected consumo: string;
    protected peso: number;

    constructor(newConsumo: string) {
        this.color = this.comprobarColor(defColor);
        this.consumo = this.comprobarConsumoEnergetico(newConsumo);
        this.preciobase = defPrecio;
        this.peso = defPeso;
    }

    getPrecioBase = (): number => {
        return this.preciobase;
    }

    getColor = (): tColor => {
        return this.color;
    }

    getCon = (): string => {
        return this.consumo;
    }

    getPeso = (): number => {
        return this.peso;
    }

    comprobarConsumoEnergetico = (letra: string): string => {
        switch (letra) {
            case 'A':
                return 'A';
            case 'B':
                return 'B';
            case 'C':
                return 'C';
            case 'D':
                return 'D';
            case 'E':
                return 'E';
            default:
                return defConsumo;
        }
    }

    private comprobarColor = (color: string): tColor => {
        const coloresDisponibles: tColor[] = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
        const colorLowerCase = color.toLowerCase();
        if (coloresDisponibles.indexOf(colorLowerCase as tColor) !== -1) {
            return colorLowerCase as tColor;
        } else {
            return defColor;
        }
    }

    precioFinal = (): number => {
        const preciosConsumo: { [key: string]: number } = {
            'A': 100,
            'B': 80,
            'C': 60,
            'D': 50,
            'E': 30,
            'F': 10
        };

        const preciosPeso: { [key: string]: number } = {
            '0-19': 10,
            '20-49': 50,
            '50-79': 80,
            '80+': 100
        };

        let precioFinal = this.preciobase;

        if (this.consumo in preciosConsumo) {
            precioFinal += preciosConsumo[this.consumo];
        }

        if (this.peso <= 19) {
            precioFinal += preciosPeso['0-19'];
        } else if (this.peso <= 49) {
            precioFinal += preciosPeso['20-49'];
        } else if (this.peso <= 79) {
            precioFinal += preciosPeso['50-79'];
        } else {
            precioFinal += preciosPeso['80+'];
        }

        return precioFinal;
    }
}
