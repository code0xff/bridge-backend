const evaluationRepository = require('../repositories/evaluation')

const modifyEvaluation = async (req, res, next) => {
    const eval = req.body.eval;
    try {
        await evaluationRepository.updateEvaluation(eval)
        return res.send('success to modify evaluation!')
    } catch (e) {
        console.error(e)
        return res.status(500).send('failed to create evaluation!')
    }
}

const getEvaluation = async (req, res, next) => {
    try {
        const xchainId = parseInt(req.params.xchainId);
        const evaluation = await evaluationRepository.getEvaluation(xchainId)
        return res.send(evaluation)
    } catch (e) {
        console.error(e)
        return res.status(500).send('failed to load evaluation!')
    }
}

module.exports = {
    modifyEvaluation,
    getEvaluation
}