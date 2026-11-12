const express = require("express")
//const alumnosController = require("../controllers/alumnos.controllers")
const {verificarToken} = require("../middlewares/auth.middleware")
const {obtenerAlumnos, obtenerAlumno, crearAlumno, actualizarAlumno, eliminarAlumno} = require("../controllers/alumnos.controllers")
const router = express.Router()

router.get("/", verificarToken, obtenerAlumnos)
router.get("/:id", verificarToken, obtenerAlumno)
 
//POST crear uno nuevo
router.post("/", verificarToken, crearAlumno)

//PUT editar
router.put("/:id", verificarToken, actualizarAlumno)

//DELETE eliminar
router.delete("/:id", verificarToken, eliminarAlumno)

module.exports = router 