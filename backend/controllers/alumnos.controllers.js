const Alumno = require("../models/Alumno")

async function obtenerAlumnos(req,res) {
    const alumnos = await Alumno.find()
    res.json(alumnos)
}

async function obtenerAlumno(req, res) {
    
    const alumno = await Alumno.findOne({
    legajo: Number(req.params.id)})
    if(!alumno){
        return res.status(404).json({mensaje:"Alumno inexistente :("})
    }
    res.json(alumno)
}

async function crearAlumno(req, res){
    const {legajo, nombre, carrera, correo} = req.body
    if (!nombre || !legajo || !carrera || !correo){
        return res.status(400).json({
            mensaje:"Todos los campos son obligatorios!!"})
    }

    if(typeof nombre !== "string"){
        return res.status(400).json({
            mensaje:"El nombre no puede ser numerico"})
    }

    const nuevoAlumno = await Alumno.create({
        legajo,
        nombre,
        carrera,
        correo
    })
    res.status(201).json(nuevoAlumno)
    
}

async function actualizarAlumno(req,res) {
    const alumno = await Alumno.findOneAndUpdate(
        {legajo: Number(req.params.id)},
        req.body,
        {returnDocument:"after"}

    )
    if(!alumno){
        return res.status(404).json({
            mensaje:"Alumno inexistente :("})
    }
    
    
    res.json(alumno)
}


async function eliminarAlumno(req,res) {
    
    const alumno = await Alumno.findOneAndDelete
    {legajo: Number(req.params.id)}
    
    if(!alumnos){
         return res.status(404).json({
            mensaje:"Alumno inexistente :("})
    }
    
    res.json({mensaje: "Alumno eliminado correctamente"})
}

module.exports = {obtenerAlumnos, obtenerAlumno, crearAlumno, actualizarAlumno, eliminarAlumno}