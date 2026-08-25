function guardarDatos(clave, datos) {
    localStorage.setItem(clave, JSON.stringify(datos))
}

function obtDatos(clave) {
    const datos = localStorage.getItem(clave) //clave reemplaza a alumnos y docentes
    if (datos) {
        return JSON.parse(datos)
    }
    return [] //Evita que me devuelva null.
}