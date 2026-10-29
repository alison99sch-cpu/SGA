const Usuario = require("../models/Usuario")
const bcrypt = require("bcrypt")

const login = async(req,res) => {
    try{
        const {emails, password} = req.body 

        if(!email || !password){
            return req.status(400).json({
                mensaje: "Se debe ingresar el email o la contraseña"
        })
        }
        const usuario = await Usuario.findOne({email: email.trim().tolowerCase()}).select("+password")

        if (!usuario) {
            return res.status(401).json({
                mensaje: "Email o contraseña incorrectos"
            })
        }
        const coincide = await bcrypt.compare(password, usuario.password)

        if (!coincide) { 
            return res.status(401).json({
                mensaje: "Email o contraseña incorrectos"

            })
        }

        return res.status(200).json({
            mensaje: "Login correcto",
            id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            rol: usuario.rol
        })
    }catch(error){
        console.error("Error en login: ", error)
        return res.status(500).json({
            mensaje: "Error interno del servidor"
        })
    }
    
}

module.exports = { login }