
module.exports = {
    saludo:function(req,res,next){
        console.log("El intermediario");
        req.saludo="Hola desde el middleware";
        next();//dirige ala funcion final
    }
}