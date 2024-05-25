const mysql = require('mysql');

const conexion = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'CasaReal'
});

module.exports = conexion;