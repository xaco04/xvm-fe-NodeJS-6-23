"use strict";
class Persona {
    constructor(newnombre, newedad, newDNI, newsexo = Persona.SEXO_HOMBRE, newpeso = 0, newaltura = 0) {
        this.nombre = newnombre;
        this.edad = newedad;
        this.DNI = newDNI;
        this.sexo = newsexo;
        this.peso = newpeso;
        this.altura = newaltura;
    }
}
Persona.SEXO_HOMBRE = 'H';
const persona1 = new Persona("xavi", 25, "12345678A");
console.log(persona1);
const persona2 = new Persona("jose", 30, "87654321B", 'M');
console.log(persona2);
const persona3 = new Persona("marco", 25, "98765432C", Persona.SEXO_HOMBRE, 70, 180);
console.log(persona3);
