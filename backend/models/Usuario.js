const mongoose = require ("mongoose")

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    rol: {
        type: String,
        enum: ["admin", "usuario"],
        default: "usuario"
    },
    versionKey: false

})

const Usuario = mongoose.model("Usuario", usuarioSchema)
module.exports = Usuario