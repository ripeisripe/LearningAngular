var express = require('express');
var router = express.Router();
var datasource = require('../model/datasource')

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()


function byId(id) {
    return datasource.users.find(user => user.id === id)
}

/* GET users listing. */
router.get('/', function (req, res) {

    res.json(datasource.users);
});

router.get('/admins', function (req, res) {
    try {
        res.json(datasource.users.filter(user => user.admin));
    }
    catch (e) {
        console.log(e);
        throw e;
    }
});

// Warning: must be with a lower priority than before
router.get('/:id', function (req, res) {
    try {
        const id = parseInt(req.params.id);
        res.json(byId(id));
    }
    catch (e) {
        console.log(e);
        throw e;
    }
});




router.put('/:id', function (req, res) {

    try {

        const sentUser = req.body;
        const userInDatasource = datasource.users.find(user => user.id === sentUser.id);

        if (sentUser.id !== parseInt(req.params.id)) {
            throw 'Wrong id ' + req.params.id;
        }


        Object.assign(userInDatasource, sentUser);

        res.json(userInDatasource);
    }
    catch (e) {
        console.log(e);
        throw e;
    }
});

router.post('/', jsonParser, function (req, res) {

    const sentUser = req.body;

    const id = datasource.users.reduce(maxReducer, 1);
    console.log('setting id:', id);

    //setting admin false by default
    if (!(sentUser.admin === true)) {
        sentUser.admin = false;
    }

    //check email unicity
    const already = datasource.users.find(user=>user.email === sentUser.email);
    if (already) {
        res.status(409);
        res.send({message: "email " + sentUser.email + " already exists"});
        return;
    }

    sentUser.id = id+1;
    datasource.users.push(sentUser);
    console.log(sentUser);

    res.json(sentUser);
});



router.delete('/:id', function (req, res) {
    try {
        const id = parseInt(req.params.id);

        const user = byId(id);
        if (!user) {
            res.status(404);
            res.send({message: "user does not exists"});
            return;
        }

        datasource.users= datasource.users.filter(user => user.id !== id);
        res.json(datasource.users.length);
    }
    catch (e) {
        console.log(e);
        throw e;
    }
});




function maxReducer(max, user){
    if (user.id>max){
        return user.id;
    }
    return max;
}

module.exports = router;
