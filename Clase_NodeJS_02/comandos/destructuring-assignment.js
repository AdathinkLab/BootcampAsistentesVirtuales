/*
 * Created on Fri Apr 24 2020
 *
 * Copyright (c) 2020 Adathink Lab
 */

let paises = ["Peru","Colombia","Alemania","Uruguay"];
let usuario = {"nombre":"Andy Javier","edad":21};
let colores= [{"nombre":"Verde"},{"nombre":"Rojo"},{"nombre":"Azul"}];


//Extraer datos 

//ARRAY 
//Antigua 
//Peru - Alemania
// let peru = paises[0], alemania = paises[2];
// console.log(peru,alemania)


let [peru , , alemania ] = paises ;
console.log(peru,alemania)


// Objetos extrae variables referenciales
let {nombre,edad} = usuario;
console.log(nombre,edad);


// nombre = "Andy Javier Reyes";
// console.log(usuario)

