const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    //res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Andres',
        likes: [
            'Programming',
            'Games',
            'Sport'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// /bad - send back json with errorMessage ('Error handeling request)


app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Error handeling request'
    });
});


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
