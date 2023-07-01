"use strict";
class MainApp {
    static run() {
        const electrodomesticos = new Array(10);
        electrodomesticos[0] = new Electrodomestico('A');
        electrodomesticos[1] = new Lavadora('B');
        electrodomesticos[2] = new Television('C');
        electrodomesticos[3] = new Electrodomestico('D');
        electrodomesticos[4] = new Lavadora('E');
        electrodomesticos[5] = new Television('F');
        electrodomesticos[6] = new Electrodomestico('A');
        electrodomesticos[7] = new Lavadora('B');
        electrodomesticos[8] = new Television('C');
        electrodomesticos[9] = new Electrodomestico('D');
        let precioTotalElectrodomesticos = 0;
        let precioTotalLavadoras = 0;
        let precioTotalTelevisiones = 0;
        for (const electrodomestico of electrodomesticos) {
            const precioFinal = electrodomestico.precioFinal();
            precioTotalElectrodomesticos += precioFinal;
            if (electrodomestico instanceof Lavadora) {
                precioTotalLavadoras += precioFinal;
            }
            else if (electrodomestico instanceof Television) {
                precioTotalTelevisiones += precioFinal;
            }
        }
        console.log('Precio de los electrodomésticos: $' + precioTotalElectrodomesticos);
        console.log('Precio de las lavadoras: $' + precioTotalLavadoras);
        console.log('Precio de las televisiones: $' + precioTotalTelevisiones);
    }
}
MainApp.run();
