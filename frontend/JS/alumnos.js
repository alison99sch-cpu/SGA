/*const alumnos = [
    {
        id: 1,
        nombre: "Luz",

    },
    {
        id: 2,
        nombre: "Luis"
    },
    {
        id: 3,
        nombre: "Rocio"
    }
];

function obtenerAlumno() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(alumnos)
        }, 2000)
    })
}



iniciar()

//crear obtenerMaterias()
const materias = [
    {
        id: 1,
        materia: "Ingles",

    },
    {
        id: 2,
        materia: "Lengua"
    },
    {
        id: 3,
        nombre: "Historia"
    }
];


function obtenerMaterias() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(materias)
        }, 2000)
    })
}

async function mostrarMaterias() {
    const materia = await obtenerMaterias()
    console.table(materia)
}


//crear obtenerDocentes()
const docentes = [
    {
        id: 1,
        nombre: "Rosa",
        materia: "Ingles",

    },
    {
        id: 2,
        nombre: "Juan",
        materia: "Lengua"
    },
    {
        id: 3,
        nombre: "Mia",
        nombre: "Historia"
    }
];

function obtenerDocentes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(docentes)
        }, 2000)
    })
}

async function mostrarDocentes() {
    const docente = await obtenerDocentes()
    console.table(docente)
}

async function obtAlumnos() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
    const alumnos = await respuesta.json()
    return alumnos

}

function mostrarAlumnos(alumnos) {
    console.table(alumnos)

    console.log(typeof alumnos)
    localStorage.setItem("alumnos", JSON.stringify(alumnos))
    const datos = localStorage.getItem("alumnos") //Convertir de object a string

    const alumnosRecup = JSON.parse(datos) //Convertir de string a object
    console.log(typeof alumnosRecup)
    console.table(alumnosRecup)


    console.log()
    console.log(alumnos[0])//Opción 1: muestra de a un elemento

    for (const alumno of alumnos)//Opción 2: muestra todos los elementos (Suele ser la más recomendada)
    {
        console.log(alumno.id, alumno.name, alumno.email)
    }
}

async function iniciar() {
    const alumnos = await obtAlumno()
    console.table(alumnos)
}

obtAlumnos()
mostrarAlumnos()
iniciar()

// /post
// /comments
// id, título, usuario

async function obtenerPost() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await respuesta.json()
    return posts
}

function mostrarPost() {
    for (const post of posts) {
        console.log(post.id, post.title, post.userId)
    }
}

async function init() {
    const posts = await obtenerPost()
    console.table(posts)

}

obtenerPost()
mostrarPost()
init()

async function obtenerComent() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/comments")
    const comentarios = await respuesta.json()
    return comentarios
}

function mostrarComent() {
    for (const comentario of comentarios) {
        console.log(comentario.postId, comentario.name, comentario.email)
    }
}

function inic() {
    const comentarios = await obtenerComent()
    console.table(comentarios)
}

obtenerComent()
mostrarComent()
init()
*/

// 11/08/2026 proyecto proyecto
const formulario = document.querySelector("#formulario")
const mensaje = document.querySelector("#mensaje")
//const listaAlumnos = document.querySelector("#listaAlumnos")
let alumnoEditandoId = null;
let alumnoEditar = null; 
const btnCancelar = document.querySelector("#btnCancelar")
btnCancelar.style.display="none"
const btnGuardar = document.querySelector("#btnGuardar")




formulario.addEventListener("submit", function (event) {
    event.preventDefault();


    const nombre = document.querySelector("#nombre").value.trim()
    const carrera = document.querySelector("#carrera").value.trim()
    const correo = document.querySelector("#correo").value.trim()
    if (nombre === "" || carrera === "" || correo === "") {
        mostrarMensaje("Todos los campos son obligatorios!!!", "msj-error")
        return //Vuelve al inicio para poder comenzar otra vez a llenar los campos 
    }
    if (!correo.includes("@")) {
        mostrarMensaje("Ingrese un correo valido!!!", "msj-error")
        return
    }

    if (nombre.legth < 3) {
        mostrarMensaje("El nombre debe tener al menos 3 caracteres!!!", "msj-error")
        return
    }

    const alumnos = obtAlumnos()


    if (alumnoEditandoId === null) {

        const alumno = {
            id: Date.now(),//Para generar un número unico internamente.
            nombre: nombre,
            carrera: carrera,
            correo: correo
        }

        alumnos.push(alumno)
        mostrarMensaje("Alumno guardado correctamente", "msj-exito");
        
    } else {
        const alumno = alumnos.find(alumno => alumno.id === alumnoEditandoId)
        alumno.nombre = nombre
        alumno.carrera = carrera
        alumno.correo = correo

        const datosActuales = {
            nombre: nombre,
            carrera: carrera,
            correo: correo 
        }

        // if(datosActuales.nombre === alumnoEditar.nombre && datosActuales.carrera === alumnoEditar.carrera && datosActuales.correo === alumnoEditar.correo ){
        // mostrarMensaje("No se han realizado cambos!!!", "msj-error")
        // return 
        // } <= Es lo memi que abajo:
        if(JSON.stringify(datosActuales) === JSON.stringify(alumnoEditar)){
        mostrarMensaje("No se han realizado cambos!!!", "msj-adv")
        return 
        }

        alumnoEditandoId = null;
        alumnoEditar = null;
        formulario.querySelector("button").textContent = "Guardar"

        mostrarMensaje("Alumno actualizado correctamente", "msj-exito")
    }

    // localStorage.setItem("alumnos", JSON.stringify(alumnos))
    guardarDatos("alumnos", alumnos)

    mostrarAlumnos(alumnos);

    formulario.reset();
});




function obtAlumnos() {
    return obtDatos("alumnos")
}

const listaAlumnos = document.querySelector("#listaAlumnos")


function mostrarAlumnos(alumnos) {
    listaAlumnos.innerHTML = ""
    for (const alumno of alumnos) {
        listaAlumnos.innerHTML += `
    <tr>
        <td>${alumno.id}</td>
        <td>${alumno.nombre}</td>
        <td>${alumno.carrera}</td>
        <td>${alumno.correo}</td>
        <td> 
        <button class="btn-editar" data-id="${alumno.id}" title="Editar alumno" ><i class="fa-solid fa-pen"></i></button> 
        <button class="btn-eliminar" data-id="${alumno.id}" title="Eliminar alumno" ><i class="fa-solid fa-trash"></i></button>
        </td>
    <tr>
    `;
    }
}



function eliminarAlumno(id) {
    const alumnos = obtAlumnos
    const alumnosActualizados = alumnos.filter(
        alumno => alumno.id !== id
    );

    localStorage.setItem("alumnos", JSON.stringify(alumnosActualizados))

    mostrarAlumnos(alumnosActualizados)
    if (alumnoEditandoId == id) {
        formulario.reset()
        alumnoEditandoId = null
        btnGuardar.textContent = "Guardar"
    }

    mostrarMensaje("Alumno eliminado correctamente", "msj-exito")
}


listaAlumnos.addEventListener("click", (e) => {
    const boton_el = e.target.closest(".btn-eliminar")

    if (boton_el) {
        const id = Number(boton_el.dataset.id)
        const confirmar = confirm("¿Está seguro de que desea eliminar este alumno?")

        if (confirmar) { //Significa "Si confirmar es verdadero" no hace falta escribir  "confirmar == true".
            eliminarAlumno(id)
        }

    }


    const boton_ed = e.target.closest(".btn-editar")
    if (boton_ed) {
        const id = Number(boton_ed.dataset.id)
        editarAlumno(id)
    }
})

function editarAlumno(id) {
    const alumnos = obtAlumnos
    const alumno = alumnos.find(alumno => alumno.id === id)
    Document.querySelector("#nombre").value = alumno.nombre;
    Document.querySelector("#carrera").value = alumno.carrera;
    Document.querySelector("#correo").value = alumno.correo;
    
    alumnoEditar = {
        nombre: alumno.nombre,
        carrera: alumno.carrera,
        correo: alumno.correo
    }

    alumnoEditandoId = id;
    btnCancelar.style.display="inline-block"
    btnGuardar.textContent = "Actualizar alumno"
    document.querySelector("#nombre").focus()

}

function cancelarEdicion(){
    formulario.reset()
    alumnoEditandoId = null
    alumnoEditar = null
    btnGuardar.textContent = "Guardar"
    btnCancelar.style.display="none"
    document.querySelector("#nombre").focus()
}

btnCancelar.addEventListener("click", cancelarEdicion)

const alumnos = obtAlumnos() //Esto y la línea de abajo tienen la función de mostrar la tabla ni bien se ingresa
mostrarAlumnos(alumnos)