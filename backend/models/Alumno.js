const mongoose = require("mongoose")

const alumnoSchema = new mongoose.Schema({
    legajo: Number,
    nombre: String,
    carrera: String,
    correo: String
},
{ 
    versionKey: false
})

const Alumno = mongoose.model("Alumno", alumnoSchema)

module.exports = Alumno

