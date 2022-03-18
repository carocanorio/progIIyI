const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/todos', function(req, res) {
  return res.send('Lista de todos los alumnos');
});

router.get('/encontrar/:id?', function(req, res) {
    return res.send('Ir a buscar alumnos con el id' +req.params.id);
  });

module.exports = router;