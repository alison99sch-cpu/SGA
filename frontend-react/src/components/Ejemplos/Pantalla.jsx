import { useEffect, useState } from "react"

export function Pantalla(){
    const [ancho, setAncho] = useState(window.innerWidth)
    useEffect(()=> {
        const actualizarAncho = () => {
            setAncho(window.innerWidth)
        }
        window.addEventListener("resize", actualizarAncho)

        return() => {
            window.removeEventListener("resize", actualizarAncho)
        }
    }, [])
    return (
        <h2>Ancho: {ancho}</h2>
    )
}