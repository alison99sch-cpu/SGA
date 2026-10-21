import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


export function EjemploMUI() {
 return (
     <>
    <Stack direction="row" spacing={1}>
      <Button variant="outlined">Aceptar</Button>
      <Button variant="outlined">
        Otra opción
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
       Cancelar
      </Button>
    </Stack>
       
    <Stack direction="row" spacing={2} sx={{mt:2, mx:4}}>
      <Button variant="outlined" startIcon={<DeleteIcon />} color='error'>
        Borrar
      </Button>
      <Button variant="contained" endIcon={<SendIcon />} sx={{bgcolor:"violet", color:"#440f3d",
        "&:hover":{bgcolor:"#2d0834", color: "#f6f1f1"}
      }}>
        Enviar
      </Button>

    </Stack>
    </>

    );
}



   