const express = require("express")
//const alumnosController = require("../controllers/alumnos.controllers")
const {verificarToken} = require("../middlewares/auth.middleware")
const {obtenerAlumnos, obtenerAlumno, crearAlumno, actualizarAlumno, eliminarAlumno} = require("../controllers/alumnos.controllers")
const router = express.Router()
const {verificarRol} = require("../middlewares/rolMiddleware")


router.get("/", verificarToken, obtenerAlumnos)
router.get("/:id", verificarToken, obtenerAlumno)
 
//POST crear uno nuevo
router.post("/", verificarToken, verificarRol("admin"), crearAlumno)


//PUT editar
router.put("/:id", verificarToken, verificarRol("admin"), actualizarAlumno)

//DELETE eliminar
router.delete("/:id", verificarToken, verificarRol("admin"), eliminarAlumno)

module.exports = router 