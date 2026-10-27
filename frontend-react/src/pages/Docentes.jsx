import {ListaDocentes } from "../components/ListaDocentes"
import { FormularioD } from "../components/FormularioD"
import { useState } from "react"

export default function Docentes() {
    const [actualizar, setActualizar] = useState(0)

    const [docenteEditar, setDocenteEditar] = useState(null)
    function docenteCreado() {
        setActualizar(valor => valor + 1)
        setDocenteEditar(null)
    }

    function seleccionarDocente(docente) {
        setDocenteEditar(docente)
    }

    return (
        <main>
            <FormularioD key={docenteEditar?.dni ?? "nuevo"}
                onDocenteCreado={docenteCreado}
                docenteEditar={docenteEditar}
                onCancelar={() => setDocenteEditar(null)} />

            <ListaDocentes actualizar={actualizar}
                onAlumnoCreado={docenteCreado}
                onEditarAlumno={seleccionarDocente} />
        </main>
    )
}