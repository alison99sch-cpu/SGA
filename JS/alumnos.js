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

async function iniciar() {
const datos = await obtenerAlumno()
console.table(datos)    
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

function mostrarDocentes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            
        })
    })
}