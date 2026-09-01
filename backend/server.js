const express = require("express")
const app = express()
app.use(express.json())//Cualquier info q obtengo debe ser en formato json
const alumnosRoutes = require("./routes/alumnos.routes")
app.use("/alumnos", alumnosRoutes)

let alumnos = [{
    id: 1,
    nombre: "Ali",
    carrera: "Programación"
    },
    {  
    id: 2,
    nombre: "Rosa",
    carrera: "Programación"

    }

]


//Creo un middleware:
// app. use((req,resq,next) => {
//     console.log(req.method)
//     console.log(req.url)
//     next()
// })

const maestros = [{
    id: 1,
    nombre: "Sandra",
    especialidad: "Historia"
},
{
    id: 2,
    nombre: "Horacio",
    especialidad: "Matemáticas"
},
{
    id: 3,
    nombre: "Luisa",
    especialidad: "Programación"
},
{
    id: 4,
    nombre: "Julian",
    especialidad: "Legislación"
},
{
    id: 5,
    nombre: "Pedro",
    especialidad: "Lengua y literatura"
}

]




app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000")
})