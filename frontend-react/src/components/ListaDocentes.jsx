import { useEffect, useState } from "react"
const API_DOCENTES = "http://localhost:3000/docentes"

export function ListaDocentes({ actualizar, onDocenteCreado,  onEditarDocente}) {
    const [docente, setDocentes] = useState([])
    const [cargando, setCargando] = useState("")
    const [error, setError] = useState("")

    async function eliminarDocente(dni) {
        const confirmar = window.confirm("¿Está seguro de que desea eliminar este docente?")
        if (!confirmar) {
            return
        } 
        try {
            const respuesta = await fetch(`${API_DOCENTES}/${dni}`,
                {
                    method: "DELETE"
                }
            )
            if (!respuesta.ok) {
                throw new Error(`No se pudo eliminar. Estado HTTP: ${respuesta.status}`)
            }
            onDocenteCreado()
        } catch (error) {
            console.error("Error al eliminar:", error)
            alert(error.message || "No se pudo eliminar el docente")
        }
    }
    useEffect(() => {
        async function cargarDocente() {
            setCargando(true)
            setError("")
            try {
                const respuesta = await fetch(API_DOCENTES)

                if (!respuesta.ok) {
                    throw new Error("No se pudo obtener la lista", respuesta.status)
                }
                const datos = await respuesta.json()
                setDocentes(datos)

            } catch (Err) {
                console.error("Error de conexión", Err)
                setError("No se pudo cargar la lista de docentes") 
            } finally {
                setCargando(false)
            }
        }

        cargarDocente()
    }, [actualizar]
    )

    if (cargando) {
        return <p className="sga-status">Cargando docentes...</p>
    }
    if (error) {
        return <p className="sga-status" role="alert">{error}
        </p>
    }
    return (
        <section className="sga-card sga-list">
            <h2>Docentes</h2>
            {docente.length === 0 ? (<p>No hay docentes registrados.</p>)
                : (
                    <ul className="sga-list__items">
                        {docente.map(docente => (
                            <li className="sga-list__item" key={docente.dni}>
                                <div className="sga-list__student">
                                    {docente.dni} - {docente.nombre} - {docente.especialidad}
                                </div>
                                <div className="sga-list__actions">
                                    <button type="button" onClick={() => onEditarDocente(docente)}>Editar</button>
                                    <button type="button" onClick={() => eliminarDocente(docente.dni)}>Eliminar</button>
                                </div>
                            </li>)
                        )}
                    </ul>
                )}


        </section>

    )


}