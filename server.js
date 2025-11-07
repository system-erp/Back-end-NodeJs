// Importacion del modulo de express
const express = require("express");
const pool = require("./db"); //importacion de la instancia de la conexion a la bd
const port = 3000; // Puerto donde se correra el servidor


// Instancia de express
const app = express(); 
// middleware para recibir datos en formato json
app.use(express.json())






//======= RUTAS =======

//Ruta raiz para veridficar que el sevidor corre correctamente
app.get('/',function(req, res){
    res.sendStatus(200)
    
})


// Ruta post para recibir datos del body (prueba)
app.post('/',function(req, res){
    const {name, location} = req.body
    res.status(200).send(`tu clave es ${name} y tu ubicacion es ${location}`)
})




//Inicio del servidor por el puerto definido
app.listen(port,function() {
  console.log(`Servidor corriendo en el puerto ${port}`);
}); 
