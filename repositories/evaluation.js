const pool = require('../db/pool')

const updateEvaluation = async (eval) => {
    const conn = await pool.getConnection(async conn => conn)
    console.log(eval)
    await conn.query(
        `update xchain.xchain_eval set dec_score=?, dec_detail=?, per_score=?, per_detail=?, sec_score=?, sec_detail=?, scal_score=?, scal_detail=?,
        updated_at=now(), updated_by='admin' where xchain_id=?`,
        [eval.decScore, eval.decDetail, eval.perScore, eval.perDetail, eval.secScore, eval.secDetail, eval.scalScore, eval.scalDetail, eval.xchainId])
}

const getEvaluation = async (xchainId) => {
    const conn = await pool.getConnection(async conn => conn)
    const rows = await conn.query(`select * from xchain.xchain_eval where xchain_id = ?`, [xchainId])
    return rows[0]
}

module.exports = {
    updateEvaluation,
    getEvaluation
}