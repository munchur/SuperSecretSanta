const saveMatches = document.querySelector('.makeMatches')
saveMatches.addEventListener('submit', function(err){
  console.log('saving matches.')
  const singleValue = sessionStorage.getItem('singleValue')
  const coupleValue = sessionStorage.getItem('coupleValue') //already doubled
  err.preventDefault()

  /* HOW DATA SHOULD LOOK
  [
  {time:,
  date:
  location:
  message:
  },
  {
    name:,
    email:
  },
  //repeat previous object
  ]
  */
  var data = []

  //position 0 should be the time, date, location, and message
  data.push({
    time: sessionStorage.getItem('time'),
    date: sessionStorage.getItem('date'),
    location: sessionStorage.getItem('location'),
    message: sessionStorage.getItem('message')
  })

  //value number will start at 1 and end at the same number as
  //single/couple value
  //loop to get values of singles and couples and put them into objects
  //that will be stored into an array called data
  if(singleValue != 0){
    //value names are single(number) for name inputs
    //value names are single(number)email for email inputs
    for(i=1; i<=singleValue; i++){
      if(saveMatches.querySelector('.single'+i).value){
        const name = saveMatches.querySelector('.single'+i).value
        const email = saveMatches.querySelector('.single'+i+'email').value
        console.log(name, email)
        data.push({name: name, email: email})
      }
    }
  }
  if(coupleValue != 0){
    //value names are couple(number) for name inputs
    //value names are couple(number)email for email inputs
    for(i=1; i<=coupleValue; i++){
      if(saveMatches.querySelector('.couple'+i).value){
        const name = saveMatches.querySelector('.couple'+i).value
        const email = saveMatches.querySelector('.couple'+i+'email').value
        data.push({name: name, email:email})
      }
    }
  }

  //post('/makeMatches', data)
  window.location.href = '/ThankYou'
})

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


//load the values from sessionStorage and help add input children to
//the form id 'container' in makeMatches.html
function loadValues(){
  const singleValue = sessionStorage.getItem('singleValue')
  const coupleValue = sessionStorage.getItem('coupleValue') //already doubled

  //this should be the <form>
  var mainElement = document.getElementById('container')

  //add title: singles and add to mainElement
  var singText = document.createTextNode('Singles Information\n')
  //add title: couples and add to mainElement
  var coupText = document.createTextNode('Couples Information\n')

  if(singleValue != 0){
    //add single text node
    mainElement.appendChild(singText)
    mainElement.appendChild(document.createElement('br'))

    //value number will start at 1 and end at the same number as
    //single/couple value
    //add singles input fields
    for(i=1;i<=singleValue;i++){
      //create a text node
      mainElement.appendChild(document.createTextNode('Single '+i+' name'))
      //create input create by creating the input element then set it
      var inputName = document.createElement('input')
      inputName.type = 'text'
      inputName.name = 'single'+i
      inputName.className = 'single'+i
      mainElement.appendChild(inputName)
      mainElement.appendChild(document.createTextNode('Email'))
      var inputEmail = document.createElement('input')
      inputEmail.type = 'email'
      inputEmail.name = 'single'+i+'email'
      inputEmail.className = 'single'+i+'email'
      mainElement.appendChild(inputEmail)
      mainElement.appendChild(document.createElement('br'))
    }
  }

  if(coupleValue != 0){
    //add couple text node
    mainElement.appendChild(coupText)
    mainElement.appendChild(document.createElement('br'))

    //add couples input fields
    for(i=1;i<=coupleValue;i++){
      //create a text node
      mainElement.appendChild(document.createTextNode('Couple '+i+' name'))
      //create input create by creating the input element then set it
      var inputName = document.createElement('input')
      inputName.type = 'text'
      inputName.name = 'couple'+i
      inputName.className = 'couple'+i
      mainElement.appendChild(inputName)
      mainElement.appendChild(document.createTextNode('Email'))
      var inputEmail = document.createElement('input')
      inputEmail.type = 'email'
      inputEmail.name = 'couple'+i+'email'
      inputEmail.className = 'couple'+i+'email'
      mainElement.appendChild(inputEmail)
      mainElement.appendChild(document.createElement('br'))
    }
  }

  //add the submit button
  var submitButton = document.createElement('input')
  submitButton.type = 'submit'
  submitButton.value = 'submit'
  mainElement.appendChild(submitButton)
}
