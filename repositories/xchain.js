const pool = require('../db/pool')
const { v4: uuidv4 } = require('uuid');

const createXchain = async (xchain) => {
  let conn
  try {
    conn = await pool.getConnection(async conn => conn)
    await conn.beginTransaction()
    const xchainId = uuidv4()
    await conn.query(`insert into xchain.xchain (xchain_id, xchain_name, xchain_en_name, xchain_image, xchain_detail, created_at, updated_at, created_by, updated_by) 
    values(?, ?, ?, ?, ?, now(), now(), 'admin', 'admin')`, [xchainId, xchain.xchainName, xchain.xchainEnName, xchain.xchainImage, xchain.xchainDetail])
    await conn.query(
      `insert into xchain.xchain_eval (
      xchain_id, dec_score, dec_detail, per_score, per_detail, sec_score, sec_detail, scal_score, scal_detail,
      created_at, updated_at, created_by, updated_by) values (?, 0, '', 0, '', 0, '', 0, '', now(), now(), 'admin', 'admin')`, [xchainId])
    await conn.query(
      `insert into xchain.xchain_feedback (
        fee_sum, time_sum, ui_sum, support_sum, feedback_count, xchain_id,
        created_at, updated_at, created_by, updated_by) values (0, 0, 0, 0, 0, ?, now(), now(), 'admin', 'admin')`, [xchainId])
    await conn.commit()
  } catch(e) {
    throw e
  } finally {
    conn.release()
  }
}

const findAllXchain = async () => {
  let conn
  try {
    conn = await pool.getConnection(async conn => conn)
    const rows = await conn.query("select * from xchain.xchain order by 1", [])
    return rows[0]
  } catch (e) {
    throw e
  } finally {
    conn.release()
  }
}

const findXchain = async (xchainId) => {
  let conn
  try {
    conn = await pool.getConnection(async conn => conn)
    const rows = await conn.query("select * from xchain.xchain where xchain_id = ?", [xchainId])
    return rows[0]
  } catch (e) {
    throw e
  } finally {
    conn.release()
  }
}


module.exports = {
  createXchain,
  findAllXchain,
  findXchain,
}