import express from 'express'
import bodyParser from 'body-parser'

var mongoose = require('mongoose')
mongoose.connect('localhost:27017/node-tut-rest')

var userList = [
  { id: 1, user: 'bob' },
  { id: 2, user: 'sue' }
]

var app = express()
app.use(bodyParser.json())
const root = `${__dirname}/public`
app.use(express.static(root))

var server = app.listen(3000, function () {
  var port = server.address().port
  console.log('example app listening on port: ' + port)
})

app.get('/', function (req, res) {
  res.send('Hello World, express here')
})

// This responds a GET request for the /list_user page.
app.get('/api/list_user', function (req, res) {
  console.log('Got a GET request for /list_user')
  res.status(200).send(JSON.stringify(userList))
})
