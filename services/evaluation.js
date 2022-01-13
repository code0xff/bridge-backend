const evaluationRepository = require('../repositories/evaluation')

const addEvaluation = async (req, res, next) => {
    const eval = req.body.eval;
    try {
        await evaluationRepository.createEvaluation(eval)
        return res.send("success to create!")
    } catch (e) {
        console.error(e)
        res.status(500).send("failed to create!")
    }
}

const getEvaluation = async (req, res, next) => {
    const xchainId = parseInt(req.params.xchainId);
    const evaluation = await evaluationRepository.getEvaluation(xchainId)
    return res.send(evaluation)
}

module.exports = {
    addEvaluation,
    getEvaluation
}