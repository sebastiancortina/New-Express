const { response, request } = require('express');
const Usuarios = require('../models/usuario.modelo') // Permite realizar consultas a la base de datos 


const usuariosGet = async (req = request, res = response) => {

    // recibe una peticion - parametros
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    // Permiter buscas todos los registros en la base de datos
    const usuario = await Usuarios.find();

    res.status(201).json(usuario);

}

const usuariosPut = async (req = request, res = response) => {

    const { id } = req.params;
    const  { cedula, ...resto } = req.body;

    const usuario = await Usuarios.findByIdAndUpdate(id, resto);

    res.status(201).json({
        msg: "operacion ",
        usuario
    });


}

const usuariosPost = async (req, res = response) => {

    // recibe una peticion
    const { cedula, nombre, apellido, edad } = req.body;

    const usuario = new Usuarios({ cedula, nombre, apellido, edad });

    // Permite guardar el la base de datos 
    await usuario.save();

    res.status(200).json({
        msg: "operacion exitosa"
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch - controlador'
    })
}

const usuariosDelete = async (req, res = response) => {

    const { id } = req.params;

    await Usuarios.findByIdAndRemove(id);


    res.status(200).json({
        msg: 'delete - controlador',
        id
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}
