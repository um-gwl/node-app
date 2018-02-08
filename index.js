const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

//middleware

app.use((req,res,next)=>{
  var now  = new Date().toString();
  var logString = `${now} method : '${req.method}' and url: '${req.url}' \n`;
  fs.appendFileSync('server.log',logString);
  next();
});

app.get('/',(req,res) => {
  res.render('home.hbs',{
    pageTitle : 'Home Page',
    author : 'Ujjal',
    pageContent : 'This is home page.The content of the homepage is for landing page'
  });
});


app.get('/about',(req,res) => {
  res.render('about.hbs',{
    pageTitle : 'About Page',
    author : 'Ujjal',
    pageContent : 'This is About page.The content of the about is for information about the site'
  });
});

app.get('/bad',(req,res) => {
  res.send('bad request');
});

app.listen(3000,() => { console.log('server is up on port 3000');});
