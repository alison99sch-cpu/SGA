const express = require("express")
const router = express.Router()

router.get("/", obtenerAlumnos)


//POST crear uno nuevo
router.post("/", (req, res)=>{
    const nuevoAlumno = req.body
    alumnos.push(nuevoAlumno)
    res.json({mensaje:"Alumno registrado correctamente"})
    
})

//PUT editar
router.put("/:id", (req,res) => {
    const id = Number(req.params.id)
    const alumno = alumnos.find(alumno => alumno.id === id)
    alumno.id = req.body.id
    alumno.nombre = req.body.nombre
    alumno.carrera = req.body.carrera
    res.json({mensaje: "Alumno actualizado correctamente"})

})



//DELETE eliminar
router.delete("/:id", (req,res) => {
    const id = Number(req.params.id)
    alumnos = alumnos.filter(alumno => alumno.id !== id)
    res.json({mensaje: "Alumno eliminado correctamente"})
})

//GET obtener alumnos
app.get("/alumnos", (req, res) => {
    res.json(alumnos)
} )

app.get("/alumnos/:id", (req, res) => {
    const id = Number(req.params.id)
    const alumno = alumnos.find(a => a.id ===id)
    res.json(alumno)
})

module.exports = router 