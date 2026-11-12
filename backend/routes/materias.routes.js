const express = require("express")
const {verificarToken} = require("../middlewares/auth.middleware")
const {obtenerMaterias, obtenerMateria, crearMateria, actualizarMateria, eliminarMateria} = require("../controllers/materias.controllers")
const router = express.Router()

router.get("/", verificarToken, obtenerMaterias)



router.get("/:codigo", verificarToken, obtenerMateria)


router.post("/", verificarToken, crearMateria)


router.put("/:codigo", verificarToken, actualizarMateria)



router.delete("/:codigo", verificarToken, eliminarMateria)
   

module.exports = router 
