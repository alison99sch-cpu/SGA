const { Docente } = require("../models/Docente")

async function obtenerDocentes(req,res) {
    const docentes = await Docente.find()
    res.json(docentes)
}

async function obtenerDocente(req, res)
{ const docente = await Docente.findOne({
    dni: Number(req.params.id)})
    if(!docente){
        return res.status(404).json({mensaje: "Docente inexistente"})
    }
    res.json(docente)
}

async function crearDocente(req, res){
    const {dni, nombre, especialidad, correo} = req.body
    if(!dni || !nombre || !especialidad || !correo){
        return res.status(400).json({mensaje:"Todos los campos son obligatorios!!"})
    }

    if(typeof nombre !== "string"){
        return res.status(400).json({mensaje:"El nombre no puede ser numerico"})
    }

    if(typeof dni != "number"){
        return res.status(400).json({mensaje:"El DNI debe ser si o si un número"})
    }

    const existe = await Docente.findOne({
        dni
    })

    if(existe){
        return res.status(400).json({mensaje:"El DNI ya existe"})
    }

    const nuevoDocente = await Docente.create({
        dni,
        nombre,
        especialidad,
        correo
    })
    res.status(201).json(nuevoDocente)
}

async function actualizarDocente(req,res) {
    const {nombre, especialidad, correo} = req.body
    const docente = await Docente.findOneAndUpdate(
        {dni: Number(req.params.id)},
        {nombre, especialidad, correo},
        {returnDocument:"after"}
    )
    if(!docente){
        return res.status(404).json({mensaje:"Docente inexistente"})
    }
    res.json(docente)
}

async function eliminarDocente(req, res){
    const docente = await Docente.findOneAndDelete({
        dni: Number(req.params.id)
    })
    if(!docente){
        res.json({mensaje:"Docente inexistente"})
    }

    res.json({mensaje:"Docente eliminado correctamente"})
}

module.exports = {obtenerDocentes, obtenerDocente, crearDocente, actualizarDocente, eliminarDocente}