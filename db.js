// Importacion del modulo 'pg' para la conexion a PostgreSQL
const { Pool } = require('pg')

//Creacion de la instancia para la conexion a la base de datos PostgreSQL
const pool = new Pool({
    host: 'db', // Nombre del servicio de la base de datos en docker-compose
    port: 5432, //Puerto por defecto de PostgreSQL
    user: 'user123', 
    password: 'password123',
    database: 'erp_db'
})

module.exports = pool //Exportacion de la instancia 