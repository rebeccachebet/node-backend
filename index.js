//creating hello wordld web app

console.log('hello world')
//express diplays content on the web browser, we use keyword 'require' to get packages(express) that we require to use.
const express= require('express');
//calling the app using express to display on the web browser
const app=express();
//listen method provided by express creates a server where browsers can connect/listen,with two arguments.
app.listen(3000,function(){
    console.log('listening on 3000')
})
//the read operation is performed by browsers whenever you visit a web page,
//browsers send a get request to the server to perform a read operation
//the reason we see the cannot get error is beause we havent sent anything back to he browser from our server

//get method for handling requests using express
//app.get(path,callback)
//the first argument is the path of the get request.its anything that comes after your domain name.the pathargument is */*
//the second argument is the call back function that tells the server when the path is matvhed.it takes two arguments;a request object and a response object
app.get('/',function(req,res){
    res.send('Hello World')
}
)
