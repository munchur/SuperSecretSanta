const knex = require('knex')(require('./knexfile.js'))
module.exports = {
  //creates new resource
  createEvent({time, date, location, message, singles, couples}){
    console.log('in dbqueries...')
    return knex('basic_info').insert({
//      groupID: (singles*couples*44),
      time: time,
      date: date,
      location: location,
      message: message,
      singles: singles,
      couples: couples})
  },

  makeMatches({singleData, coupleData}){
    console.log('in makeMatches...')
    const mixAndMatches = mixAndMatch(singleData, coupleData)
    //use knex to insert
  }
}

//TODO: function to mix and match couples
function mixAndMatch({singleData, coupleData}){
  //should return a mix and matches
}

function generateID(){
  return Math.random().toString(36).replace('0.', '')
}

//looks up a resource if there is a match
function lookUpID(){
  console.log('making id')
  var id = generateID.genID()

  console.log(query)
  return id;
}
