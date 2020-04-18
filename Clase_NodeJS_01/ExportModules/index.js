/**
 * Importamos nuestro modulo creado
 */
var mi_modulo = require("./module")

/**
 * Declaramos una variable del tipo arreglo para almacenar
 * una lista de nombres
 */
var lista_personas = ["Kevin", "Javier", "Reyes"]

/**
 * Imprimimos para validar lo que contiene el modulo 
 */
console.log(mi_modulo)


/**
 * Imprimiremos todos los saludos
 */

 for(var i = 0; i < lista_personas.length; i++){
     var persona = lista_personas[i]
     mi_modulo.saludar_personas(persona)
 }