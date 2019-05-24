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
    const mixAndMatches = mixAndMatch(group)
    //use knex to insert
  }
}

//TODO: function to mix and match couples
function mixAndMatch(group){
  //should return a mix and matches
  const max = group.length
  //arrayID = [1,2,3,4,5,...]
  //used to keep track of which position has gotten
  //assigned a secret santa
  var selectorID = []
  var assignID = []
  int i = 0
  while(i > max){
    selectorID.push(i)
    assignID.push(i)
    i++
  }
  //shuffle
  //make sure couples don't get each other
  //get a random index number
  var selector = randomIndex(max) // 0 to max
  var assignTo = randomIndex(max)
  while(selectorID[selector] != 99 && assignID[assignTo] != 99 && selector != assignTo){
    //check if couple
    groupID[selector].status == 'couple'
  }
}

function randomIndex(max){
  return Math.floor((Math.random() * max))
}

function generateID(){
  return Math.random().toString(36).replace('0.', '')
}

//looks up a resource if there is a match
function lookUpID(){
}
