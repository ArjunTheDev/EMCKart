require('dotenv').config();

module.exports = {
    url: 'mongodb://'+ process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + 
        '@localhost:27017/' + process.env.DB_NAME
  };