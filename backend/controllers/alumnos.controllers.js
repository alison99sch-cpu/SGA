const alumnos = require("../data/alumnos")

function obtenerAlumnos(req,res) {
    res.json(alumnos)
}

function obtenerAlumno(req, res) {
    const id = Number(req.params.id)
    const alumno = alumnos.find(a => a.id ===id)
    if(!alumno){
        return res.status(404).json({mensaje:"Alumno inexistente :("})
    }
    res.json(alumno)
}

function crearAlumno(req, res){
    const nuevoAlumno = req.body
    const {id, nombre, carrera} = req.body
    if (!nombre || !id || !carrera){
        return res.status(400).json({
            mensaje:"Todos los campos son obligatorios!!"})
    }

    if(typeof nombre !== "string"){
        return res.status(400).json({
            mensaje:"El nombre no puede ser numerico"})
    }
    alumnos.push(nuevoAlumno)
    res.status(201).json({mensaje:"Alumno registrado correctamente"})
    
}

function actualizarAlumno(req,res) {
    const id = Number(req.params.id)
    const alumno = alumnos.find(alumno => alumno.id === id)
    if(!alumno){
        return res.status(404).json({
            mensaje:"Alumno inexistente :("})
    }
    
    alumno.id = req.body.id
    alumno.nombre = req.body.nombre
    alumno.carrera = req.body.carrera
    res.json({mensaje: "Alumno actualizado correctamente"})
}


function eliminarAlumno(req,res) {
    const id = Number(req.params.id)
    const alumno = alumnos.find(a => a.id === id)
    if(!alumnos){
         return res.status(404).json({
            mensaje:"Alumno inexistente :("})
    }
    const alumnosActualizados = alumnos.filter(alumno => alumno.id !== id)
    alumnos.length = 0
    alumnos.push(...alumnosActualizados)
    res.json({mensaje: "Alumno eliminado correctamente"})
}

module.exports = {obtenerAlumnos, obtenerAlumno, crearAlumno, actualizarAlumno, eliminarAlumno}