//load the values from sessionStorage and help add input children to
//the form id 'container' in makeMatches.html
function loadValues(){
  const singleValue = sessionStorage.getItem('singleValue')
  const coupleValue = sessionStorage.getItem('coupleValue')

  //this should be the <form>
  var mainElement = document.getElementById('container')

  //add title: singles and add to mainElement
  var singText = document.createTextNode('Singles Information\n')
  //add title: couples and add to mainElement
  var coupText = document.createTextNode('Couples Information\n')

  //add single text node
  mainElement.appendChild(singText)
  mainElement.appendChild(document.createElement('br'))

  //add singles input fields
  for(i=0;i<singleValue;i++){
    //create a text node
    mainElement.appendChild(document.createTextNode('Single '+(i+1)+' name'))
    //create input create by creating the input element then set it
    var inputName = document.createElement('input')
    inputName.type = 'text'
    inputName.name = 'single'+i
    mainElement.appendChild(inputName)
    mainElement.appendChild(document.createTextNode('Email'))
    var inputEmail = document.createElement('input')
    inputEmail.type = 'email'
    inputEmail.name = 'single'+i+'email'
    mainElement.appendChild(inputEmail)
    mainElement.appendChild(document.createElement('br'))
  }

  //add couple text node
  mainElement.appendChild(coupText)
  mainElement.appendChild(document.createElement('br'))

  //add couples input fields
  for(i=0;i<coupleValue;i++){
    //create a text node
    mainElement.appendChild(document.createTextNode('Couple '+(i+1)+' name'))
    //create input create by creating the input element then set it
    var inputName = document.createElement('input')
    inputName.type = 'text'
    inputName.name = 'single'+i
    mainElement.appendChild(inputName)
    mainElement.appendChild(document.createTextNode('Email'))
    var inputEmail = document.createElement('input')
    inputEmail.type = 'email'
    inputEmail.name = 'couple'+i+'email'
    mainElement.appendChild(inputEmail)
    mainElement.appendChild(document.createElement('br'))
  }

  //add the submit button
  var submitButton = document.createElement('input')
  submitButton.type = 'submit'
  submitButton.value = 'submit'
  mainElement.appendChild(submitButton)

}
