const mongoose = require("mongoose")

const docenteSchema = new mongoose.Schema({
dni: {
    type: Number,
    unique: true},
    nombre: String,
    especialidad: String,
    correo: String
},
{
    versionKey: false
})

const Docente = mongoose.model("Docente", docenteSchema)

module.exports ={ Docente }