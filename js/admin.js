import {Serie} from "./serieClass.js";

// Traer los elementos del html necesarios

// Elementos del formulario
let codigo = document.getElementById('codigo');
let titulo = document.getElementById('titulo');
let descripcion = document.getElementById('descripcion');
let imagen = document.getElementById('imagen');
let genero = document.getElementById('genero');

// Formulario completo
let formulario = document.getElementById('formSerie');

let listaSeries = [];

// TAREA: Agregar validaciones a cada campo

formulario.addEventListener('submit',crearSerie)

function crearSerie(e){
    e.preventDefault();
    console.log('Desde la funcion crear serie');

    // Volver a validar todos los campos y si son correctos entoces creamos la nueva serie
    let nuevaSerie = new Serie(codigo.value, titulo.value, descripcion.value, imagen.value, genero.value);
    console.log(nuevaSerie);

    // agregamos la serie al final del arreglo
    listaSeries.push(nuevaSerie);
    console.log(listaSeries);

    // limpiar el formulario
    limpiarFormulario();
}

function limpiarFormulario(){
    formulario.reset();
}
