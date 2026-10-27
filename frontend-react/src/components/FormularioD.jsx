import { useState } from "react";
const API_DOCENTES = "http://localhost:3000/docentes"

export function FormularioD({ onDocenteCreado, docenteEditar, onCancelar }) {
    const [formulario, setFormulario] = useState({
        dni: String(docenteEditar?.dni ?? ""),
        nombre: docenteEditar?.nombre ?? "",
        especialidad: docenteEditar?.especialidad ?? "",
        correo: docenteEditar?.correo ?? ""
    })

    const [error, setError] = useState("")
    const [guardando, setGuardando] = useState(false)
    const docente = {
        ...formulario,
        dni: Number(formulario.dni)
    }

    const editando = Boolean(docenteEditar)
    const url = editando ? `${API_DOCENTES}/${docenteEditar.dni}`
    : API_DOCENTES

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
                body: JSON.stringify(docente)
            })
            if (!respuesta.ok) {
                throw new Error(`No se pudo guardar el docente. Estado HTTP: ${respuesta.status}`)
            }
            setFormulario({
                dni: "",
                nombre: "",
                especialidad: "",
                correo: ""
            })
            onDocenteCreado()
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
        <section className="sga-card sga-form">
            <h2>{docenteEditar ? "Editar docente" : "Nuevo docente"}</h2>
            <form onSubmit={guardar}>
                <label htmlFor="dni">DNI</label>
                <input id="dni" name="dni" value={formulario.dni} onChange={manejarCambio} required />

                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" value={formulario.nombre} onChange={manejarCambio} required />

                <label htmlFor="correo">Correo</label>
                <input id="correo" name="correo" value={formulario.correo} onChange={manejarCambio} required />

                <label htmlFor="especialidad">Especialidad</label>
                <input id="especialidad" name="especialidad" value={formulario.especialidad} onChange={manejarCambio} required />

                <div className="sga-form__actions">
                    <button type="submit" disabled={guardando}>{guardando ? "Guardando..."
                        : docenteEditar ? "Guardar cambios" : "Guardar"}</button>

                    {docenteEditar && (<button type="button" onClick={cancelar}
                        disabled={guardando}>Cancelar</button>)}
                </div>
                {error && <p className="sga-form__error" role="alert">{error}</p>}
            </form>
        </section>
    )
}