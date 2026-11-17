import { Navigate, Outlet} from "react-router-dom"
import { useAuth } from "../context/useAuth"

const RutaProtegida = () => {
    const { token, cargando } = useAuth()
    if (cargando) {
        return <p>Verificando sesión...</p>
    }

    if (!token) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}

export default RutaProtegida