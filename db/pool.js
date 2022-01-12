const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mariadb',
  database: 'xchain',
  connectionLimit: 20
})

module.exports = pool