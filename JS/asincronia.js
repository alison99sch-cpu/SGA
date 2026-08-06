/* Sincrono:
console.log("Inicio")
console.log("Buscando alumnos")
console.log("Fin")
*/

//asincrono (porque puede haber demora del servidor)
console.log("Inicio")
setTimeout(()=> {
console.log("Buscando alumnos")
}, 3000) //1000 equivale a 1 segundo

console.log("Fin")    

function saludar() {
    console.log("Hola")
}

function ejecutar(funcion) {
    funcion()
}

ejecutar(saludar); //call back

function despedirse() {
    console.log("Hasta luego")
}
setTimeout(despedirse, 3000)

setTimeout(() => {
    console.log("Buscando docentes...")
}, 2000)

setTimeout(() => {
    console.log("Buscando materias...")
}, 4000)

setTimeout(() => {
    console.log("Buscando cursos...")
}, 1000)

//actividad:

console.log("Solicitando lista de alumnos")

setTimeout(() => {
    console.log("Lista recibida")
}, 5000)

console.log("Mientras tanto el programa sigue ejecutandose")


//05/08/2026

function obtenerAlumnos() {
    return new Promise((resolve) => {
  setTimeout(() => {
    console.log("Ya tengo el arreglo")
   resolve(["Ana", "Luis", "Sandra"])
    }, 3000);
    })
}

obtenerAlumnos().then((alumnos) => { //utilizando "then" puedo ver qué tiene guardado la promesa. Resolve solito no muestra nada, solo guarda.
    console.log(alumnos)
}) 

async function iniciar() { //forma recomendable
    const alumnos = await obtenerAlumnos()
    console.log(alumnos)
}

iniciar()

function obtenerClima() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("22°C - soleado")
        })
    })
}

//con then:
obtenerClima().then((clima) => {
    console.log(clima)
})

//con async/await:
async function mostrarClima() {
    const clima = await obtenerClima()
    console.log(clima)
    }

    mostrarClima()



function consultarSaldo() {
    return new Promise((resolve) => 
        setTimeout(() => {
            resolve(145026)
        },3000)
    )
}

async function mostrarSalso() {
const saldo = await consultarSaldo()
console.log(`Su saldo es:` + saldo)    
}

function iniciarSesion() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Bienvenida; Alis")
        }, 2000)
    })
}

async function iniciar() {
    const inicio = await iniciarSesion()
    console.log(inicio)
}

iniciar()

function obtenerUsuario () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
             id: 1,
            nombre: "Maria",
            edad: 25
            })
           }, 3000)
    })
}

async function mostrarUsuario() {
    console.log("Consultando usuario...")
    const usuario = await obtenerUsuario()
    console.log(usuario)
}

mostrarUsuario()

// 06/08/2026

async function prueba() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
console.log(respuesta)
}

prueba()