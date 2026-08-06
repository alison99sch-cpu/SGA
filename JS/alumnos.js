const alumnos = [
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
    return new Promise ((resolve) => {
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
    return new Promise ((resolve) => {
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

function mostrarAlumnos(alumnos){
 console.table(alumnos)
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

async function obtenerPost(){
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await respuesta.json()
    return posts
}

function mostrarPost() {
    for (const post of posts){
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

async function obtenerComent(){
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/comments")
    const comentarios = await respuesta.json()
    return comentarios
}

function mostrarComent(){
    for (const comentario of comentarios){
        console.log(comentario.postId, comentario.name, comentario.email )
    }
}

function inic(){
    const comentarios = await obtenerComent()
    console.table(comentarios)
}

obtenerComent()
mostrarComent()
init()

