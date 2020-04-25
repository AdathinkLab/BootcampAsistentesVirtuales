/*
 * Created on Fri Apr 24 2020
 *
 * Copyright (c) 2020 Adathink Lab
 */

 let paises = ["Peru","Colombia","Alemania","Uruguay"];
 let usuario = {"nombre":"Andy Javier","edad":21};
 let colores= [{"nombre":"Verde"},{"nombre":"Rojo"},{"nombre":"Azul"}];

 //Recorre indices en array y llave en los objetos
 for (let i in usuario){
   console.log(i);
 }
 console.log("###############################")
//Recorre valores en un array y no funciona en un objeto
 for (let i of paises){
    console.log(i);
  }