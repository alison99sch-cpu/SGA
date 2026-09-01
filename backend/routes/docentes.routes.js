


//GET
router.get("/", (req, res) => {
    res.JSON(docentes)
})

router.get("/:id", (req, res) => {
const id = Number(req.params.id)
docente = docentes.find(b => b.id === id)
res.json(mdocente)
}) 

//POST crear uno nuevo
router.post("/", (req, res)=>{
    const nuevoAlumno = req.body
    docentes.push(nuevoAlumno)
    res.json({mensaje:"docente registrado correctamente"})
    
})

//PUT editar
router.put("/:id", (req,res) => {
    const id = Number(req.params.id)
    const docente = docentes.find(docente => docente.id === id)
    docente.id = req.body.id
    docente.nombre = req.body.nombre
    docente.carrera = req.body.carrera
    res.json({mensaje: "docente actualizado correctamente"})

})



//DELETE eliminar
router.delete("/:id", (req,res) => {
    const id = Number(req.params.id)
    docentes = docentes.filter(docente => docente.id !== id)
    res.json({mensaje: "docente eliminado correctamente"})
})