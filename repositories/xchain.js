const pool = require('../db/pool')
const { v4: uuidv4 } = require('uuid');

const createXchain = async (name, enName, image, detail) => {
  const conn = await pool.getConnection(async conn => conn)
  await conn.beginTransaction()
  const xchainId = uuidv4()
  await conn.query(`insert into xchain.xchain (xchain_id, xchain_name, xchain_en_name, xchain_image, xchain_detail, created_at, updated_at, created_by, updated_by) 
  values(?, ?, ?, ?, ?, now(), now(), 'admin', 'admin')`, [xchainId, name, enName, image, detail])
  await conn.query(
    `insert into xchain.xchain_eval (
    xchain_id, dec_score, dec_detail, per_score, per_detail, sec_score, sec_detail, scal_score, scal_detail,
    created_at, updated_at, created_by, updated_by) values (?, 0, '', 0, '', 0, '', 0, '', now(), now(), 'admin', 'admin')`, [xchainId])
  await conn.commit() 
}

const findXchain = async (from, to) => {
  const conn = await pool.getConnection(async conn => conn)
  const rows = await conn.query("select * from xchain.xchain order by 1", [])
  console.log(rows[0])
  return rows[0]
}

module.exports = {
  createXchain,
  findXchain
}