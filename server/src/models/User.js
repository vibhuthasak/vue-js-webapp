// const Promise = require('bluebird');
// const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  }, {
    hooks: {
      beforeSave: (user, options) => {
        const SALT_FACTOR = 8;
        if (!user.changed('password')) {
          return;
        }
        // bcrypt.genSalt(SALT_FACTOR)
        //   .then(salt => bcrypt.hash(user.password, salt, null))
        //   .then((hash) => { user.setDataValue('password', hash); })
        //   .catch((err) => { console.log(err); });
        const hashValue = bcrypt.genSalt(SALT_FACTOR)
          .then(salt => bcrypt.hash(user.password, salt, null))
          .then((hash) => { user.setDataValue('password', hash); })
          .catch((err) => { console.log(err); });
        return hashValue;
      },
    },
  });

  User.prototype.comparePassword = function compare(credPassword) {
    return bcrypt.compare(credPassword, this.password);
  };

  return User;
};
