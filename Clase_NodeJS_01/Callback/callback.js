
/**
 * 
 * @param {Integer} desde numero minimo de segundos a esperar 
 * @param {Integer} hasta numero maximo de seguntos a esperar 
 * @param {Function} callback funcion que se ejecutara cuando termine el "setTimeout"
 */
function simularProcesoAleatorio(desde, hasta, callback){
    /**
     * Generar un numero entero aleatorio
     */
    var numero_aleatorio = Math.floor(Math.random() * (hasta - desde + 1) + desde)
    
    /**
     * El setTimeout reciber un funcion  y un numero entero (milisegundos)
     * Tip: 1000 ms = 1 segundo.
     * La funcion se ejecutara cuando se termine de esperar los segundos indicados
     */
    setTimeout(function(){
        
        /**
         * Variable que simula la respuesta de una operación
         */
        var resultado = "Pikachu"

        /**
         * Ejecutamos la funcion callback(Pasada por parametro)
         */
        callback(resultado)

    }, numero_aleatorio * 1000)
}

/**
 * 
 * @param {String} resultado nombre del pokemon que se obbtiene despues de ejecutar un proceso
 */
function mostrarAlertaAlUsuario(resultado){
    /**
     * Imprimir textos que nuestren el resultado
     */
    console.log("Para este momento ya se termino el proceso aleatorio.")
    console.log("El resultado fue " + resultado)
}

/**
 * Ejecutamos la funcion junto con los parametros
 */
simularProcesoAleatorio(1, 10, mostrarAlertaAlUsuario)