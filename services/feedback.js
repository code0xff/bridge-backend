const feedbackRepository = require('../repositories/feedback')

const addFeedback = async (req, res, next) => {
  const feedback = req.body.feedback;
  try {
    await feedbackRepository.createFeedback(feedback)
    return res.send('success to add feedback!')
  } catch (e) {
    console.error(e)
    return res.status(500).send('failed to add feedback!')
  }
}

module.exports = {
  addFeedback,
}