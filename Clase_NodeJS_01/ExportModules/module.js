'use strict'

/**
 * @method
 * @param {String} nombre nombre de la persona a saludar
 * @return {null} solamente ejecutara unas instrucciones
 */
function saludar(nombre){
    console.log("Hola " + nombre + ", te saludamos desde la terminal")
}

/**
 * Exportando nuestra funcion para poder reutilizarlo en 
 * cualquier momento.
 */
module.exports = {
    saludar_personas:saludar
}