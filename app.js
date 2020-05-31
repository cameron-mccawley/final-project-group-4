var path = require('path');
var express = require('express');
var exprhb = require('express-handlebars');
var data = require('./data.json');

var app = express();

var port = 8000;

app.engine('handlebars', exprhb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/gallery', function(req, res, next){
    if(data){
        var inputs = {
            blocks: data
        }
        res.status(200);
        res.render('galleryPage', inputs);
    }else{
        next();
    }
});

app.get('/gallery/:index', function(req, res, next){
    var index = req.params.index;
    if(index < data.length && index >= 0){
        var inputs = {
            blocks: [data[index]]
        }

        res.status(200);
        res.render('galleryPage', inputs);
    }else{
        next();
    }
});

app.get('/generator', function(req, res, next){
    res.status(200);
    res.render('generatorPage');
});



app.use(express.static('public'));


app.get('*', function(req, res, next){
    res.status(404);
    res.render('404Page');
});

app.listen(port, function(err){
    if(err){
        throw err;
    }
    console.log("Server listening on port", port);
});
