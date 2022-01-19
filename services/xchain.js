const xchainRepository = require('../repositories/xchain')

const addXchain = async (req, res, next) => {
  try {
    console.log(req.body)
    const name = req.body.xchainName
    const enName = req.body.xchainEnName
    const image = req.body.xchainImage
    const detail = req.body.xchainDetail

    await xchainRepository.createXchain(name, enName, image, detail)
    return res.send('success to create!')
  } catch (e) {
    console.error(e)
    return res.status(500).send('failed to create!')
  }
}

const getXchain = async (req, res, next) => {
  const xchains =  await xchainRepository.findXchain()
  return res.send(xchains)
}

module.exports = {
  addXchain,
  getXchain
}