
/**
 * 
 * @param {Integer} desde numero minimo de segundos a esperar 
 * @param {Integer} hasta numero maximo de seguntos a esperar
 * @returns {Promise} retorna una promesa
 */
function simularProcesoAleatorio(desde, hasta){
    /**
     * Creamos un objeto Promise y recibe siempre una función que tiene 2 parametros:
     * 
     */
    return new Promise(
        /**
         * 
         * @param {Function} resolve Funcion que se ejecuta cuando quieres devolver una respuesta (Normalmente esta funcion es igual al que se paso por el **then**)
         * @param {Function} reject Funcion que se ejecuta si quieres devolver un error(Normalmente esta funcion es igual al que se paso por el **catch**)
         */
        function(resolve, reject){

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
                resolve(resultado)

            }, numero_aleatorio * 1000)

        }
    )

}

/**
 * Ejecutamos la funcion (Porque retorna una promesa, podemos ejecucar sus metodos : then y catch)
 */
simularProcesoAleatorio(1, 10).then(
    /**
     * 
     * @param {String} resultado resultado que se optiene despues de ejecutar el proceso aleatorio. 
     */
    function (resultado){
        /**
         * Imprimir textos que nuestren el resultado
         */
        console.log("Para este momento ya se termino el proceso aleatorio.")
        console.log("El resultado fue " + resultado)
    }

).catch(
    function (){

    }
)


/**
 * Funcion para menejar el Async Await
 */
async function simularProcesosEnOrden(){
    var resultado = await simularProcesoAleatorio(1, 10).catch(function (){

    })
    /**
     * Imprimir textos que nuestren el resultado
     */
    console.log("Para este momento ya se termino el proceso aleatorio.")
    console.log("El resultado fue " + resultado)
}


/**
 * Ejecutar funcion
 */
simularProcesosEnOrden()