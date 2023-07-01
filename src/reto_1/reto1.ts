class Persona {
    static SEXO_HOMBRE: string = 'H';

    nombre: string;
    edad: number;
    DNI: string;
    sexo: string;
    peso: number;
    altura: number;

    constructor(newnombre: string, newedad: number, newDNI: string, newsexo: string = Persona.SEXO_HOMBRE, newpeso: number = 0, newaltura: number = 0) {
        this.nombre = newnombre;
        this.edad = newedad;
        this.DNI = newDNI;
        this.sexo = newsexo;
        this.peso = newpeso;
        this.altura = newaltura;
    }
}

const persona1 = new Persona("xavi", 25, "12345678A");
console.log(persona1)
const persona2 = new Persona("jose", 30, "87654321B", 'M');
console.log(persona2)
const persona3 = new Persona("marco", 25, "98765432C", Persona.SEXO_HOMBRE, 70, 180);
console.log(persona3)

