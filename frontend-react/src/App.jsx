import { FAQ } from "./pages/FAQ"
import Alumnos from "./pages/Alumnos"
import Docentes from "./pages/Docentes"
import { LayoutPrin } from "./layouts/LayaoutPrin"
import  Inicio  from "./pages/Inicio"
import { Routes, Route } from "react-router-dom"
function App() {


   return (
      <Routes>
         <Route path="/" element={<LayoutPrin />}>
            <Route index element={<Inicio />} />
            <Route path="alumnos" element={<Alumnos />} />
            <Route path="docentes" element={<Docentes />} />
            <Route path="ayuda" element={<FAQ />} />
         </Route>
      </Routes>

   )
}

export default App