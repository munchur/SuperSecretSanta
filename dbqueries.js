const knex = require('knex')(require('./knexfile.js'))
module.exports = {
  //creates new resource
  createEvent({time, date, location, message, singles, couples}){
    var groupID = generateID
    knex('basic_info').insert({
      groupID : groupID,
      time: time,
      date: date,
      location: location,
      message: message,
      singles: singles,
      couples: couples})
    return groupID
  },

  saveGroup(group, groupID){
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
