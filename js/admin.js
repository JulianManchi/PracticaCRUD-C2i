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

// Si hay algo en LocalStorage traer esos datos, si no hay nada en listaSeries tiene que ser un arreglo []
let listaSeries = JSON.parse(localStorage.getItem("listaSeriesKey")) || [];

// Traigo el boton para abrir un modal
let btnCrearSerie = document.getElementById('btnCrearSerie');

// Traigo la ventana Modal
const modalAdminSerie = new bootstrap.Modal(document.getElementById('modalSerie'));
console.log(modalAdminSerie);

// TAREA: Agregar validaciones a cada campo

formulario.addEventListener('submit',crearSerie)
btnCrearSerie.addEventListener('click', ()=>{
    limpiarFormulario();
    modalAdminSerie.show();
});

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

    // Guardar la lista de series en Local Storage
    guardarSeries();

    // Cerrar el Modal que administra series
    modalAdminSerie.hide();
}

function limpiarFormulario(){
    formulario.reset();
    // Si usamos las clases isinvalid o is-isinvalid de bootstrap hay que resetearlos
}

function guardarSeries(){
    localStorage.setItem('listaSeriesKey', JSON.stringify(listaSeries))
}