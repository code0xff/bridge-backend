const xchainRepository = require('../repositories/xchain')

const getXchain = async (req, res, next) => {
  const xchains =  await xchainRepository.findXchains()
  return res.send(xchains)
}

module.exports = {
    getXchain
}