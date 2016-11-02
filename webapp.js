import express from 'express'
var app = express()
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Contact from '../app/models/contact'

mongoose.connect('localhost:27017/mern-stack-starter')

// configure POST data
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// set port
var port = process.env.PORT || 3000

// instance of the express router
var router = express.Router()

const root = `${__dirname}/public`
app.use(express.static(root))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// test route defined on the root
router.get('/', function (req, res) {
  res.json({ message: 'welcome' })
})

// on routes that end in /contact
router.route('/contacts')

  // create a bear POST function
  .post(function (req, res) {
    // create new instance of Bear model
    var contact = new Contact()
    // set new models name to name that came in on the request
    contact.name = req.body.name
    // save bear and check for errors;
    contact.save(function (err) {
      if (err) {
        res.send(err)
      }

      res.json({ message: contact.name +' Contact Created! id is ' + contact._id })
    })
  })

  // GET all the bears /api/bears
  .get(function (req, res) {
    Contact.find(function (err, contacts) {
      if (err) {
        res.send(err)
      }

      res.json(contacts)
    })
  })

// all of our routes, defined above, will be prefixed with /api
app.use('/api', router)

// START the server
app.listen(port)
console.log('Listening on port '+ port)
