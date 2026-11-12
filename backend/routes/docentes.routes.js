const express = require("express")
const {verificarToken} = require("../middlewares/auth.middleware")
const {obtenerDocentes, obtenerDocente, crearDocente, actualizarDocente, eliminarDocente} = require("../controllers/docentes.controllers")
const router = express.Router()


router.get("/",verificarToken,obtenerDocentes)


//GET
router.get("/", verificarToken, obtenerDocente)

//POST crear uno nuevo
router.post("/",verificarToken, crearDocente)

//PUT editar
router.put("/:id", verificarToken, actualizarDocente)


//DELETE eliminar
router.delete("/:id", verificarToken, eliminarDocente)
   

module.exports = router 
