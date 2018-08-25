module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'vue-js-webapp',
    user: process.env.DB_USER || 'vue-js-webapp',
    password: process.env.DB_PASSWORD || 'vue-js-webapp',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './vue-js-webapp.sqlite',
    },
  },
};
