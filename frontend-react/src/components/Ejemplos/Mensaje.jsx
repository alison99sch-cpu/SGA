import { useState } from "react";

export function Mensaje(){
    const [mensaje, setMensaje] = useState("Hola, alumno")
    
    return(
        <>
        <h2>mensaje</h2>
    <button
    onClick={() => setMensaje("¡Bienvenidos a programación IV!")}>Cambiar mensaje</button>
    </>
    )
}