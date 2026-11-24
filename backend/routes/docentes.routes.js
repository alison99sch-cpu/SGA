const express = require("express")
const {verificarToken} = require("../middlewares/auth.middleware")
const {obtenerDocentes, obtenerDocente, crearDocente, actualizarDocente, eliminarDocente} = require("../controllers/docentes.controllers")
const router = express.Router()
const {verificarRol} = require("../middlewares/rolMiddleware")


router.get("/",verificarToken,obtenerDocentes)


//GET
router.get("/", verificarToken, obtenerDocente)

//POST crear uno nuevo
router.post("/",verificarToken, verificarRol("admin"), crearDocente)

//PUT editar
router.put("/:id", verificarToken, verificarRol("admin"), actualizarDocente)


//DELETE eliminar
router.delete("/:id", verificarToken, verificarRol("admin"), eliminarDocente)
   

module.exports = router 
