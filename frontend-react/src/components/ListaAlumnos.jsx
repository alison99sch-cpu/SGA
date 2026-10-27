import { useEffect, useState } from "react"
const API_ALUMNOS = "http://localhost:3000/alumnos"

export function ListaAlumnos({ actualizar, onAlumnoCreado,  onEditarAlumno}) {
    const [alumnos, setAlumnos] = useState([])
    const [cargando, setCargando] = useState("")
    const [error, setError] = useState("")

    async function eliminarAlumno(legajo) {
        const confirmar = window.confirm("¿Está seguro de que desea eliminar este alumno?")
        if (!confirmar) {
            return
        } 
        try {
            const respuesta = await fetch(`${API_ALUMNOS}/${legajo}`,
                {
                    method: "DELETE"
                }
            )
            if (!respuesta.ok) {
                throw new Error(`No se pudo eliminar. Estado HTTP: ${respuesta.status}`)
            }
            onAlumnoCreado()
        } catch (error) {
            console.error("Error al eliminar:", error)
            alert(error.message || "No se pudo eliminar el alumno")
        }
    }
    useEffect(() => {
        async function cargarAlumno() {
            setCargando(true)
            setError("")
            try {
                const respuesta = await fetch(API_ALUMNOS)

                if (!respuesta.ok) {
                    throw new Error("No se pudo obtener la lista", respuesta.status)
                }
                const datos = await respuesta.json()
                setAlumnos(datos)

            } catch (Err) {
                console.error("Error de conexión", Err)
                setError("No se pudo cargar la lista de alumnos") 
            } finally {
                setCargando(false)
            }
        }

        cargarAlumno()
    }, [actualizar]
    )

    if (cargando) {
        return <p className="sga-status">Cargando alumnos...</p>
    }
    if (error) {
        return <p className="sga-status" role="alert">{error}
        </p>
    }
    return (
        <section className="sga-card sga-list">
            <h2>Alumnos</h2>
            {alumnos.length === 0 ? (<p>No hay alumnos registrados.</p>)
                : (
                    <ul className="sga-list__items">
                        {alumnos.map(alumno => (
                            <li className="sga-list__item" key={alumno.legajo}>
                                <div className="sga-list__student">
                                    {alumno.legajo} - {alumno.nombre} - {alumno.carrera}
                                </div>
                                <div className="sga-list__actions">
                                    <button type="button" onClick={() => onEditarAlumno(alumno)}>Editar</button>
                                    <button type="button" onClick={() => eliminarAlumno(alumno.legajo)}>Eliminar</button>
                                </div>
                            </li>)
                        )}
                    </ul>
                )}


        </section>

    )


}