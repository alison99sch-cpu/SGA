const mongoose = require("mongoose")

const alumnoSchema = new mongoose.Schema({
    legajo: {
        type: Number,
        unique: true},
    nombre: String,
    carrera: String,
    correo: String
},
{ 
    versionKey: false
})

const docenteSchema = new mongoose.Schema({
legajo: {
    type: Number,
    unique: true},
    nombre: String,
    especialidad: String,
    correo: String
},
{
    versionKey: false
})

const Alumno = mongoose.model("Alumno", alumnoSchema)
const Docente = mongoose.model("Docente", docenteSchema)

module.exports = { Alumno, Docente }
