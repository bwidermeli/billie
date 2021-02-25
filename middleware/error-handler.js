module.exports = (err, req, res, next) => {
  console.error(err);
  res.render('error', {});
};
