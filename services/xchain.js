const xchainRepository = require('../repositories/xchain')

const addXchain = async (req, res, next) => {
  try {
    const xchain = req.body.xchain

    await xchainRepository.createXchain(xchain)
    return res.send('success to create!')
  } catch (e) {
    console.error(e)
    return res.status(500).send('failed to create!')
  }
}

const getAllXchain = async (req, res, next) => {
  const xchains =  await xchainRepository.findAllXchain()
  return res.send(xchains)
}

const getXchain = async (req, res, next) => {
  try {
    const xchainId = req.params.id;
    const xchains = await xchainRepository.findXchain(xchainId)
    if (xchains) {
      return res.send(xchains[0])
    } else {
      return res.status(500).send('xchain does not exist! xchain_id: ' + xchainId)
    }
  } catch (e) {
    console.error(e)
    return res.status(500).send('failed to get xchain!')
  }
}

module.exports = {
  addXchain,
  getAllXchain,
  getXchain,
}