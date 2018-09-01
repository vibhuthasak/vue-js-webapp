const jwt = require('jsonwebtoken');
const { User } = require('../models');
const config = require('../config/config');

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (err) {
      res.status(400).send({
        error: 'Email is already in use',
      });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(403).send({
          error: 'User login information is incorrect',
        });
      }

      // const isValidpassword = (password === user.password);
      const isValidpassword = await user.comparePassword(password);

      if (!isValidpassword) {
        return res.status(403).send({
          error: 'Password is incorrect',
        });
      }

      const UserJson = user.toJSON();
      res.status(200).send({
        user: UserJson,
        token: jwtSignUser(UserJson),
      });
    } catch (err) {
      res.status(500).send({
        error: 'Error occured',
      });
    }
  },
};
