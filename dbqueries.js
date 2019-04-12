const knex = require('knex')(require('./knexfile.js'))
const generateID = require('./generateID.js')
module.exports = {
  //creates new resource
  createEvent({time, date, location, message, singles, couples}){
    console.log('in dbqueries...')
    return knex('basic_info').insert({
      groupID: (singles*couples*44),
      time: time,
      date: date,
      location: location,
      message: message,
      singles: singles,
      couples: couples})
  }
}

//looks up a resource if there is a match
function lookUpID(){
  console.log('making id')
  var id = generateID.genID()

  console.log(query)
  return id;
}
