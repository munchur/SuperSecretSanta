const express = require('express')
const bodyParser = require('body-parser')
const dbqueries = require('./dbqueries')
const app = express()

app.use(express.static('public'))
app.use(bodyParser.json)
app.post('/createEvent', (req,res) => {
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

app.listen(3000, ()=> console.log('Server running on port 3000'))
