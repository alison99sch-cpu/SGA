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