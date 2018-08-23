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

const topic={
    title:'Working test',
    user:nicolas
};


module.exports = {
    setUp: function (done) {
        done();
    },
    getTopics(test) {
        get('topics').then(topics => ok(test, topics.length === 3));
    },

    getTopicSW(test) {
        get('topics/1')
            .then(topic => ok(test, topic.title.toLowerCase().includes('star')));
    },


    postAndDeleteTopic(test){

        let size = undefined;
        let id = undefined;

        get('topics').then(topics => size = topics.length)
            .then(()=>post('topics', topic))
            .then(topic => {
                ok(test, topic.id > 3, true);
                id = topic.id;
                console.log('created topic id:', id);
            })
            .then(()=>get('topics'))
            .then(topics => ok(test, topics.length === size + 1, true))
            .then(() => del('topics/' + id))
            .then(()=>get('topics'))
            .then(topics => ok(test, topics.length === size));
    }


};
