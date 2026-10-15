import { useState } from "react";
const API_ALUMNOS = "http://localhost3000/alumnos"

export function FormularioA({onAlumnoCreado }){
 const [formulario, setFormulario] = useState({
    legajo: "",
    nombre: "",
    carrera: "",
    correo: ""
})

const [error, setError] = useState("")
const [guardando, setGuardando] = useState(false)

function manejarCambio(e) {
    const {name, value} = e.target

    setFormulario({
        ...formulario, 
        [name]: value
    })
}
    

    async function guardar(e){
        e.preventDefault()
       setError("")
       setGuardando(true)

       try {
        const alumno = {
            ...formulario,
            legajo: Number(formulario.legajo)
        }
        const respuesta = await fetch(API_ALUMNOS, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(alumno)
        })
        if(!respuesta.ok){
            throw new Error(`No se pudo guardar el alumno. Estado HTTP: ${respuesta.status}`)
        }
        setFormulario({
            legajo: "",
            nombre: "",
            carrera: "",
            correo: ""
        })
        onAlumnoCreado()
       }catch(error){
        console.error("Error al gaurdar:", error)
        setError(error.message || "No se pudo conectar con el servidor")
       }finally{
        setGuardando(false)
       }
    }

    return(
        <>
        <form onSubmit={guardar}>
            <label htmlFor="legajo">Legajo</label>
            <input id="legajo" name="legajo" value={formulario.legajo} onChange={manejarCambio} required/> <br />

            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" name="nombre" value={formulario.nombre} onChange={manejarCambio} required/><br />

            <label htmlFor="correo">Correo</label>
            <input id="correo" nombre="correo" value={formulario.correo} onChange={manejarCambio} required/><br />

            <label htmlFor="carrera">Carrera</label>
            <input id="carrera" nombre="carrera" value={formulario.carrera} onChange={manejarCambio} required/> <br />
            
            <button type="submit" disabled={guardando}>{guardando ? "Guardando..." 
            : "Guardar" }</button><br />
            {error && <p role="alert">{error}</p>}
        </form>
        </>
    )
}