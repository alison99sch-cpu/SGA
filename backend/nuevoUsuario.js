const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
require("dotenv").config()

const Usuario = require("./models/Usuario")

async function nuevoUsuario(){
    try{
    await mongoose.connect(process.env.MONGO_URI)
    const email = "usuario@sga.com"
    const password = "mini123!"

    const hash = await bcrypt.hash(password, 10)

    const usuario = new Usuario({
        nombre: "Usuario de consulta",
        email: email,
        password: hash,
        rol: "usuario"
    })
    await usuario.save()

    console.log("Usuario de consulta creado correctamente")
    console.log("Email:", email)
    }catch(error){
        console.error("Error al crear un usuario", error.message)
    }finally{
        await mongoose.disconnect()

    }
}

nuevoUsuario()