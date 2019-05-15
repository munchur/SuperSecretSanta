/*
const saveMatches = document.querySelector('.makeMatches')
saveMatches.addEventListener('submit', function(err){

  post('/makeMatches', data)
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
*/


function postMatches(form){
  /*
  let formData = new FormData(form)
  for(var pair of formData.entries()){
    console.log("key: "+ pair[0] + " value: " + pair[1])
  }
  */
  var urlEncodedData = makeUrlEncoded(form)

  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      //window.href.location = '/ThankYou'
      alert("Thankyou")
    }
  }
  xhttp.open(form.method, form.action, true)
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  //xhttp.send(new FormData(form))
  xhttp.send(makeUrlEncoded(form))
  return false
}

function makeUrlEncoded(form){
  //urlencoded format is key=value&key=value&...
  var dataPairs = []
  var urlEncodedData = ''
  const singleValue = sessionStorage.getItem('singleValue')
  const coupleValue = sessionStorage.getItem('coupleValue')
  dataPairs.push('time=' + sessionStorage.getItem('time'))
  dataPairs.push('date=' + sessionStorage.getItem('date'))
  dataPairs.push('location=' + sessionStorage.getItem('location'))
  dataPairs.push('message=' + sessionStorage.getItem('message'))
  dataPairs.push('singleValue=' + singleValue)
  dataPairs.push('coupleValue=' + coupleValue)
  for(i=1; i<= singleValue; ++i){
    dataPairs.push(encodeURIComponent('single'+i) + '=' + encodeURIComponent(form['single'+i].value))
    dataPairs.push(encodeURIComponent('single'+i+'email') + '=' + encodeURIComponent(form['single'+i+'email'].value))
  }
  for(i=1; i<= coupleValue; ++i){
    dataPairs.push(encodeURIComponent('couple'+i) + '=' + encodeURIComponent(form['couple'+i].value))
    dataPairs.push(encodeURIComponent('couple'+i+'email') + '=' + encodeURIComponent(form['couple'+i+'email'].value))
  }
  //combine the pairs into a single string and replace
  urlEncodedData = dataPairs.join('&').replace(/%20/g, '+')
  //console.log(urlEncodedData)
  return urlEncodedData
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
  submitButton.value = 'Submit'
  mainElement.appendChild(submitButton)
/*
  //adding hidden input to have the values of time, date,
  //location, message, singlevalue, couplevalue
  //Using this method so these valus can be passed with the post request
  var time = document.createElement('input')
  time.type = 'hidden'
  time.name = 'time'
  time.setAttribute('value', sessionStorage.getItem('time'))
  var date = document.createElement('input')
  date.type = 'hidden'
  date.name = 'date'
  date.setAttribute('value', sessionStorage.getItem('date'))
  var location = document.createElement('input')
  location.type = 'hidden'
  location.name = 'location'
  location.setAttribute('value', sessionStorage.getItem('location'))
  var message = document.createElement('input')
  message.type = 'hidden'
  message.name = 'name'
  message.setAttribute('value', sessionStorage.getItem('message'))
  var single = document.createElement('input')
  single.type = 'hidden'
  single.name = 'singleValue'
  single.setAttribute('value', singleValue)
  var couple = document.createElement('input')
  couple.type = 'hidden'
  couple.name = 'coupleValue'
  couple.setAttribute('value', coupleValue)
  mainElement.appendChild(time)
  mainElement.appendChild(document.createElement('br'))
  mainElement.appendChild(date)
  mainElement.appendChild(document.createElement('br'))
  mainElement.appendChild(location)
  mainElement.appendChild(document.createElement('br'))
  mainElement.appendChild(message)
  mainElement.appendChild(document.createElement('br'))
  mainElement.appendChild(single)
  mainElement.appendChild(document.createElement('br'))
  mainElement.appendChild(couple)
  mainElement.appendChild(document.createElement('br'))
*/
//end
}


/*
console.log('saving matches.')
const singleValue = sessionStorage.getItem('singleValue')
const coupleValue = sessionStorage.getItem('coupleValue') //already doubled
err.preventDefault()

var data = []
var singleGroup = []
var coupleGroup = []

//position 0 should be the time, date, location, and message
data.push({
  time: sessionStorage.getItem('time'),
  date: sessionStorage.getItem('date'),
  location: sessionStorage.getItem('location'),
  message: sessionStorage.getItem('message'),
  singleValue: singleValue,
  coupleValue: coupleValue
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
      singleGroup.push({name: name, email: email})
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
      coupleGroup.push({name: name, email:email})
    }
  }

  //push couple and single array into data
  data.push(singleGroup)
  data.push(coupleGroup)
}
*/
