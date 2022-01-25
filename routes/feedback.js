const express = require("express")
const feedbackService = require("../services/feedback")

const router = express.Router()

router.post('/', feedbackService.addFeedback)
router.get('/id/:id', feedbackService.getFeedback)
router.get('/detail/id/:id/from/:seq', feedbackService.getFeedbackDetail)

module.exports = router