const knex = require('knex')require('./knexfile.js')
module.exports = {
  createEvent({gid, time, date, location, message, singles, couples}){
    return knex('SSSmysqldb').insert({
      gid, time, date, location, message, singles, couples})
  }
}
