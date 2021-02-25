const { NODE_ENV } = process.env;

module.exports = {
  getEnvironment: () => NODE_ENV || 'development',
  isDevelopment: () => (NODE_ENV === undefined || NODE_ENV !== 'production'),
};
