const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('public'))
app.use(bodyp)
app.listen(3000, ()=> console.log('Server running on port 3000'))
