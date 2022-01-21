const pool = require('../db/pool')

const createFeedback = async (feedback) => {
  let conn
  try {
    conn = await pool.getConnection(async conn => conn)
    console.log(feedback)
    await conn.beginTransaction()
    await conn.query(
      `update xchain.xchain_feedback set fee_sum=fee_sum+?, time_sum=time_sum+?, ui_sum=ui_sum+?, support_sum=support_sum+?, feedback_count=feedback_count+1,
        updated_at=now(), updated_by='admin' where xchain_id=?`,
      [feedback.feeScore, feedback.timeScore, feedback.uiScore, feedback.supportScore, feedback.xchainId])
    await conn.query(
      `insert into xchain.xchain_feedback_detail (fee_score, time_score, ui_score, support_score, fee_detail, time_detail, ui_detail, support_detail, xchain_id, user_address, 
      created_at, updated_at, created_by, updated_by)
      values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now(), now(), 'admin', 'admin')`,
      [feedback.feeScore, feedback.timeScore, feedback.uiScore, feedback.supportScore, feedback.feeText, feedback.timeText, feedback.uiText, feedback.supportText, feedback.xchainId, feedback.userAddress])
    await conn.commit()
  } catch (e) {
    throw e
  } finally {
    conn.release()
  }
}

module.exports = {
  createFeedback
}