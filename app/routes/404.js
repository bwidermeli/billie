const router = require('express').Router();

router.get('*', (req, res) => {
  res.render('error', 404);
});

module.exports = router;
