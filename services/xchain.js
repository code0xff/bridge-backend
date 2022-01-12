const xchainRepository = require('../repositories/xchain')

const getXchain = async (req, res, next) => {
  return await xchainRepository.findXchains()
}

module.exports = {
    getXchain
}