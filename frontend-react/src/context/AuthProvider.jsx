import { useEffect, useState} from "react"
import {AuthContext} from "../context/AuthContext"

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem("token"))
    const [cargando, setCargando] = useState(true)

    const cerrarSesion = () => {
        localStorage.removeItem("token")
        setToken(null)
    }

    useEffect(() => {
        const verificarSesion = async () => {
            const tokenGuardado = localStorage.getItem("token")
            
            if (!tokenGuardado) {
                setToken(null)
                setCargando(false)
                return
            }
            try {
                const respuesta = await fetch("http://localhost:3000/alumnos", 
                    {headers: {Authorization: `Bearer ${tokenGuardado}`}}
                )
            if (!respuesta.ok) {
                throw new Error("Sesión inválida")
            }
            setToken(tokenGuardado)
            } catch (error){
                console.Error("Error al iniciar sesión", error)
                cerrarSesion()
            } finally {
                setCargando(false)
            }
        }
        verificarSesion()
    }, [])

    return (
        <AuthContext.Provider
        value={{token, setToken, cerrarSesion, cargando}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider