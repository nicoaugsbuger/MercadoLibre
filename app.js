//Importamos el servidor, que es un modulo de ter, por eso hay que instalarlo con "npm install express"
const express = require("express");
//Instn el servidor, ahora app es un OBJETO serivodor 
const app = express();
//Importamos el modulo nativo de Node para maniplar las URIs (por eso no hay que instalarlo con npm)
const path = require('path');
//Creamos la const con la direccion absoluta del public 
const public = path.resolve('./public')//const public = path.join(__dirname, './public')
//a) Llamamos al metodo static del modulo express
//b) Converimos la direccion absoluta en carpeta publica para que este dispponible para los navegadores 
//c) "App.use" indica al servidor que tiene que usar dicha carpeta
app.use(express.static(public));

const PORT = process.env.PORT || 3000;
//Ponemos a escuchar al servidor
//Recibe dos parametros, el primero es el puerto, y el segundo es la funcion o lo que queremos que se ejecute
app.listen(PORT, () => {console.log('Servidor corriendo en el puerto http://localhost:3000')});
//
app.get('/', (req, res) => {res.sendFile(path.resolve('./views/index.html'))});
app.get('/login', (req, res) => {res.sendFile(path.resolve('./views/login.html'))});
