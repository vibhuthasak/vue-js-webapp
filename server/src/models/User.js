// const Promise = require('bluebird');
// const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
const bcrypt = require('bcrypt');

function hashPassword(user, options) {
  const SALT_FACTOR = 8;

  if (!user.changed('password')) {
    return;
  }

  const hashValue = bcrypt.genSalt(SALT_FACTOR)
    .then(salt => bcrypt.hash(user.password, salt, null))
    .then((hash) => { user.setDataValue('password', hash); });

  return hashValue;
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  }, {
    hooks: {
      beforeSave: hashPassword,
    },
  });

  User.prototype.comparePassword = function compare(credPassword) {
    return bcrypt.compare(credPassword, this.password);
  };

  return User;
};
