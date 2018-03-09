var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//connect to database
mongoose.connect('mongodb://localhost:27017/blog')
 
mongoose.connection.on('open', function() {console.log('db connected')})

//models 
require('./models/User')
require('./models/Post')


var userController = require('./controllers/userControllers')
var postController = require('./controllers/postController')
	
//read	
app.get('/user', userController.getUsers)
//creat
app.post('/create-user', userController.createUser)
 //update
app.patch('/update-user/:id', userController.updateUser)
//delete
app.delete('/delete-user/:id', userController.deleteUser)

app.get('/post/:id', postController.getPost)

app.post('/new-post', postController.newPost)

app.listen(8080)
console.log('server is running')