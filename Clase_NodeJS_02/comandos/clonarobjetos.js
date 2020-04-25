/*
 * Created on Fri Apr 24 2020
 *
 * Copyright (c) 2020 Adathink Lab
 */

 let usuario = {
    "nombre":"Anderson",
     "numero1":234,
     "numero2":245
 }
let nombre = "Andy";

 //Queremos copiar o clonar

//  let mi_nombre = nombre;
//  mi_nombre = mi_nombre + " -- ";
//  console.log(nombre)
//  console.log(mi_nombre)

/// Apliquemos eso en un objeto
// let mi_usuario = usuario;//referencia
// mi_usuario.numero1 = 9999;

// console.log(mi_usuario);
// console.log(usuario);


// OTRO EJEMPLO 
// let mi_usuario = usuario;

// sumar_5(usuario);
// console.log(mi_usuario);
// console.log(usuario);

// function sumar_5 (x){
//     x.numero1 = x.numero1 + 5;
//     x.numero2 = x.numero2 + 5;
// }

// //Otro Ejemplo !!
// let mi_nombre = usuario.nombre;
// // let mi_nombre = Object.values(usuario)[0];
// console.log(mi_nombre);
// mi_nombre = "Pepitos---";
// console.log(mi_nombre)
// console.log(usuario)


/// CLONANDO 

// let mi_usuario = {...usuario};
// let mi_usuario = Object.assign({},usuario);
// sumar_5(usuario);
// console.log(mi_usuario);
// console.log(usuario);

// function sumar_5 (x){
//     x.numero1 = x.numero1 + 5;
//     x.numero2 = x.numero2 + 5;
// }