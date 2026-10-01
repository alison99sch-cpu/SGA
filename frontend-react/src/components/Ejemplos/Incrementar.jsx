import { useState } from "react"

export function Incrementar(){
    const [contador, setContador] = useState(0)
    const [mostrar, setMostrar] = useState(false)

   function decremento(){
    if(contador > 0){ //Para q no hallan valores negativos 
    setContador(contador - 1)
    }
   }

    function incremento(){
       setContador(contador + 1)
    }
    return(
        <>
        <h1>Contador: {contador}</h1>
        <div style={{display: "flex", justifyContent: "center", gap: "5px"}}>
        <button onClick={incremento} style={{widht: 50, height: 20, fontSize: 20}}>+</button> 
        <button onClick={decremento} style={{widht: 50, height: 20, fontSize: 20}}>-</button>
        </div>
        <br />
        <button onClick={() => setMostrar(!mostrar)}>Mostrar / Ocultar</button>
        (mostrar && <p>Info visible</p>)
        </>
    )
}