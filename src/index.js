const path = require('path'); // Libreria NodeJS para manejo de rutas del sistema

const express = require('express');
const app = express();

// Config
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views')); // Normalmente Node sabe donde estan las vistas, como en este caso no, debemos cambiar la ruta
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');  // Se necesita una view engine para renderizas los ".ejs"

// Middlewares: Control de acceso a rutas, por ejermplo

//Routes
app.use(require('./routes/index'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Listening
app.listen(app.get('port'), () => {

    console.log("Running on port", app.get('port'));

});