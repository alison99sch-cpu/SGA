import { useState } from "react";
const API_ALUMNOS = "http://localhost:3000/alumnos"

export function FormularioA({ onAlumnoCreado, alumnoEditar, onCancelar }) {
    const [formulario, setFormulario] = useState({
        legajo: String(alumnoEditar?.legajo ?? ""),
        nombre: alumnoEditar?.nombre ?? "",
        carrera: alumnoEditar?.carrera ?? "",
        correo: alumnoEditar?.correo ?? ""
    })

    const [error, setError] = useState("")
    const [guardando, setGuardando] = useState(false)
    const alumno = {
        ...formulario,
        legajo: Number(formulario.legajo)
    }

    const editando = Boolean(alumnoEditar)
    const url = editando ? `${API_ALUMNOS}/${alumnoEditar.legajo}`
    : API_ALUMNOS

    function manejarCambio(e) {
        const { name, value } = e.target

        setFormulario({
            ...formulario,
            [name]: value
        })
    }


    async function guardar(e) {
        e.preventDefault()
        setError("")
        setGuardando(true)

        try {
            const respuesta = await fetch(url, {
                method: editando ? "put" : "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(alumno)
            })
            if (!respuesta.ok) {
                throw new Error(`No se pudo guardar el alumno. Estado HTTP: ${respuesta.status}`)
            }
            setFormulario({
                legajo: "",
                nombre: "",
                carrera: "",
                correo: ""
            })
            onAlumnoCreado()
        } catch (error) {
            console.error("Error al gaurdar:", error)
            setError(error.message || "No se pudo conectar con el servidor")
        } finally {
            setGuardando(false)
        }
    }

    function cancelar(){
        onCancelar()
    }

    return (
        <>
        <h2>{alumnoEditar ? "Editar alumno" : "Nuevo alumno"}</h2>
            <form onSubmit={guardar}>
                <label htmlFor="legajo">Legajo</label>
                <input id="legajo" name="legajo" value={formulario.legajo} onChange={manejarCambio} required /> <br />

                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" value={formulario.nombre} onChange={manejarCambio} required /><br />

                <label htmlFor="correo">Correo</label>
                <input id="correo" name="correo" value={formulario.correo} onChange={manejarCambio} required /><br />

                <label htmlFor="carrera">Carrera</label>
                <input id="carrera" name="carrera" value={formulario.carrera} onChange={manejarCambio} required /> <br />

                <button type="submit" disabled={guardando}>{guardando ? "Guardando..."
                    : alumnoEditar ? "Guardar cambios" : "Guardar"}</button> <br />

                 {alumnoEditar && (<button type="button" onClick={cancelar}
                 disabled={guardando}>Cancelar</button>)}
                    <br />
                {error && <p role="alert">{error}</p>}
            </form>
        </>
    )
}