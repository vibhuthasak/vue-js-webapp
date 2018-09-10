const path = require('path');

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'vue-js-webapp',
    user: process.env.DB_USER || 'vue-js-webapp',
    password: process.env.DB_PASSWORD || 'vue-js-webapp',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../vue-js-webapp.sqlite'),
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'jwt_vue_secret',
  },
};
