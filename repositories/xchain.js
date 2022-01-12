const pool = require('../db/pool')

const findXchainByFromIdAndToId = async (from, to) => {
  const conn = await pool.getConnection(async conn => conn)
  const rows = await conn.query('select * from xchain.xchain where xchain_id >= ? and xchain_id <= ? order by 1', [from, to])
  console.log(rows[0])
  return rows[0]
}

module.exports = {
  findXchainByFromIdAndToId
}