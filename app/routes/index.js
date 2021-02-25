const router = require('express').Router();

router.get('/', (req, res) => {
  // Initial State
  res.render('list', {});
});

module.exports = router;
