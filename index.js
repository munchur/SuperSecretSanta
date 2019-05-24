const express = require('express')
const bodyParser = require('body-parser')
const dbqueries = require('./dbqueries')
//const path = require('path')
const app = express()
//const router = express.Router()
//const engines = require('consolidate')

/*
//router usage starts here
//route middleware: happens with every request
router.use(function(req, res, next){
  console.log(req.method, req.url)
  next()
})

//home page route
router.get('/', function(req, res){
  console.log('routers home')
  res.sendFile(path.join(__dirname + '/public'))
})


router.get('/CreateEvent', function(req, res){
  console.log('routers createEvent')
  res.sendFile(path.join(__dirname + '/public/makeMatches.html'))
})
*/

//express usage starts here
app.use(express.static(__dirname + '/views'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//listens for a post request /CreateEvent
//MAYBE DO: app.route to do post and get requests
app.get('/MakeMatches', function(req, res){
  console.log('get /MakeMatches')
  res.sendFile(__dirname + '/views/makeMatches.html')
})

app.get('/ThankYou', function(req, res){
  console.log('get /ThankYou')
  res.sendFile(__dirname + '/views/thankyou.html')
})

app.get('/', function(req,res){
  res.sendFile(__dirname + '/views/index.html')
})


app.post('/CreateEvent', function(req, res){
  //TODO: later on add express-validator to help validate data
  if(!req.body) return res.sendStatus(400)
  console.log('saving event info')
  var groupID = dbqueries.createEvent({ //needs to return unique id
    time: req.body.time,
    date: req.body.date,
    location: req.body.location,
    message: req.body.message,
    singleValue: req.body.singleValue,
    coupleValue: req.body.coupleValue
  })
  sValue = req.body.singlesValue
  cValue = req.body.coupleValue
  group = []
  if(sValue != 0){
    for(i=1; i<=sValue; ++i){
      //console.log(req.body['single'+i] + " " + req.body['single'+i+'email'])
      group.push({
        'single'+i : req.body['single'+i],
        'single'+i+'email' : req.body['single'+i+'email'],
        'status' : 'single'
      })
    }
  }
  if(cValue != 0){
    for(i=1;i<=cValue;++i){
      //console.log(req.body['couple'+i] + " " + req.body['couple'+i+'email'])
      group.push({
        'couple'+i : req.body['couple'+i+'a'],
        'couple'+i+'a'+'email' : req.body['couple'+i+'a'+'email'],
        'status' : 'couple'+i
      })
      group.push({
        'couple'+i : req.body['couple'+i+'b'],
        'couple'+i+'b'+'email' : req.body['couple'+i+'b'+'email'],
        'status' : 'couple'+i
      })
    }
  }
  //need another function to insert people
  dbqueries.saveGroup(group, groupID)
  //.then(() => res.sendStatus(200))
  res.sendStatus(200)
})

//start server
app.listen(3000, ()=> console.log('Server running on port 3000'))
