const mysql = require('mysql')

let pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mariaadmin',
  database: 'xchain',
  connectionLimit: 20
})

module.exports = pool