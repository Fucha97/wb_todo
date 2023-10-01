// eslint-disable-next-line
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api/v1',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    }),
  );

  app.use(
    '/I18N',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    }),
  );
};
