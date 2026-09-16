const Docente = require("../data/docentes")

async function obtenerDocentes(req,res) {
    const docentes = await Docente.find()
    res.json(docentes)
}

async function obtenerDocente(req, res)
{ const docente = await Docente.findOne({
    legajo: Number(req.params.id)})
    if(!docente){
        return res.status(404).json({mensaje: "Docente inexistente"})
    }
    res.json(docente)
}

async function crearDocente(req, res){
    const {legajo, nombre, especialidad, correo} = req.body
    if(!legajo || !nombre || !especialidad || !correo){
        return res.status(400).json({mensaje:"Todos los campos son obligatorios!!"})
    }

    if(typeof nombre !== "string"){
        return res.status(400).json({mensaje:"El nombre no puede ser numerico"})
    }

    if(typeof legajo != "number"){
        return res.status(400).json({mensaje:"El legajo debe ser si o si un número"})
    }

    const existe = await Docente.findOne({
        legajo
    })

    if(existe){
        return res.status(400).json({mensaje:"El legajo ya existe"})
    }

    const nuevoDocente = await Docente.create({
        legajo,
        nombre,
        especialidad,
        correo
    })
    res.status(201).json(nuevoDocente)
}

async function actualizarDocente(req,res) {
    const {nombre, especialidad, correo} = req.body
    const docente = await Docente.findOneAndUpdate(
        {legajo: Number(req.params.id)},
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
        legajo: Number(req.params.id)
    })
    if(!docente){
        res.json({mensaje:"Docente inexistente"})
    }

    res.json({mensaje:"Docente eliminado correctamente"})
}

module.exports = {obtenerDocentes, obtenerDocente, crearDocente, actualizarDocente, eliminarDocente}