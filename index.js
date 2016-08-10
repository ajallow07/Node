//handling html layouts

const path = require('path')
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (request, response) => {
  response.render('home', {
    name: 'Alieu'
  })
})
app.listen(8000)


//Using middlewares
//app.use is used to immplement middlewares
/*const express = require('express')
const app = express()

app.use((request, response, next) => {
  console.log(request.headers)
  next()
})

app.use((request, response, next) => {
  request.chance = Math.random()
  next()
})

app.get('/', (request, response) => {
  response.json({
    chance: request.chance
  })
})

app.listen(8080)
*/

//using express as web server
/*
const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
    if (err){
       return console.log('Something bad happened');
    }
    console.log('Server is listening to port ', port);
});
*/
//Http server in Node.js
/*
const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello Node.js server!')
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err){
       return console.log('Something bad happened');
    }

    console.log('Server is listening to port ', port);
})
*/
// requiring index file app
//require('./app/index')
/*
const async = require('async')

const _  = require('lodash')

const dic = _.assign({'a':1},{'b':2},{'c':3})


//Synchronous programming in Node.js
const fs = require('fs')
let content
try{
   content = fs.readFileSync('data2.txt', 'utf8')
   //console.log(content);
}
catch(err){
    //console.log('Error:', err);
}

//Asynchronous programming
fs.readFile('data2.txt', 'utf8', function(err, content){
    if (err){
      return console.log(err);
    }
  //  console.log('This is the file content:\n', content);
})
//console.log('I expect this to be output before the content')

//using async in javaScript
/*
let st = async.parallel(['data2.txt', 'data.txt'], fs.stat, function (err, results) {
    // results is now an array of stats for each file
})
console.log(st)
*/
/*
//using The Promise
function stats (file) {
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, data) => {
      if (err) {
        return reject (err)
      }
      resolve(data)
    })
  })
}

Promise.all([
  stats('data.txt'),
  stats('data2.txt')
])
.then((data) => console.log(data))
.catch((err) => console.log(err))
*/
