/*import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Titulo} from "./components/Footer";
import {TarjetaAlumno} from "./components/TarjetaAlumno";*/




// import TamanoTexto from "./components/Ejemplos/TamanoTexto";
import {FormularioA} from "./components/FormularioA";
function App()
{  
    // const [nombre, setNombre] = useState("")

   
    /* <>
   
    <Navbar />
    <Titulo texto="Sistema de Gestión Academica" color="White"/>
    <TarjetaAlumno 
    nombre="Ana" carrera="Medicina" edad="21"/>
     <TarjetaAlumno 
    nombre="Luz" carrera="Programación" edad="24"/>
    <Footer />
    </>*/
 return(
    <>
    
   {/* <input value={nombre}
   onChange={(e) => setNombre(e.target.value)}/>

   <p>Hola {nombre}</p>  */}

  <FormularioA />
   
    </>
 )
}

export default App