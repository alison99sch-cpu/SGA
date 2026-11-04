const { Materia } = require("../models/Materia")

async function obtenerMaterias(req,res) {
    try{
    const materias = await Materia.find()
    res.json(materias)
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje:"Error al intentar obtener las materias"})
    }
}

async function obtenerMateria(req, res){
     try{
    const materia = await Materia.findOne({
    codigo: req.params.codigo})
    if(!materia){
        return res.status(404).json({mensaje: "Materia inexistente"})
    }
    res.json(materia)
}catch(error){
    console.error(error)
    res.status(500).json({mensaje:"Error al intentar obtener la materia"})
}
}

async function crearMateria(req, res){
    try{
 const {codigo, nombre, descripcion, cargaHoraria, estado} = req.body


  const letras = (codigo.match(/[a-zA-Z]/g) || []).length;
  const numeros = (codigo.match(/\d/g) || []).length;

    const existe = await Materia.findOne({
        codigo
    })

    if(existe){
        return res.status(400).json({mensaje:"La materia ya existe"})
    }
   
    if(!codigo || !nombre || !cargaHoraria || !estado){
        return res.status(400).json({mensaje:"Todos los campos son obligatorios!!"})
    }
    if(codigo.length > 4 || letras < 2 || numeros < 1 || letras + numeros !== codigo.length){
        return res.status(400).json({mensaje:"El codigo debe contener máximo 4 caracteres, mínimo 3. Por lo menos, 2 letras y 1 numero"})
    }

    if(typeof nombre !== "string"){
        return res.status(400).json({mensaje:"El nombre no puede ser numerico"})
    }
    
      if(!Number.isInteger(cargaHoraria)){
        return res.status(400).json({mensaje:"La carga horaria debe ser un número entero"})
    }
    if(cargaHoraria < 1 || cargaHoraria > 160){
        return res.status(400).json({mensaje:"La carga horaria debe ser mayor a 0 y menor o igual a 160"})
    }
  
    if(estado !== "ACTIVA" && estado !== "INACTIVA"){
        return res.status(400).json({mensaje:"El estado debe ser ACTIVA o INACTIVA"})
    }

    const nuevaMateria = await Materia.create({
        codigo,
        nombre,
        descripcion,
        cargaHoraria,
        estado
    })
    res.status(201).json(nuevaMateria)
}catch(error){
    console.error(error)
    res.status(500).json({mensaje:"Error al intentar crear la materia"})
}
}

async function actualizarMateria(req,res) {
    try{
    const {nombre, descripcion, cargaHoraria, estado} = req.body
    
    if(!nombre || !cargaHoraria || !estado){
        return res.status(400).json({mensaje:"No puede haber campos vacíos"})
    }  
    if(typeof nombre !== "string"){
        return res.status(400).json({mensaje:"El nombre no puede ser numerico"})
    }
     if(!Number.isInteger(cargaHoraria)){
        return res.status(400).json({mensaje:"La carga horaria debe ser un número entero"})
    
    }
     if(cargaHoraria < 1 || cargaHoraria > 160){
        return res.status(400).json({mensaje:"La carga horaria debe ser mayor a 0 y menor o igual a 160"})
    }
    if(estado !== "ACTIVA" && estado !== "INACTIVA"){
        return res.status(400).json({mensaje:"El estado debe ser ACTIVA o INACTIVA"})
    }

    const materia = await Materia.findOneAndUpdate(
        {codigo: req.params.codigo},
        {nombre, descripcion, cargaHoraria, estado},
        {returnDocument:"after"}
    )

    if(!materia){
        return res.status(404).json({mensaje:"Materia inexistente"})
    }
    res.json(materia)
}catch(error){
    console.error(error)
    res.status(500).json({mensaje:"Error al intentar actualizar la materia"})
}
}

async function eliminarMateria(req, res){
    try{
    const materia = await Materia.findOneAndDelete({
        codigo: req.params.codigo
    })
    if(!materia){
        return res.status(404).json({mensaje:"Materia inexistente"})
    }

    res.json({mensaje:"Materia eliminada correctamente"})
}catch(error){
    console.error(error)
    res.status(500).json({mensaje:"Error al intentar eliminar la materia"})
}
}

module.exports = {obtenerMaterias, obtenerMateria, crearMateria, actualizarMateria, eliminarMateria}