const router = require('express').Router();

const notesRoutes = require('./note-routes.js');

router.use('/notes', notesRoutes);
// router.get('/notes')
// router.get('*')

module.exports = router