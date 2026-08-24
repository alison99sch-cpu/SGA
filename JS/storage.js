function guardarDatos(clave, datos) {
    localStorage.setItem(clave, JSON.stringify(datos))
}