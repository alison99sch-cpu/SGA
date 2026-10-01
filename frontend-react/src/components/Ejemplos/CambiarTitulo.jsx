import { useState } from "react";

function CambiarTitulo() {
    const [titulo, setTitulo] = useState("Inicio")

    return (
        <>
        <h2>{titulo}</h2>
        <div style={{display: flex, justifyContent: "center", gap: 15}}>
            <button onClick={() => setTitulo("Alumnos")} style={{fontSize: 15, color: "pink", padding: 5}}>Alumnos</button>
            <button onClick={() => setTitulo("Docentes")} style={{fontSize: 15, color: "lightviolet", padding: 5}}>Docentes</button>
        </div>
        </>
    )
}

export default CambiarTitulo;