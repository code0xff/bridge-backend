const express = require("express")
const feedbackService = require("../services/feedback")

const router = express.Router()

router.post('/', feedbackService.addFeedback)
router.get('/id/:id', feedbackService.getFeedback)

module.exports = router