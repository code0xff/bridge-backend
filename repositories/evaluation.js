const pool = require('../db/pool')

const updateEvaluation = async (evalution) => {
    let conn
    try {
        conn = await pool.getConnection(async conn => conn)
        await conn.query(
          `update xchain.xchain_eval set dec_score=?, dec_detail=?, per_score=?, per_detail=?, sec_score=?, sec_detail=?, scal_score=?, scal_detail=?, ref_detail=?,
        updated_at=now(), updated_by='admin' where xchain_id=?`,
          [evalution.decScore, evalution.decDetail, evalution.perScore, evalution.perDetail, evalution.secScore, evalution.secDetail, evalution.scalScore, evalution.scalDetail, evalution.refDetail, evalution.xchainId])
        conn.commit()
    } catch (e) {
        throw e
    } finally {
        conn.release()
    }
}

const getEvaluation = async (xchainId) => {
    let conn
    try {
        conn = await pool.getConnection(async conn => conn)
        const rows = await conn.query(`select * from xchain.xchain_eval where xchain_id = ?`, [xchainId])
        return rows[0]
    } catch (e) {
      throw e
    } finally {
      conn.release()
    }
}

module.exports = {
    updateEvaluation,
    getEvaluation
}