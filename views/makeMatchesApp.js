//post request for the form that the user details who
//will be in their secret santa group
function postMatches(form){
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      //window.href.location = '/ThankYou'
      alert("Thankyou")
    }
  }
  xhttp.open(form.method, form.action, true)
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhttp.send(makeUrlEncoded(form))
  return false
}

//takes all the information for the secret santa event and string them into
//a urlencoded string to be passed into the post request
function makeUrlEncoded(form){
  //urlencoded format is key=value&key=value&...
  //put all of the information into an object to put in a (key,value) pair then
  //will then turn into a string
  var dataPairs = []
  var urlEncodedData = ''
  const singleValue = sessionStorage.getItem('singleValue')
  const coupleValue = sessionStorage.getItem('coupleValue')
  //information from previous form push into the dataPairs object
  dataPairs.push('time=' + sessionStorage.getItem('time'))
  dataPairs.push('date=' + sessionStorage.getItem('date'))
  dataPairs.push('location=' + sessionStorage.getItem('location'))
  dataPairs.push('message=' + sessionStorage.getItem('message'))
  dataPairs.push('singleValue=' + singleValue)
  dataPairs.push('coupleValue=' + coupleValue)
  //loop through the form to get name and value
  if(singleValue != 0){
    for(i=1; i<= singleValue; ++i){
      dataPairs.push(encodeURIComponent('single'+i) + '=' + encodeURIComponent(form['single'+i].value))
      dataPairs.push(encodeURIComponent('single'+i+'email') + '=' + encodeURIComponent(form['single'+i+'email'].value))
    }
  }
  if(coupleValue != 0){
    for(i=1; i<= coupleValue; ++i){
      dataPairs.push(encodeURIComponent('couple'+i) + '=' + encodeURIComponent(form['couple'+i].value))
      dataPairs.push(encodeURIComponent('couple'+i+'email') + '=' + encodeURIComponent(form['couple'+i+'email'].value))
    }
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
//end
}
