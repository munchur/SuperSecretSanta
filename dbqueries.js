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

  //selectorID is for a list of people who has not have been
  //assigned to a person
  var selectorID = []
  //assignID is a list for people who does not have a secret santa
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
  var selector = 0
  var assignTo = 0
  do{
    selector = randomIndex(max) // 0 to max
    assignTo = randomIndex(max)
  }while(selector == assignTo)//keep looping until theyre different
  //check if theyre the same couple
  while(group[selector].status == group[assignTo].status){
    selector = randomIndex(max) // 0 to max
    assignTo = randomIndex(max)
  }

  //then assign
  group[selector].assignedTo = group[assignedTo]
  
  //remove using splice, remove at that position and only delete one
  selector.splice(selector,1)
  assignID.splice(assignTo,1)
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
