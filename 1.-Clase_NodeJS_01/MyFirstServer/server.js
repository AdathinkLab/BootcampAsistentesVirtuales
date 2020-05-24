/**
 * Importar modulo instalado
 */
var express = require("express")

/**
 * Obtener el objeto app para crear rutas
 */
var app = express()

/**
 * Crear ruta en la base
 */
var path = "/"

/**
 * @method
 * @param {Object} req Objeto con informacion y funciones de la solicitud 
 * @param {Object} res Objeto con informacion y funciones para reponder
 */
function manejarSolicitud(req, res){
    res.send("Saludo desde mi primer servidor")
}

app.get(path, manejarSolicitud)

/**
 * Ejecutar servidor
 */
var PORT = 3000

function imprimirConfirmacion(){
    console.log("Servidor corriendo en el puerto " + PORT)
}

app.listen(PORT, imprimirConfirmacion)