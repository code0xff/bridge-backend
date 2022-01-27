const adminRepository = require('../repositories/admin')

const checkAdmin = async (req, res, next) => {
  try {
    const address = req.params.address;
    const isAdmin = await adminRepository.existAdminByAddress(address)
    return res.send(isAdmin)
  } catch (e) {
    console.error(e)
    return res.status(500).send('failed to check admin!')
  }
}

module.exports = {
  checkAdmin,
}