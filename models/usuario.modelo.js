const mongoose = require('mongoose');
const { Schema } = mongoose;  // Permite la crear la estructura de la tabla 

const usuariosSchema = new Schema({
    cedula: { type: Number, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
});

// Permite reutilizarlo en todo el proyecto (Nombre del modelo, Establecemos como sera la estructura del esquema)
module.exports = mongoose.model('usuarios',usuariosSchema);