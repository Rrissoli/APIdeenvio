const express = require('express')
const router = express()
const instacia = require('./axios')
router.post('/env', async (req, res) => {
    const { id, message } = req.body
    try {
        const mensagem = await instacia.post('', { id, message });
        return res.json(mensagem.data)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

module.exports = router