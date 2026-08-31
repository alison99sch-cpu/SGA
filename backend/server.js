const express = require("express")
const app = express()
app.use(express.json())//Cualquier info q obtengo debe ser en formato json

const alumnos = [{
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
app.get("/alumnos", (req, res) => {
    res.json(alumnos)
} )

app.get("/alumnos/:id", (req, res) => {
    const id = Number(req.params.id)
    const alumno = alumnos.find(a => a.id ===id)
    res.json(alumno)
})


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

app.get("/maestros", (req, res) => {
    res.JSON(maestros)
})

app.get("/maestros/:id", (req, res) => {
const id = Number(req.params.id)
const maestro = maestros.find(b => b.id === id)
res.json(maestro)
}) 

//POST
app.post("/alumnos", (req, res)=>{
    const nuevoAlumno = req.body
    alumnos.push(nuevoAlumno)
    res.json({mensaje:"Alumno registrado correctamente"})
    
})

//PUT
app.put("/alumnos/:id", (req,res) => {
    const id = Number(req.params.id)
    const alumno = alumnos.find(alumno => alumno.id === id)
    alumno.id = req.body.id
    alumno.nombre = req.body.nombre
    alumno.carrera = req.body.carrera
    res.json({mensaje: "Alumno actualizado correctamente"})

})

app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000")
})


