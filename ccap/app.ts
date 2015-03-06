/// <reference path="DefinitelyTyped/app.d.ts" />
var http = require('http');
import express = require('express');
var _ = require("underscore");
var ccap = require('ccap');//Instantiated ccap class 
var app = express();

var captcha = ccap({

    width: 90,//set width,default is 256

    height: 40,//set height,default is 60

    offset:21,//set text spacing,default is 40

    quality: 100,//set pic quality,default is 50

    fontsize: 36,//set font size,default is 57

    generate: function () {//Custom the function to generate captcha text
        var rdmString = "";
        for (; rdmString.length < 4; rdmString += Math.random().toString(24).substr(2));
        return rdmString.substr(0, 4);
    }
});

app.get("/", function (req: express.Request, res: express.Response) {
    var ary = captcha.get();
    //res.send(ary[1]);
    //console.log(ary[0]);
    ary[1] = ary[1].toString("base64");
    res.send(ary);
});


http.createServer(app).listen(8124, _.bind(function () {
    console.log('Express server listening on port ' + 8124);
}, this));



   


//console.log('Server running at http://127.0.0.1:8124/');