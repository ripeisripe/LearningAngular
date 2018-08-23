#!/usr/bin/env node
//var debug = require('debug')("fora-node-server");
var app = require("./app")



var server = app.listen(8000, function(){
    console.log("starting node js on port 8000")
})
