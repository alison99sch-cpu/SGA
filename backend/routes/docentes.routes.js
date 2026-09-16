const express = require("express")
const {obtenerDocentes, obtenerDocente, crearDocente, actualizarDocente, eliminarDocente} = require("../controllers/docentes.controllers")
const router = express.Router()

router.get("/", obtenerDocentes)


//GET
router.get("/", obtenerDocente)

//POST crear uno nuevo
router.post("/", crearDocente)

//PUT editar
router.put("/:id", actualizarDocente)


//DELETE eliminar
router.delete("/:id", eliminarDocente)
   

module.exports = router 
