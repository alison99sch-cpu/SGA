import { ListaAlumnos } from "../components/ListaAlumnos"
import { FormularioA } from "../components/FormularioA"
import { useState } from "react"

export default function Alumnos() {
    const [actualizar, setActualizar] = useState(0)

    const [alumnoEditar, setAlumnoEditar] = useState(null)
    function alumnoCreado() {
        setActualizar(valor => valor + 1)
        setAlumnoEditar(null)
    }

    function seleccionarAlumno(alumno) {
        setAlumnoEditar(alumno)
    }

    return (
        <main>
            <FormularioA key={alumnoEditar?.legajo ?? "nuevo"}
                onAlumnoCreado={alumnoCreado}
                alumnoEditar={alumnoEditar}
                onCancelar={() => setAlumnoEditar(null)} />

            <ListaAlumnos actualizar={actualizar}
                onAlumnoCreado={alumnoCreado}
                onEditarAlumno={seleccionarAlumno} />
        </main>
    )
}