# mern-stack-starter

##Setup MongDB
1. Download Mongo
1. create data folder in app
1. run: mongod --dbpath c:\<repo>\data
1. npm install mongoose
1. include in the main node file:
  1. var mongoose = require('mongoose');
  1. mongoose.connect('localhost:27017/node-tut-rest');

##Run App

get the webapp.js converted 
* npm run babel 

start node server
* npm run node

start react app
*npm run dev

start mongo
* Navigate to Mongo installation bin folder
* mongod --dbpath c:\<repo>\data

app at http://localhost:8080/
