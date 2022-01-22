const evaluationRepository = require('../repositories/evaluation')

const modifyEvaluation = async (req, res, next) => {
    const evalution = req.body.evaluation
    try {
        await evaluationRepository.updateEvaluation(evalution)
        return res.send('success to modify evaluation!')
    } catch (e) {
        console.error(e)
        return res.status(500).send('failed to create evaluation!')
    }
}

const getEvaluation = async (req, res, next) => {
    try {
        const {xchainId} = req.params;
        const evaluations = await evaluationRepository.getEvaluation(xchainId)
        if (evaluations) {
            return res.send(evaluations[0])
        } else {
            return res.status(500).send(`evaluation does not exist! xchain_id: ${xchainId}`)
        }
    } catch (e) {
        console.error(e)
        return res.status(500).send('failed to load evaluation!')
    }
}

module.exports = {
    modifyEvaluation,
    getEvaluation
}