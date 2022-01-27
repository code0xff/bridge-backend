const express = require('express')
const adminService = require('../services/admin')

const router = express.Router()

router.get('/address/:address', adminService.checkAdmin)

module.exports = router
