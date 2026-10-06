import { useState } from "react";

export function FormularioA(){
    const [legajo, setLegajo] = useState("")
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [carrera, setCarrera] = useState("")
    

    function guardar(e){
        e.preventDefault()
        console.log(nombre)
        console.log(correo)
        console.log(legajo)
        console.log(carrera)
    }

    return(
        <>
        <form onSubmit={guardar}>
            <input value={legajo} onChange={(e) => setLegajo(e.target.value)}/> <br />
            <input value={nombre} onChange={(e) => setNombre(e.target.value)}/><br />
             <input value={correo} onChange={(e) => setCorreo(e.target.value)}/><br />
             <input value={carrera} onChange={(e) => setCarrera(e.target.value)}/> <br />
            <button type="submit">Guardar</button><br />
            <h2>Legajo: {legajo}</h2>
            <h2>Nombre: {nombre}</h2>
            <h2>Correo: {correo}</h2>
            <h2>Carrera: {carrera}</h2>
            

        </form>
        </>
    )
}