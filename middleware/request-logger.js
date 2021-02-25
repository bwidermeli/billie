const logger = require('winston-this')('request-logger');

module.exports = (req, res, next) => {
  //Do not log static urls
  const regex = /^\/(css|js|fonts|images)\//;
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  if (!regex.test(req.url)) {
    logger.debug(`${ip} - [${req.method}][${req.device.type.toUpperCase()}] ${req.url}`);
  }

  next();
};