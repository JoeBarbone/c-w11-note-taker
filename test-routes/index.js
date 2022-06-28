const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// router.get('/notes')
// router.get('*')

module.exports = router