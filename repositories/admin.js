const pool = require("../db/pool");

const existAdminByAddress = async (address) => {
  let conn
  try {
    conn = await pool.getConnection(async conn => conn)

    const rows = await conn.query(`select * from xchain.xchain_admin where address=?`, [address])
    return rows[0].length > 0
  } catch (e) {
    throw e
  } finally {
    conn.release()
  }
}

module.exports ={
  existAdminByAddress
}