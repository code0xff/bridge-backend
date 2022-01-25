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
      ret['feedbackCount'] = feedback.feedback_count
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

const getFeedbackDetail = async (req, res, next) => {
  const {id, seq} = req.params
  try {
    const firstFeedback = await feedbackRepository.findFirstFeedbackDetail(id)
    if (firstFeedback.length === 0) {
      return res.send({isFeedbackEnd: true, feedbacks: []})
    }

    const feedbacks = await feedbackRepository.findFeedbackDetailFromSeq(id, parseInt(seq))
    console.log(feedbacks)

    if (feedbacks[feedbacks.length - 1].xchain_feedback_detail_seq === firstFeedback[0].xchain_feedback_detail_seq) {
      return res.send({isFeedbackEnd: true, feedbacks})
    } else {
      return res.send({isFeedbackEnd: false, feedbacks})
    }
  } catch (e) {
    console.error(e)
    return res.status(500).send('failed to get feedback!')
  }
}

module.exports = {
  addFeedback,
  getFeedback,
  getFeedbackDetail,
}