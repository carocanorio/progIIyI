const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/todos', function(req, res) {
  return res.send('respond with a resource');
});

module.exports = router;