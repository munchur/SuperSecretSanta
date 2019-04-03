var propertiesReader = require('properties-reader')
var properties = propertiesReader('/resources/mysql.ini')

module.exports = {
  client: 'mysql',
  connection: {
    host: properties.get('database.ep'),
    user: properties.get('database.user'),
    password: properties.get('database.password'),
    database: 'SSSmysqldb'
  }
}
