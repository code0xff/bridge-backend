const feedbackRepository = require('../repositories/feedback')

const addFeedback = async (req, res, next) => {
  const feedback = req.body.feedback
  try {
    await feedbackRepository.createFeedback(feedback)
    return res.send('success to add feedback!')
  } catch (e) {
    console.error(e)
    return res.status(500).send('failed to add feedback!')
  }
}

const getFeedback = async (req, res, next) => {
  const id = req.params.id
  try {
    const feedbacks = await feedbackRepository.findFeedback(id)
    let ret = {}
    if (feedbacks) {
      const feedback = feedbacks[0]
      if (feedback.feedback_count > 0) {
        ret['feeAverage'] = parseInt(feedback.fee_sum / feedback.feedback_count)
        ret['timeAverage'] = parseInt(feedback.time_sum / feedback.feedback_count)
        ret['uiAverage'] =  parseInt(feedback.ui_sum / feedback.feedback_count)
        ret['supportAverage'] = parseInt(feedback.support_sum / feedback.feedback_count)
      } else {
        ret['feeAverage'] = 0
        ret['timeAverage'] = 0
        ret['uiAverage'] =  0
        ret['supportAverage'] = 0
      }
      ret['feedbackCount'] = feedback_count
    }

    const feedbackDetails = await feedbackRepository.findLatestFeedbackDetail(id)
    if (feedbackDetails) {
      ret['feedbackDetail'] = feedbackDetails[0]
    }
    return res.send(ret)
  } catch (e) {
    console.error(e)
    return res.status(500).send('failed to get feedback!')
  }
}

module.exports = {
  addFeedback,
  getFeedback,
}