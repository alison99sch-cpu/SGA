import "../index.css"
import { Link } from "react-router-dom"
import { SelectorTema } from "../components/SelectorTema"

export default function Header() {
    return (
        <header className="sga-header">
            <Link className="sga-brand" to="/" aria-label="SGA - Inicio">
                <svg className="sga-brand__mark" viewBox="0 0 48 48" role="img" aria-label="Emblema académico SGA">
                    <rect width="48" height="48" rx="15" />
                    <path d="M12 20.5 24 14l12 6.5L24 27l-12-6.5Z" />
                    <path d="M17 23.5v7c4.5 3.5 9.5 3.5 14 0v-7M36 21v9" />
                </svg>
                <span className="sga-brand__copy">
                    <strong>SGA</strong>
                    <span>Sistema de Gestión Académica</span>
                </span>
            </Link>
            <nav className="sga-nav" aria-label="Navegación principal">
                <Link to="/">Inicio</Link>
                <Link to="/alumnos">Alumnos</Link>
                <Link to="/docentes">Docentes</Link>
                <Link to="/ayuda" aria-label="Ayuda">Ayuda</Link>
            </nav>
            <div className="sga-theme">
                <span className="sga-theme__label">Tema</span>
                <SelectorTema />
            </div>
        </header>
    )
}