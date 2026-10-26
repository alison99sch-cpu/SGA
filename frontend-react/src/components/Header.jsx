import { Link } from "react-router-dom"
import { SelectorTema } from "../components/SelectorTema"

export default function Header() {
    return (
        <header>
            <h2>SGA</h2>
            <nav>
                <Link to="/">Inicio</Link> 
                {"|"}
                <Link to="/alumnos">Alumnos</Link>
                {"|"}
                <Link to="/ayuda" aria-label="Ayuda">⁉️</Link>
                {"|"}
                <SelectorTema />
            </nav>
        </header>
    )
}