const notFoundMiddleware = (req, res) =>
  res.status(404).send('Route does not found');

export default notFoundMiddleware;
