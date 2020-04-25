/*
 * Created on Fri Apr 24 2020
 *
 * Copyright (c) 2020 Adathink Lab
 */

const express = require("express");
const app = express();
const port = process.env.PORT || 3400;
const bodyParser = require("body-parser");
//Para que El servidor reciba request de  tipo JSON
app.use(bodyParser.json());



app.post("/webhook",function(req,res){
  let data= req.body;

   console.log("####################################")
   console.log(data);
//   console.log(`USERID : ${data.id} - Mensaje : ${data.mensaje}`)
  res.json({mensaje:"Mensaje Recibido !!"})
})

//iniciar Servidor
app.listen(port,()=>{
    console.log(`Servidor ejecutando en el puerto ${port}`)
})