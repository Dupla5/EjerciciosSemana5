'use strict'
const express = require('express');
const app = express();


//Configuramos el puerto
app.set('port', process.env.PORT || 3000);

//Routes
app.use(require('./routes'));

//Inicializamos el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
