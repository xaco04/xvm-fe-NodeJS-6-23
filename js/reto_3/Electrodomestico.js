"use strict";
const defColor = 'blanco';
const defConsumo = 'F';
const defPrecio = 100;
const defPeso = 5;
class Electrodomestico {
    constructor(newConsumo) {
        this.getPrecioBase = () => {
            return this.preciobase;
        };
        this.getColor = () => {
            return this.color;
        };
        this.getCon = () => {
            return this.consumo;
        };
        this.getPeso = () => {
            return this.peso;
        };
        this.comprobarConsumoEnergetico = (letra) => {
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
        };
        this.comprobarColor = (color) => {
            const coloresDisponibles = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
            const colorLowerCase = color.toLowerCase();
            if (coloresDisponibles.indexOf(colorLowerCase) !== -1) {
                return colorLowerCase;
            }
            else {
                return defColor;
            }
        };
        this.precioFinal = () => {
            const preciosConsumo = {
                'A': 100,
                'B': 80,
                'C': 60,
                'D': 50,
                'E': 30,
                'F': 10
            };
            const preciosPeso = {
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
            }
            else if (this.peso <= 49) {
                precioFinal += preciosPeso['20-49'];
            }
            else if (this.peso <= 79) {
                precioFinal += preciosPeso['50-79'];
            }
            else {
                precioFinal += preciosPeso['80+'];
            }
            return precioFinal;
        };
        this.color = this.comprobarColor(defColor);
        this.consumo = this.comprobarConsumoEnergetico(newConsumo);
        this.preciobase = defPrecio;
        this.peso = defPeso;
    }
}
