const mongoose = require('mongoose')

const materiaSchema = new mongoose.Schema(
    {
    codigo: {
        type: String,
        unique: true,
        trim: true, 
        maxlength: 4,
        minlength: 3,
        required: true,
        uppercase: true,
    },
    nombre: {
        type: String,
        trim: true,
        required: true,
        minlength: 4,
        maxlength: 50
    },
    descripcion: {
        type: String,
        trim: true,
        maxlength: 200
    },
    cargaHoraria: {
        type: Number,
        min:1, 
        max: 160,
        required: true 
    },
    estado: {
        type: String,
        trim: true,
        enum: ['ACTIVA', 'INACTIVA'],
        uppercase: true,
        required: true
    }
},

    {
        versionKey: false
}
)

const Materia = mongoose.model('Materia', materiaSchema)

module.exports = { Materia }


