var path = require('path');
var express = require('express');
var exprhb = require('express-handlebars');
var data = require('./data.json');
var fs = require("fs");


var app = express();

var port = 8000;

app.engine('handlebars', exprhb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(express.json());


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

app.post('/generator/upload', function(req, res, next){

    if(req.body && req.body.name && req.body.typeString && req.body.speedString && req.body.sensesString && req.body.skillsString){
        data.push({
            name: req.body.name,
            tag: req.body.tag,
            typeString: req.body.typeString,
            speedString: req.body.speedString,
            strPointsS: req.body.strPointsS,
            dexPointsS: req.body.dexPointsS,
            conPointsS: req.body.conPointsS,
            intPointsS: req.body.intPointsS,
            wisPointsS: req.body.wisPointsS,
            chaPointsS: req.body.chaPointsS,
            cr: req.body.cr,
            sensesString: req.body.sensesString,
            hpText: req.body.hpText,
            acText: req.body.acText,
            skillsString: req.body.skillsString
        });
        fs.writeFile("data.json", JSON.stringify(data), err => {
            if(err) throw err;
        });

        res.status(200).send("Monster added");
    }else{
        res.status(400).send("Error: no body");
    }

});


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
