//take the values from the inputs in the form section
//then send them to the database
const createEvent = document.querySelector('.CreateEvent')
createEvent.addEventListener('submit', (err) => {
  console.log('starting in app.js')
  err.preventDefault()
  const time = createEvent.querySelector('.time').value
  const date = createEvent.querySelector('.date').value
  const location = createEvent.querySelector('.location').value
  const message = createEvent.querySelector('.message').value
  const singles = createEvent.querySelector('.singlesValue').value
  const couples = createEvent.querySelector('.couplesValue').value
  console.log(time, date, location, message, singles, couples)
  //post('/CreateEvent', {time, date, location, message, singles, couples})
//    .then(({status})=>{
//      if(status === 200) window.location.href = '/CreateEvent'
//      else alert('there was an error, please try again.')
//    })
})

//used to send data to server to create new entries
//make a string that has the requirements
function post(path, data){
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}


//make sure that the user doesn't input less than 5 people
function validateGroupTotal(form){
  //form returns a string orginally
  var singles = parseInt(form['singlesValue'].value)
  var couples = parseInt(form['couplesValue'].value)
  if((singles+(couples*2)) < 5){
      alert("Can't have less than 5 people.")
      return false
  }
}
