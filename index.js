const express = require('express')
const bodyParser = require('body-parser')
const dbqueries = require('./dbqueries')
const app = express()

app.use(express.static('public'))
app.use(bodyParser.json)
/*
app.post('/createEvent', (req,res) => {
  console.log('creating event...')
  dbqueries.createEvent({
    gid: req.body.gid,
    time: req.body.time,
    date: req.body.date,
    location: req.body.location,
    message: req.body.message,
    singles: req.body.singles,
    couples: req.body.couples
  })
  .then(() => res.sendStatus(200))
})
*/

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

app.listen(3000, ()=> console.log('Server running on port 3000'))
