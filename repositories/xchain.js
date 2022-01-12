const pool = require('../db/pool')

const findXchains = async () => {
  const conn = await pool.getConnection(async conn => conn);
  console.log({conn})
  return {}
}

module.exports = {
    findXchains
}