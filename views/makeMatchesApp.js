const saveMatches = document.querySelector('.makeMatches')
saveMatches.addEventListener('submit', function(err){
  console.log('saving matches.')
  const singleValue = sessionStorage.getItem('singleValue')
  const coupleValue = sessionStorage.getItem('coupleValue') //already doubled
  err.preventDefault()
  //loop to get values of singles and couples
  var singleData = {}
  var coupleData = {}
  if(singleValue != 0){
    //value names are single(number) for name inputs
    //value names are single(number)email for email inputs
    for(i=0; i<singleValue+1; ++i){
      const name = saveMatches.querySelector('single'+i).value
      const email = saveMatches.querySelector('single'+i+'email').value
    }
  }
  if(coupleValue != 0){
    //value names are couple(number) for name inputs
    //value names are couple(number)email for email inputs
    const name = saveMatches.querySelector('couple'+i).value
    const email = saveMatches.querySelector('couple'+i+'email').value
  }
})


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


    //add singles input fields
    for(i=0;i<singleValue+1;i++){
      //create a text node
      mainElement.appendChild(document.createTextNode('Single '+(i+1)+' name'))
      //create input create by creating the input element then set it
      var inputName = document.createElement('input')
      inputName.type = 'text'
      inputName.name = 'single'+i
      inputName.class = 'single'+i
      mainElement.appendChild(inputName)
      mainElement.appendChild(document.createTextNode('Email'))
      var inputEmail = document.createElement('input')
      inputEmail.type = 'email'
      inputEmail.name = 'single'+i+'email'
      inputEmail.class = 'single'+i+'email'
      mainElement.appendChild(inputEmail)
      mainElement.appendChild(document.createElement('br'))
    }
  }

  if(coupleValue != 0){
    //add couple text node
    mainElement.appendChild(coupText)
    mainElement.appendChild(document.createElement('br'))

    //add couples input fields
    for(i=0;i<coupleValue+1;i++){
      //create a text node
      mainElement.appendChild(document.createTextNode('Couple '+i+' name'))
      //create input create by creating the input element then set it
      var inputName = document.createElement('input')
      inputName.type = 'text'
      inputName.name = 'single'+i
      inputName.class = 'single'+i
      mainElement.appendChild(inputName)
      mainElement.appendChild(document.createTextNode('Email'))
      var inputEmail = document.createElement('input')
      inputEmail.type = 'email'
      inputEmail.name = 'couple'+i+'email'
      inputEmail.class = 'couple'+i+'email'
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
