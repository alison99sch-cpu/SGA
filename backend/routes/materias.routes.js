const express = require("express")
const {verificarToken} = require("../middlewares/auth.middleware")
const {obtenerMaterias, obtenerMateria, crearMateria, actualizarMateria, eliminarMateria} = require("../controllers/materias.controllers")
const router = express.Router()
const {verificarRol} = require("../middlewares/rolMiddleware")

router.get("/", verificarToken, obtenerMaterias)



router.get("/:codigo", verificarToken, obtenerMateria)


router.post("/", verificarToken, verificarRol("admin"), crearMateria)


router.put("/:codigo", verificarToken, verificarRol("admin"), actualizarMateria)



router.delete("/:codigo", verificarToken, verificarRol("admin"), eliminarMateria)
   

module.exports = router 
