const express = require("express")
//const alumnosController = require("../controllers/alumnos.controllers")
const {obtenerAlumnos, obtenerAlumno, crearAlumno, actualizarAlumno, eliminarAlumno} = require("../controllers/alumnos.controllers")
const router = express.Router()

router.get("/", obtenerAlumnos)
router.get("/:id", obtenerAlumno)
 
//POST crear uno nuevo
router.post("/", crearAlumno)

//PUT editar
router.put("/:id", actualizarAlumno)



//DELETE eliminar
router.delete("/:id", eliminarAlumno)

module.exports = router 