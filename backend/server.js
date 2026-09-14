const express = require("express")
const app = express()
app.use(express.json())//Cualquier info q obtengo debe ser en formato json
const alumnosRoutes = require("./routes/alumnos.routes")
app.use("/alumnos", alumnosRoutes)
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