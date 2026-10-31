const { Materia } = require("../models/Materia")

async function obtenerMaterias(req,res) {
    const materias = await Materia.find()
    res.json(materias)
}

async function obtenerMateria(req, res)
{ const materia = await Materia.findOne({
    codigo: req.params.codigo})
    if(!materia){
        return res.status(404).json({mensaje: "Materia inexistente"})
    }
    res.json(materia)
}

async function crearMateria(req, res){
 const {codigo, nombre, cargaHoraria, estado} = req.body

  const tieneLetra = /[a-zA-Z]/.test(codigo);
  const tieneNumero = /[0-9]/.test(codigo);
  const letras = (codigo.match(/[a-zA-Z]/g) || []).length;
  const numeros = (codigo.match(/[0-9]/g) || []).length;
   
    if(!codigo || !nombre || !cargaHoraria || !estado){
        return res.status(400).json({mensaje:"Todos los campos son obligatorios!!"})
    }

    if(typeof nombre !== "string"){
        return res.status(400).json({mensaje:"El nombre no puede ser numerico"})
    }
    if(!tieneLetra || !tieneNumero){
        return res.status(400).json({mensaje:"El codigo debe contener  letras y numeros"})
    }
    if(letras !=2){
        return res.status(400).json({mensaje:"El codigo debe contener 2 letras y minimo 1 numero"})
    }

    if(cargaHoraria < 1 || cargaHoraria > 160){
        return res.status(400).json({mensaje:"La carga horaria debe ser mayor a 0 y menor o igual a 160"})
    }
    if(!Number.isInteger(cargaHoraria)){
        return res.status(400).json({mensaje:"La carga horaria debe ser un número entero"})
    }
    if(estado !== "ACTIVA" && estado !== "INACTIVA"){
        return res.status(400).json({mensaje:"El estado debe ser ACTIVA o INACTIVA"})
    }

    const existe = await Materia.findOne({
        codigo
    })

    if(existe){
        return res.status(400).json({mensaje:"La materia ya existe"})
    }

    const nuevaMateria = await Materia.create({
        codigo,
        nombre,
        cargaHoraria,
        estado
    })
    res.status(201).json(nuevaMateria)
}

async function actualizarMateria(req,res) {
    const {nombre, cargaHoraria, estado} = req.body
    
    if(!nombre || !cargaHoraria || !estado){
        return res.status(400).json({mensaje:"No puede haber campos vacíos"})
    }
    
    if(typeof nombre !== "string"){
        return res.status(400).json({mensaje:"El nombre no puede ser numerico"})
    }
     if(cargaHoraria < 1 || cargaHoraria > 160){
        return res.status(400).json({mensaje:"La carga horaria debe ser mayor a 0 y menor o igual a 160"})
    }
    if(!Number.isInteger(cargaHoraria)){
        return res.status(400).json({mensaje:"La carga horaria debe ser un número entero"})
    
    }
    if(estado !== "ACTIVA" && estado !== "INACTIVA"){
        return res.status(400).json({mensaje:"El estado debe ser ACTIVA o INACTIVA"})
    }

    const materia = await Materia.findOneAndUpdate(
        {codigo: req.params.codigo},
        {nombre, cargaHoraria, estado},
        {returnDocument:"after"}
    )

    if(!materia){
        return res.status(404).json({mensaje:"Materia inexistente"})
    }
    res.json(materia)
}

async function eliminarMateria(req, res){
    const materia = await Materia.findOneAndDelete({
        codigo: req.params.codigo
    })
    if(!materia){
        res.json({mensaje:"Materia inexistente"})
    }

    res.json({mensaje:"Materia eliminada correctamente"})
}

module.exports = {obtenerMaterias, obtenerMateria, crearMateria, actualizarMateria, eliminarMateria}