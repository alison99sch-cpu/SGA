const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())//Cualquier info q obtengo debe ser en formato json
app.use(cors())
const alumnosRoutes = require("./routes/alumnos.routes")
const docentesRoutes = require("./routes/docentes.routes")
app.use("/alumnos", alumnosRoutes)
app.use("/docentes", docentesRoutes)
const conectarDB = require("./config/database")
require("dotenv").config()
const PORT = process.env.PORT



conectarDB()


/*Creo un middleware:
 app. use((req,resq,next) => {
     console.log(req.method)
     console.log(req.url)
     next()
 })
*/



app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})