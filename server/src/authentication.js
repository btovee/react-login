const jwt = require('jsonwebtoken');
const { AUTH_EXPIRY_TIME, AUTH_SECRET } = require('./config');

const generateToken = user => {
  return jwt.sign({ user }, AUTH_SECRET, { expiresIn: AUTH_EXPIRY_TIME })
};

const verifyUser = (username, password) => {
  // Users would generally be checked in another way but this is here for sake of simplicity
  const userList = {
    jeff1967: 'hotdog',
    suefrank1234: 'lightbulb',
  };

  const users = {
    jeff1967: {
      name: 'Jeff Best',
      id: 1,
    },
    suefrank1234: {
      name: 'Sue Frank',
      id: 2,
    },
  };

  return userList[username] === password ? users[username] : null;
  
};

module.exports = {
  generateToken,
  verifyUser,
};
