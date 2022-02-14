const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { mongoose } = require('./conectionDatabase'); // connecion con la db
 
module.exports = class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath= '/api/usuarios'
        // Middlewares
        this.middleware();
        // Rutas de mi aplicacion 
        this.router();
    }

    middleware(){

        // CORS 
        this.app.use(cors());

        // Permite visualizar las peticiones que estan llegando desde el navegador -con formateado de  texto 
        this.app.use(morgan('dev'));

        // Permite recibir una peticion(req) y luego la transforma en formato json - Lectura y parseo del body
        this.app.use(express.json());

        // Se inicializa un Middlewares - Remplasa la ruta (/)
        this.app.use(express.static('public'));
    }

    // Rutas de mi aplicacion 
    router(){

        // Llamamos todas la rutas asociadas a usuarios con un Middlewares
        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log( "Corrriendo en el puerto",this.port);
        } )
    }

}
