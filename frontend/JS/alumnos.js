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
let alumnoEditandoLegajo = null;
let alumnoEditar = null; 
const btnCancelar = document.querySelector("#btnCancelar")
btnCancelar.style.display="none"
const btnGuardar = document.querySelector("#btnGuardar")
const API_ALUMNOS = "http://localhost:3000/alumnos";

formulario.addEventListener("submit", async function (event) {
    event.preventDefault();

    const legajo = document.querySelector("#legajo").value.trim()
    const nombre = document.querySelector("#nombre").value.trim()
    const carrera = document.querySelector("#carrera").value.trim()
    const correo = document.querySelector("#correo").value.trim()
    if (legajo== "" || nombre === "" || carrera === "" || correo === "") {
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

  

    //Post
    if (alumnoEditandoLegajo === null) {

        const alumno = {
            legajo: Number(legajo),
            nombre: nombre,
            carrera: carrera,
            correo: correo
        }

        const respuesta = await fetch(API_ALUMNOS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(alumno)
        })
        if(!respuesta.ok){
            mostrarMensaje("No se pudo guardar el alumno", "msj-error")
            return 
        }
 

        mostrarMensaje("Alumno guardado correctamente", "msj-exito");
        
    } else { //Put
        // const alumno = alumnos.find(alumno => alumno.id === alumnoEditandoId)
        // alumno.nombre = nombre
        // alumno.carrera = carrera
        // alumno.correo = correo

        const datosActuales = {
            nombre: nombre,
            carrera: carrera,
            correo: correo 
        }

        if(JSON.stringify(datosActuales) === JSON.stringify(alumnoEditar)){
        mostrarMensaje("No se han realizado cambos!!!", "msj-adv")
        return 
        }

        const respuesta = await fetch(`${API_ALUMNOS}/${alumnoEditandoLegajo}`, {
            method: "PUT",
            headers: {
                "Content-Type": "aplication/json"
            },
            body: JSON.stringify({
                    nombre: nombre,
                    carrera: carrera,
                    correo: correo
            })
        })
        if(!respuesta.ok){
            mostrarMensaje("No se pudo actualizar el alumno", "msj-error")
            return
        }

        alumnoEditandoLegajo = null;
        alumnoEditar = null;
        formulario.querySelector("button").textContent = "Guardar"
        document.querySelector("#legajo").disabled = false

        mostrarMensaje("Alumno actualizado correctamente", "msj-exito")
    }

    await actualizarListaAlumnos()
    formulario.reset();
});




async function obtAlumnos() {
   const respuesta = await fetch(API_ALUMNOS)
   const alumnos = (await respuesta).json()
   return alumnos
}

const listaAlumnos = document.querySelector("#listaAlumnos")


function mostrarAlumnos(alumnos) {
    listaAlumnos.innerHTML = ""
    for (const alumno of alumnos) {
        listaAlumnos.innerHTML += `
    <tr>
        <td>${alumno.legajo}</td>
        <td>${alumno.nombre}</td>
        <td>${alumno.carrera}</td>
        <td>${alumno.correo}</td>
        <td> 
        <button class="btn-editar" data-legajo="${alumno.legajo}" title="Editar alumno" ><i class="fa-solid fa-pen"></i></button> 
        <button class="btn-eliminar" data-legajo="${alumno.legajo}" title="Eliminar alumno" ><i class="fa-solid fa-trash"></i></button>
        </td>
    <tr>
    `;
    }
}



async function eliminarAlumno(legajo) {
   const respuesta = await fetch(`${API_ALUMNOS}/${legajo}`, {
    method: "DELETE"
   })
   if(!respuesta.ok){
    mostrarMensaje("Error", "msj-error")
    return
   }
   
   if(alumnoEditandoLegajo === legajo){
    formulario.reset()
    alumnoEditandoLegajo = null
    alumnoEditar = null
    btnGuardar.textContent = "Guardar"

    document.querySelector("#legajo").disabled = false
    btnCancelar.style.display = "none"
   }

   mostrarMensaje("Alumno eliminado correctamente", "msj-exito")
   await actualizarListaAlumnos()
}

async function actualizarListaAlumnos() {
    const alumnos = await obtAlumnos()
    mostrarAlumnos(alumnos)
    
}

listaAlumnos.addEventListener("click", (e) => {
    const boton_el = e.target.closest(".btn-eliminar")

    if (boton_el) {
        const legajo = Number(boton_el.dataset.legajo)
        const confirmar = confirm("¿Está seguro de que desea eliminar este alumno?")

        if (confirmar) { //Significa "Si confirmar es verdadero" no hace falta escribir  "confirmar == true".
            eliminarAlumno(legajo)
        }

    }


    const boton_ed = e.target.closest(".btn-editar")
    if (boton_ed) {
        const legajo = Number(boton_ed.dataset.legajo)
        editarAlumno(legajo)
    }
})

async function editarAlumno(legajo) {
    const alumnos = await obtAlumnos()
    const alumno = alumnos.find(alumno => alumno.legajo === legajo)
if(!alumno) {
    mostrarMensaje("Alumno no encontrado", "msj-error")
    return
}
    document.querySelector("#legajo").value = alumno.legajo;
    document.querySelector("#legajo").disabled = true;
    document.querySelector("#nombre").value = alumno.nombre;
    document.querySelector("#carrera").value = alumno.carrera;
    document.querySelector("#correo").value = alumno.correo;
    
    alumnoEditar = {
        nombre: alumno.nombre,
        carrera: alumno.carrera,
        correo: alumno.correo
    }

    alumnoEditandoLegajo = alumno.legajo;
    btnCancelar.style.display="inline-block"
    btnGuardar.textContent = "Actualizar alumno"
    document.querySelector("#nombre").focus()

}

function cancelarEdicion(){
    formulario.reset()
    alumnoEditandoLegajo = null
    alumnoEditar = null
    btnGuardar.textContent = "Guardar"
    btnCancelar.style.display="none"
    document.querySelector("#legajo").focus()
    document.querySelector("#legajo").disabled = false
}

btnCancelar.addEventListener("click", cancelarEdicion)
async function iniciar(){
await actualizarListaAlumnos()
}

iniciar()
