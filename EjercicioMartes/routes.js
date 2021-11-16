const express = require('express');
const router = express.Router();

//Funcion regresar busqueda por id
const buscarId = (id,) => {
    id = parseInt(id);
    let usuario = [];
    usuariosArray.forEach((elemento, index) => {
        if (elemento.id === id) {
            usuario = usuariosArray[index];
            console.log(usuario);
            return usuario;
        }

    })
}

//Middleware
function validarDatos(req,res,next){
    if ((req.query.id === "" || req.query.id === undefined) && (req.query.name === undefined || req.query.name === "")){
        res.status(403).send('Datos invalidos');
    }else{
        next();
    }
}

router.get('/users',validarDatos, (req, res) => {
    let { id,name } = req.query;
    //console.log(id,name);
    let usuario = [];
    if(id !== "" && name === "" || name === undefined) {
        id = parseInt(id);
        usuariosArray.forEach((elemento, index) => {
            if (elemento.id === id) {
                usuario = usuariosArray[index];
                console.log(usuario);
            }
        })
    }
    else if (id === "" && id === undefined || name !== "") {
        usuariosArray.forEach((elemento, index) => {
            if (elemento.name === name) {
                usuario = usuariosArray[index];
                console.log(usuario);
            }
        })
    }
    
    res.status(200).send(
        {
            message: "Usuarios",
            usuario: usuario,
        }
    )
});


//Objeto usuarios
const usuariosArray = [
    { id: 1, name: 'Danilo', mail: 'danilo@tecla.academy' },
    { id: 2, name: 'Hugo', mail: 'hugo@tecla.academy' },
    { id: 3, name: 'Juan', mail: 'juan@tecla.academy' }
]



module.exports = router;