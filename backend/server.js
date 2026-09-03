const express = require("express")
const app = express()
app.use(express.json())//Cualquier info q obtengo debe ser en formato json
const alumnosRoutes = require("./routes/alumnos.routes")
app.use("/alumnos", alumnosRoutes)




//Creo un middleware:
 app. use((req,resq,next) => {
     console.log(req.method)
     console.log(req.url)
     next()
 })




app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000")
})