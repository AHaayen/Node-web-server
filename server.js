const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Welcome to my page'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});


// render home.hbs



// /bad - send back json with errorMessage ('Error handeling request)


app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Error handeling request'
    });
});


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
