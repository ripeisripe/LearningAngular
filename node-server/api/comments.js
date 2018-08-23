const express = require('express');
const router = express.Router();
const datasource = require('../model/datasource')


function byId(id) {
    return datasource.comments.find(comment => comment.id === id);
}

router.get('/', function (req, res) {

    res.json(datasource.comments)
});


/* GET comments listing. */
router.get('/:id', function (req, res) {

    const commentId = parseInt(req.params.id);
    const comment = byId(commentId);
    if (!comment) {
        res.status(404);
        res.send({message: "no valid comment found with id :" + commentId});
        return;
    }
    res.json(comment)
});


router.put('/:id', function (req, res) {
    try {

        const sentComment = req.body;
        const commentInDatasource = datasource.comments
            .find(comment => comment.id === sentComment.id);

        if (sentComment.id !== parseInt(req.params.id)) {
            throw 'Wrong id ' + req.params.id;
        }


        // TODO: bug when updating score to some new comment
        Object.assign(commentInDatasource, sentComment);

        res.json(commentInDatasource);
    }
    catch (e) {
        console.log(e);
        throw e;
    }

});


router.post('/topic/:id', function (req, res) {

    const data = req.body;

    if (!data.user || !data.user.id) {
        res.status(406);
        res.send({message: "no valid user provided"});
        return;
    }

    const userId = data.user.id;
    data.user = datasource.users.find(u => u.id === data.user.id);
    if (!data.user) {
        res.status(406);
        res.send({message: "no valid user provided for id:" + userId});
        return;
    }


    const topicId = parseInt(req.params.id);
    const topic = datasource.topics.find(t => t.id === topicId);

    if (!topic) {
        res.status(406);
        res.send({message: "no valid topic provided with id :" + topicId});
        return;
    }

    const comment = req.body;
    if (!comment || comment.content.length <2) {
        res.status(406);
        res.send({message: "Minimum length of content is 2"});
        return;
    }

    comment.id = datasource.comments.reduce(maxReducer, 1)+1;
    console.log('setting comment id:', comment.id);


    topic.comments.push(comment);
    datasource.comments.push(comment);
    res.json(comment);
});


function maxReducer(max, topic) {
    if (topic.id > max) {
        return topic.id;
    }
    return max;
}

module.exports = router;