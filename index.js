const express = require('express')
const bodyParser = require('body-parser')
const dbqueries = require('./dbqueries')
const path = require('path')
const app = express()
const router = express.Router()

//route middleware: happens with every request
router.use(function(req, res, next){
  console.log(req.method, req.url)
  next()
})

//home page route
router.get('/', function(req, res){
  res.send('At home page.')
})


//regular express that uses router
//app.use(express.static('public'))
app.use('/', router)
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

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
  res.redirect('/makeMatches')
})

app.get('/makeMatches', function(req, res){
  res.render('makeMatches.html')
})

/*
var propertiesReader = require('properties-reader')
var properties = propertiesReader('./resources/mysql.ini')
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: properties.get('database.ep'),
  user: properties.get('database.user'),
  password: properties.get('database.password'),
  database: 'SSSmysqldb',
  port: 3306
})
connection.connect(function(err){
  //if(err){console.log('did not connect')}
  if(err) throw err
  else{console.log("db connected")}
})
*/

//start server
app.listen(3000, ()=> console.log('Server running on port 3000'))
