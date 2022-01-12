const pool = require('../db/pool')

const findXchains = async () => {
  const conn = await pool.getConnection(async conn => conn)
  const rows = await conn.query('select * from xchain.xchain')
  console.log(rows)
  return rows[0]
}

module.exports = {
    findXchains
}