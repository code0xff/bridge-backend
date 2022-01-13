const pool = require('../db/pool')

const createEvaluation = async (eval) => {
    const conn = await pool.getConnection(async conn => conn)
    console.log(eval)
    await conn.query(
        `insert into xchain.xchain_eval (
        xchain_id, dec_score, dec_detail, per_score, per_detail, sec_score, sec_detail, scal_score, scal_detail,
        created_at, updated_at, created_by, updated_by) values (?, ?, ?, ?, ?, ?, ?, ?, ?, now(), now(), 'admin', 'admin')`,
        [eval.xchainId, eval.decScore, eval.decDetail, eval.perScore, eval.perDetail, eval.secScore, eval.secDetail, eval.scalScore, eval.scalDetail])
}

const getEvaluation = async (xchainId) => {
    const conn = await pool.getConnection(async conn => conn)
    const rows = await conn.query(`select * from xchain.xchain_eval where xchain_id = ?`, [xchainId])
    return rows[0]
}

module.exports = {
    createEvaluation,
    getEvaluation
}