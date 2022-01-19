const express = require('express')
const xchainService = require('../services/xchain')

const router = express.Router()

router.post('/', xchainService.addXchain)
router.get('/', xchainService.getXchain)

module.exports = router
