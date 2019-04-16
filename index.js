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
//app.use(express.static(__dirname + '/public/index.html'))
//app.use('/', router)
//app.engine('html', engines.mustache)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//listens for a post request /CreateEvent
//MAYBE DO: app.route to do post and get requests
app.get('/CreateEvent', function(req, res){
  console.log('get /createevent')
  res.sendFile(__dirname + '/views/makeMatches.html')
})

app.get('/', function(req,res){
  res.sendFile(__dirname + '/views/index.html')
})

app.post('/CreateEvent', function(req,res){
  //if emtpy return error
  if(!req.body) return res.sendStatus(400)
  //else send event info to db
  console.log('creating event...')
  dbqueries.createEvent({
    time: req.body.time,
    date: req.body.date,
    location: req.body.location,
    message: req.body.message,
    singles: req.body.singles,
    couples: req.body.couples
  })
  .then(() => res.sendStatus(200))
  //.then(() => res.redirect('/CreateEvent'))
})

//start server
app.listen(3000, ()=> console.log('Server running on port 3000'))
