const express = require('express');
const _ = require('underscore');
const router = express.Router();
const datasource = require('../model/datasource')



function byId(id) {
    return datasource.topics.find(topic => topic.id === id);
}

/* GET topics listing. */
router.get('/', function (req, res) {
    res.json(datasource.topics)
});

/* GET single topic. */
router.get('/:id', function (req, res) {

    const id= parseInt(req.params.id);
    const topic=byId(id)
    if (!topic){
        res.status(404);
        res.send({message:"no valid topic found with id :"+id });
        return;
    }
    res.json( topic);

});


router.post('/', function (req, res) {

    const data = req.body;

    if (!data.title || data.title.length < 4) {
        res.status(406);
        res.send({message: "Title min length is 4"});
    }

    if (!data.user || !data.user.id) {
        res.status(406);
        res.send({message: "no valid user provided"});
        return;
    }

    const userId = data.user.id;
    data.user = datasource.users.find(u=>u.id ===userId);
    if (!data.user) {
        res.status(406);
        res.send({message: "no valid user provided for id:" + userId});
        return;
    }


    data.id = datasource.topics.reduce(maxReducer, 1)+1;
    console.log('setting topic id:', data.id);

    datasource.topics.push(data);
    res.json(data);
});


// Warning: must be with a lower priority than before
router.delete('/:id', function (req, res) {
    try {
        const id = parseInt(req.params.id);

        const topic = byId(id);
        if (!topic) {
            res.status(404);
            res.send({message: "topic "+id+" does not exists"});
            return;
        }

        datasource.topics= datasource.topics.filter(topic => topic.id !== id);
        res.json(datasource.topics.length);
    }
    catch (e) {
        console.log(e);
        throw e;
    }
});

function maxReducer(max, topic) {
    if (topic.id > max) {
        return topic.id;
    }
    return max;
}
module.exports = router;