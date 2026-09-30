import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Titulo} from "./components/Footer";
import {TarjetaAlumno} from "./components/TarjetaAlumno";

function App()
{   <>
    <Navbar />
    <Titulo texto="Sistema de Gestión Academica" color="White"/>
    <TarjetaAlumno 
    nombre="Ana" carrera="Medicina" edad="21"/>
     <TarjetaAlumno 
    nombre="Luz" carrera="Programación" edad="24"/>
    <Footer />
    </>
}

export default App