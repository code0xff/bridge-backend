const express = require('express')
const xchainService = require('../services/xchain')

const router = express.Router()

router.get('/id/:id', xchainService.getXchain)
router.get('/', xchainService.getAllXchain)
router.post('/', xchainService.addXchain)

module.exports = router
