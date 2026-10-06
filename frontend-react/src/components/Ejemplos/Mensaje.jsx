import { useState } from "react";


export function Mensaje(){
 const [mensaje, setMensaje] = useState("Hola, alumno")

function cambiarMsj(){
    setMensaje(mensaje === "Hola, alumno"
        ? "Bienvenido a programación IV"
        : "Hola, alumno"
    )
}

 return (
    <>
    <h2>({mensaje})</h2>
    <button onClick={cambiarMsj}>Cambiar mensaje</button>
    </>
 )
}