const mongoose = require('mongoose')

const materiaSchema = new mongoose.Schema(
    {
    codigo: {
        type: String,
        unique: true,
        trim: true, /*Para eliminar los espacios de los costados */
        match:/^\S+$/, /*Para eliminar los espacios de en medio */
        match: /^[A-Z]{2}\d+$/, /*cód: 2 letras y al menos 1 núm*/
        required: true,
        uppercase: true, /*Para que todo se pase a mayúsculas y no haya confusiones*/
    },
    nombre: {
        type: String,
        trim: true,
        required: true,
        minlength: 4,
        maxlength: 50
    },
    cargaHoraria: {
        type: Number,
        min:1, /*Acepta a partir del número 1 en adelante */
        max: 160,
        required: true /*Las materias son cuatrimestrales y ese es el máx de carga horaria que pueden tener */
    },
    estado: {
        type: String,
        trim: true,
        enum: ['ACTIVA', 'INACTIVA'],
        required: true
    }
},

    {
        versionKey: false
}
)

const Materia = mongoose.model('Materia', materiaSchema)

module.exports = { Materia }


