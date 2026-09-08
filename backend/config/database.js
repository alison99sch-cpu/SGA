const mongoose = require("mongoose")

async function conectarBD() {
  try {
    await mongoose.connect("mongodb://localhost:27017/SGA")
    console.log("Base de datos conectada con éxito")
  } catch (error){
    console.log(error)
 } 
}

module.exports = conectarBD