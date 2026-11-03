import { useState } from "react"
import { Alert, Box, Button, TextField, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"

export default function Login() {
    const theme = useTheme()
    const [usuario, setUsuario] = useState(null)

    const[error, setError]= useState("")
    const[cargando, setCargando] = useState(false)
    const[mensaje, setMensaje] = useState("")

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    
    async function login(e){
    e.preventDefault()
    setError("")
    setCargando(true)
    setMensaje("")
    setUsuario("")

    try{
        const respuesta = await fetch("http:localhost:300/auth/login",{
            method:"POST",
            header: {"Content-Type":"application/json"},
            body: JSON.stringify({email, password})
        }
        )
        const datos = await respuesta.json()
        if(!respuesta.ok){
            throw new Error(datos.mensaje || "No se pudo iniciar sesión")
        }
        setUsuario(datos.usuario)
        setMensaje(datos.mensaje)

        setEmail("")
        setPassword("")

    }catch(error){
        console.error("Error en login:", error)
        setError(error.message || "No se pudo conectar con el sevidor")
    }finally{
        setCargando(false)
    }

    }


}
