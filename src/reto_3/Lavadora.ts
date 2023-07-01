class Lavadora extends Electrodomestico {
    protected carga: number;

    constructor(newConsumo: string) {
        super(newConsumo);
        this.carga = 5;
    }

    getPrecioBase = (): number => {
        return 200;
    }
}
