import { useState } from "react";

function TamanoTexto(){
    const [tamano, setTamano] = useState("20px")

    return(
        <>
        <p style={{fontSize: tamano}}>Texto de prueba</p>
        <div>
        <button onClick={()=> setTamano("10px")}>Tamaño pequeño</button><br />
        <button onClick={()=> setTamano("20px")}>Tamaño mediano</button><br />
        <button onClick={()=> setTamano("30x")}>Tamaño grande</button>
        </div>
        </>
    )
}

export default TamanoTexto