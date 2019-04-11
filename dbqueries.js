const knex = require('knex')(require('./knexfile.js'))
const generateID = require('./generateID.js')
module.exports = {
  //creates new resource
  createEvent({time, date, location, message, singles, couples}){
    console.log('in dbqueries...')
    return knex('basic_info').insert({
      groupID: generateID.genID(),
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
