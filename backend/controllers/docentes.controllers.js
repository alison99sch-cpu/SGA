const docentes = require("../data/docentes")

function obtenerDocentes(req,res) {
    res.json(docentes)
}


module.exports = {obtenerDocentes}