var express = require('express');
var _ = require('underscore');
var router = express.Router();


var data = {
    name: 'John',
    city: 'London'
};

var collection = [data];

router.get('/', function (req, res) {
    res.json(data);
});

router.put('/', function (req, res) {
    data=req.body;
    res.json(data);
});


router.post('/', function (req, res) {
    data=req.body;
    res.json(data);
});

router.get('/collection', function (req, res) {
    res.json(collection);
});

router.post('/collection', function (req, res) {
    collection.push(req.body);
    res.json(collection);
});




module.exports = router;

