"use strict";
class Password {
    constructor(longitud = 8) {
        this.generarContraseña = () => {
            const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let contraseña = '';
            for (let i = 0; i < this.longitud; i++) {
                const randomIndex = Math.floor(Math.random() * caracteres.length);
                contraseña += caracteres.charAt(randomIndex);
            }
            return contraseña;
        };
        this.longitud = longitud;
        this.contraseña = this.generarContraseña();
    }
}
const password1 = new Password();
console.log(password1.contraseña);
const password2 = new Password(12);
console.log(password2.contraseña);
