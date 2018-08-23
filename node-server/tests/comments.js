const axios = require('axios');

const api = 'http://localhost:8000/api/';

function get(url) {
    return axios.get(api + url).then(resp => resp.data);
}
function post(url, data) {
    return axios.post(api + url, data).then(resp => resp.data);
}
function put(url, data) {
    return axios.put(api + url, data).then(resp => resp.data);
}
function del(url) {
    return axios.delete(api + url).then(resp => resp.data);
}

function ok(test, val, next = false) {
    test.ok(val);
    if (!next) {
        test.done();
    }
}

const nicolas = {
    "admin": true,
    "id": 1,
    "email": "nz@robusta.io",
    "name": "Nicolas",
    "statement": "Star Wars rocks"
};

const comment={
    content:'Hello World',
    user:nicolas
};

module.exports = {
    setUp: function (done) {
        done();
    },
    getComments(test) {
        get('comments').then(comments => ok(test, comments.length > 10));
    },

    getFirstComment(test){
        get('comments/1')
            .then(comment => ok(test, comment.content.toLowerCase().includes('not ok')));
    },
    putComment(test){
        let firstComment;
        get('comments/1')
            .then(comment => firstComment=comment)
            .then(()=>put('comments/1', Object.assign({}, firstComment, {content: 'modify'})))
            .then(comment => ok(test, comment.content === 'modify', true))
            .then(() => get('comments/1'))
            .then(comment => ok(test, comment.content === 'modify', true))
            .then(()=>put('comments/1', Object.assign({}, firstComment, {content: 'Not ok'})))
            .then(comment => ok(test, comment.content !== 'modify'))
    },


    postComment(test){

        const newComment = Object.assign({}, comment, {content: 'Doctor Jekyll'});

        let size = undefined;
        let id = undefined;

        get('comments').then(comments => size = comments.length)
            .then(()=>post('comments/topic/1', newComment))
            .then(comment => {
                ok(test, comment.id > 10, true);
                id = comment.id;
                console.log('id:', id);
            })
            .then(()=>get('comments'))
            .then(comments => ok(test, comments.length === size + 1))
    }

};
