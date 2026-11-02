import { useEffect, useState } from "react"
const API_MATERIAS = "http://localhost:3000/materias"

export function ListaMaterias({ actualizar,  onMateriaCreada, onEditarMateria }) {
    const [materia, setMaterias] = useState([])
    const [cargando, setCargando] = useState("")
    const [error, setError] = useState("")

    async function eliminarMateria(codigo) {
        const confirmar = window.confirm("¿Está seguro de que desea eliminar esta materia?")
        if (!confirmar) {
            return
        } 
        try {
            const respuesta = await fetch(`${API_MATERIAS}/${codigo}`,
                {
                    method: "DELETE"
                }
            )
           
            if (!respuesta.ok) {
                throw new Error(`No se pudo eliminar. Estado HTTP: ${respuesta.status}`)
            }
            onMateriaCreada()
            alert("Materia eliminada con éxito!")
            
        } catch (error) {
            console.error("Error al eliminar:", error)
            alert(error.message || "No se pudo eliminar la materia")
        }
    }
    useEffect(() => {
        async function cargarMateria() {
            setCargando(true)
            setError("")
            try {
                const respuesta = await fetch(API_MATERIAS)

                if (!respuesta.ok) {
                    throw new Error("No se pudo obtener la lista", respuesta.status)
                }
                const datos = await respuesta.json()
                setMaterias(datos)

            } catch (Err) {
                console.error("Error de conexión", Err)
                setError("No se pudo cargar la lista de materias") 
            } finally {
                setCargando(false)
            }
        }

        cargarMateria()
    }, [actualizar]
    )

    if (cargando) {
        return <p className="sga-status">Cargando materias...</p>
    }
    if (error) {
        return <p className="sga-status" role="alert">{error}
        </p>
    }
    
    return (
        <section className="sga-card sga-list">
            <h2>Materias</h2>
            {materia.length === 0 ? (<p>No hay materias registradas.</p>)
                : (
                    <ul className="sga-list__items">
                        {materia.map(materia => (
                            <li className="sga-list__item" key={materia.codigo}>
                                <div className="sga-list__student">
                                    {materia.codigo} - {materia.nombre} - {materia.descripcion} - {materia.cargaHoraria} - {materia.estado}
                                </div>
                                <div className="sga-list__actions">
                                    <button type="button" onClick={() => onEditarMateria(materia)}>Editar</button>
                                    <button type="button" onClick={() => eliminarMateria(materia.codigo)}>Eliminar</button>
                                </div>
                            </li>)
                        )}
                    </ul>
                )}


        </section>

    )


}