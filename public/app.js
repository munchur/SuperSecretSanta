//take the values from the inputs in the form section
//then send them to the database
const createEvent = document.querySelector('.CreateEvent')
createEvent.addEventListener('submit', (e) => {
  console.log('starting in app.js')
  e.preventDefault()
  const time = createEvent.querySelector('.time').value
  const date = createEvent.querySelector('.date').value
  const location = createEvent.querySelector('.location').value
  const message = createEvent.querySelector('.message').value
  const singles = createEvent.querySelector('.singlesValue').value
  const couples = createEvent.querySelector('.couplesValue').value
  console.log(time, date, location, message, singles, couples)
  post('/CreateEvent', {time, date, location, message, singles, couples})
})

//used to send data to server to create new entries
//make a string that has the requirements
function post(path, data){
  console.log('post enter')
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
