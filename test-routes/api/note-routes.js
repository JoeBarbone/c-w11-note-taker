const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send("yo, dog's a howlin")
})

router.get('/best', (req, res) => {
    res.send("yo, dog's a howling")
})

module.exports = router