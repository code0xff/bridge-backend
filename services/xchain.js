const xchainRepository = require('../repositories/xchain')

const getXchain = async (req, res, next) => {
  const from = parseInt(req.params.from);
  const to = parseInt(req.params.to);
  const xchains =  await xchainRepository.findXchainByFromIdAndToId(from, to)
  return res.send(xchains)
}

module.exports = {
    getXchain
}