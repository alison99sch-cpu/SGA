import Box from "@mui/material/Box"
import { useColorScheme } from "@mui/material/styles"
import MaterialUISwitch from "./MaterialUISwitch"

export function SelectorTema(){
    const {mode, setMode} = useColorScheme()

    if(!mode) {
        return null
    }

    const modoOscuro = mode == 'dark'

    function CambiarModo(event){
    setMode(event.target.checked ? "dark" : "light")
    }
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 0,
            width: "auto",
            flexShrink: 0
        }}>
        <MaterialUISwitch
        checked={modoOscuro}
        onChange={CambiarModo} 
        inputProps={{"aria-laber":"Cambiar modo claro/oscuro"}}/>
        </Box>  
    )
}
