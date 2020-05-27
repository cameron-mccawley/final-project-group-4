var path = require('path');
var express = require('express');
var app = express();

var port = 8000;

app.use(express.static('public'));

app.get('/index', function(req, res, next){
    res.status(200).sendFile(__dirname + '/public/index.html');
});

app.get('/gallery', function(req, res, next){
    res.status(200).sendFile(__dirname + '/public/galleryPage/gallery.html');
});

app.get('*', function(req, res, next){
    res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, function(err){
    if(err){
        throw err;
    }
    console.log("Server listening on port", port);
});