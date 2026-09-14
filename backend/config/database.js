const mongoose = require("mongoose")

async function conectarBD() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Base de datos conectada con éxito")
  } catch (error){
    console.log(error)
 } 
}

module.exports = conectarBD