const pool = require('../db/pool')

const createXchain = async (name, enName, image, detail) => {
  const conn = await pool.getConnection(async conn => conn)
  await conn.query(`insert into xchain.xchain (xchain_name, xchain_en_name, xchain_image, xchain_detail, created_at, updated_at, created_by, updated_by) 
  values(?, ?, ?, ?, now(), now(), 'admin', 'admin')`, [name, enName, image, detail])
}

const findXchainByFromIdAndToId = async (from, to) => {
  const conn = await pool.getConnection(async conn => conn)
  const rows = await conn.query("select * from xchain.xchain where xchain_id >= ? and xchain_id <= ? order by 1", [from, to])
  console.log(rows[0])
  return rows[0]
}

module.exports = {
  createXchain,
  findXchainByFromIdAndToId
}