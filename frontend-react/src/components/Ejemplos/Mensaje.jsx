import { useState } from "react";

export function Mensaje(){
    const [mensaje, setMensaje] = useState("Hola, alumno")
    
    return(
        
    <button
    onClick={() => setMensaje("¡Bienvenidos a programación IV!")}>Cambiar mensaje</button>
    )
}