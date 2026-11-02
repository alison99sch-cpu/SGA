import { ListaMaterias } from "../components/ListaMaterias"
import { FormularioM } from "../components/FormularioM"
import { useState} from "react"

export default function Materias() {
    const [actualizar, setActualizar] = useState(0)
   

    const [materiaEditar, setMateriaEditar] = useState(null)
    function materiaCreada() {

        setActualizar(valor => valor + 1)
        setMateriaEditar(null)
        if (materiaEditar) {
        alert("Materia actualizada con éxito")
        }
    }


    function seleccionarMateria(materia) {
        setMateriaEditar(materia)
    }

    return (
        <main>
            <FormularioM key={materiaEditar?.codigo ?? "nuevo"}
                onMateriaCreada={materiaCreada}
                materiaEditar={materiaEditar}
                onCancelar={() => setMateriaEditar(null)} />

            <ListaMaterias actualizar={actualizar}
                onMateriaCreada={materiaCreada}
                onEditarMateria={seleccionarMateria} />
        </main>
    )
}