const mongoose = require('mongoose');

const URI = 'mongodb://localhost/usuarios'

// Permite conectarnos con la base de datos local
mongoose.connect(URI)
    .then(db => console.log('DB is connected')) // Muestra un mesaje indigando que la db esta conetado
    .catch(err => console.log(err)); // Muestra un mesaje de error en la connecion

module.exports = mongoose;    