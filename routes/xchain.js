const express = require('express')
const xchainService = require('../services/xchain')

const router = express.Router()

router.get('/', xchainService.getXchain)

module.exports = router
