const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


// basic express middleware 
app.use((req, res, next) => { // next exist so you can tell express when your middle ware function is done
    // next(); >>>>  only way the app will continue to run
    var now = new Date().toString();
    var log = console.log(`${now}: ${req.method} ${req.url}`);

    console.log(log);
    fs.appendFile('server.log', log + `\n`, (err) => {
        if(err){
            console.log('Unable to append to server.log.');
        };
    });
    next();
});

/*
When you go to /help.html you will still get that page
You won't get the maintenance page. 
That is because middleware is excecuted in the order you call
app.use
*/


// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public')); // This is a line of express middleware. 


app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to dolois page'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'Projects'
    });
});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

// render home.hbs



// /bad - send back json with errorMessage ('Error handeling request)


app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Error handeling request'
    });
});


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
