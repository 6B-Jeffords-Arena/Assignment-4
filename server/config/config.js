//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://jeffordsarena:password123@ds047365.mongolab.com:47365/jeffordsarena',
  }, 
  googleMaps: {
    key: ''
  },
  port: 8080
};