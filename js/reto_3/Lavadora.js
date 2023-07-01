"use strict";
class Lavadora extends Electrodomestico {
    constructor(newConsumo) {
        super(newConsumo);
        this.getPrecioBase = () => {
            return 200;
        };
        this.carga = 5;
    }
}
