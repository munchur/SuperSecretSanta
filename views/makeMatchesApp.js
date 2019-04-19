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

  //add singText and coupText children
  for(i=0;i<singleValue;i++){
    //create a text node
    singText.appendChild(document.createTextNode('Single '+(i+1)+' name'))
    //create input create by creating the input element then set it
    var input = document.createElement('input')
    input.type = 'text'
    input.name = 'single'+i
    singText.appendChild(input)
    singText.appendChild(document.createElement('br'))
  }

  for(i=0;i<coupleValue;i++){
    //create a text node
    coupText.appendChild(document.createTextNode('Couple '+(i+1)+' name'))
    //create input create by creating the input element then set it
    var input = document.createElement('input')
    input.type = 'text'
    input.name = 'single'+i
    coupText.appendChild(input)
    coupText.appendChild(document.createElement('br'))
  }

  //add singtext and coupText to the parent mainElement
  mainElement.appendChild(singText)
  mainElement.appendChild(coupText)
}
