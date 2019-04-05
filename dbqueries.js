const knex = require('knex')(require('./knexfile.js'))
module.exports = {
  //creates new resource
  createEvent({gid, time, date, location, message, singles, couples}){
    console.log('gid: ${gid}, time: ${time}, date: ${date}, location: ${location}, message: ${message}, singles: ${singles}, couples: ${couples}')
    return knex('SSSmysqldb').insert({
      groupID: gid,
      time: time,
      date: date,
      location: location,
      message: message,
      singles: singles,
      couples: couples})
  }
  //looks up a resource if there is a match
  //lookUpID(){}
}
