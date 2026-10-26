
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Paper from '@mui/material/Paper'

export function FAQ() {
  const id = React.useId();
  return (
    <>
   
    <div>
       <Paper elevation={2} sx={{p:3, border:2, borderColor:"divider", borderRadius:"3"}}>
        <Typography variant='h6' sx={{mb:1}}>¿? Preguntas frecuentes</Typography>
        <Typography variant='body2' color='text.secundary' sx={{mb:1}}>Ayuda para utilizar el sistema de gestión académico.</Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span">¿Cómo se registra un alumno?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para registrar un alumno, dirijase al formulario de alumnos. Luego complete los siguientes datos:
            legajo, nombre, correo y carrera. Por último, seleccione el botón de "Guardar".
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls={`${id}-panel2-content`}
          id={`${id}-panel2-header`}
        >
          <Typography component="span">¿Cómo editar/modificar los datos de un alumno?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para editar/modificar los datos de un alumno, busque al alumno deseado en el listado.
            A continuación, seleccione el botón de "Editar". Regrese al formulario, edite la informació requerida y seleccione "Guardar cambios".
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls={`${id}-panel2-content`}
          id={`${id}-panel2-header`}
        >
          <Typography component="span">¿Cómo cancelo la edición de un alumno?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para cancelar la modificación de un alumno, seleccione el botón de "Cancelar", que se 
            encuentra debajo del botón de "Guardar cambios".
          </Typography>
        </AccordionDetails>
      </Accordion>

      </Paper>
    </div>
    </>
  );
}
