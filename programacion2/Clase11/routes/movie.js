const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

/* GET users listing. */
router.get('/', movieController.findAll);

router.get('/id/:id', movieController.show);

router.get('/busqueda/', movieController.showOne);

module.exports = router;