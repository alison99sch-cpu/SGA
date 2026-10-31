const express = require("express")
const {obtenerMaterias, obtenerMateria, crearMateria, actualizarMateria, eliminarMateria} = require("../controllers/materias.controllers")
const router = express.Router()

router.get("/", obtenerMaterias)


//GET
router.get("/:codigo", obtenerMateria)

//POST crear uno nuevo
router.post("/", crearMateria)

//PUT editar
router.put("/:codigo", actualizarMateria)


//DELETE eliminar
router.delete("/:codigo", eliminarMateria)
   

module.exports = router 
