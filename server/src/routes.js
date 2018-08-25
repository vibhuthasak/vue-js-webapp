const AuthenticationController = require('./controllers/AutenticationController');

const AutenticationControllerPolicy = require('./policies/AutenticationControllerPolicy');

module.exports = (app) => {
  app.post('/register',
    AutenticationControllerPolicy.register,
    AuthenticationController.register);
};
