const pool = require('../db/pool')

const createFeedback = async (feedback) => {
  let conn
  try {
    conn = await pool.getConnection(async conn => conn)
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

const findFeedback = async (id) => {
  let conn
  try {
    conn = await pool.getConnection(async conn => conn)

    const rows = await conn.query(`select * from xchain.xchain_feedback where xchain_id=?`, [id])
    return rows[0]
  } catch (e) {
    throw e
  } finally {
    conn.release()
  }
}

const findLatestFeedbackDetail = async (id) => {
  let conn
  try {
    conn = await pool.getConnection(async conn => conn)

    const rows = await conn.query(`select * from xchain.xchain_feedback_detail where xchain_id=? order by 1 desc limit 1`, [id])
    return rows[0]
  } catch (e) {
    throw e
  } finally {
    conn.release()
  }
}

const findFirstFeedbackDetail = async (id) => {
  let conn
  try {
    conn = await pool.getConnection(async conn => conn)

    const rows = await conn.query(`select * from xchain.xchain_feedback_detail where xchain_id=? order by 1 limit 1`, [id])
    return rows[0]
  } catch (e) {
    throw e
  } finally {
    conn.release()
  }
}

const findFeedbackDetailFromSeq = async (id, seq) => {
  let conn
  try {
    conn = await pool.getConnection(async conn => conn)

    let rows
    if (seq === 0) {
      rows = await conn.query(`select * from xchain.xchain_feedback_detail where xchain_id=? order by 1 desc limit 10`, [id])
    } else {
      rows = await conn.query(`select * from xchain.xchain_feedback_detail where xchain_id=? and xchain_feedback_detail_seq < ? order by 10 desc limit 1`, [id, seq])
    }
    return rows[0]
  } catch (e) {
    throw e
  } finally {
    conn.release()
  }
}

module.exports = {
  createFeedback,
  findFeedback,
  findLatestFeedbackDetail,
  findFirstFeedbackDetail,
  findFeedbackDetailFromSeq,
}