const express = require('express');
const app = express();


app.get('/', function(req,res) {
    console.log(req);
    res.send('Root URL');
});

app.get('/upload', function(req,res) {
    console.log(req);
    res.send('Upload URL');
});

app.listen(3000, () => console.log('Server running'))

