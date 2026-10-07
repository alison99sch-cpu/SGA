import { useEffect, useState } from "react"





function App()
{  
const [nombre, SetNombre] = useState("")

useEffect(()=> {
   if (nombre){
      document.title = `Hola ${nombre}`
   }else{
      document.title = `Mi app`
   }
}, [nombre])

 return(
    <>
    
  <input value={nombre}
  onChange={(e)=> SetNombre(e.target.value)}
  placeholder="Escribe tu nombre" />

  <h2>Hola {nombre}</h2>
   
    </>
 )
}

export default App