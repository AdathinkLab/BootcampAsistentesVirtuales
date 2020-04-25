/*
 * Created on Fri Apr 24 2020
 *
 * Copyright (c) 2020 Adathink Lab
 */

const request = require("request");
console.log("Iniciando Mensajes Webhooks")
//simulacion Server Facebook

const url = "http://localhost:3400/webhook";

setInterval(function(){
    console.log("Lanzando Webhook !")
  let dato ={
      id: Math.round(Math.random()*10),
      mensaje:"Hola , este es un mensaje"
  }
  request({
      method:"POST",
      uri:url,
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(dato)

  },function(err,response,body){
      if(err){console.log("Ocurrio un error al enviar el mensaje webhook");return;}
     let mensaje =JSON.parse(body)
      console.log(mensaje);
  })

},5000
);