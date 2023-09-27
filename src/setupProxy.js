// eslint-disable-next-line
const {createProxyMiddleware} = require('http-proxy-middleware');

const WB_TOKEN = '';
const X_SUPPLIER_ID = '';
const X_USER_ID = '';

const headersDev = {
  cookie: `x-supplier-id=${X_SUPPLIER_ID}; WBToken=${WB_TOKEN}`,
  'X-User-Id': X_USER_ID,
  'X-Resource-Id': 'suppliers-portal-ru',
};

module.exports = (app) => {
  app.use(
    '/I18N',
    createProxyMiddleware({
      target: 'http://i18n.suppliers-portal-ru.svc.k8s.stage-dp',
      // target: 'http://127.0.0.1:8081',
      changeOrigin: true,
      headers: headersDev,
    }),
  );
};
