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

module.exports = {
    setUp: function (done) {
        done();
    },
   getUsers(test) {
        get('users').then(users => ok(test, users.length > 4));
    },

    getAdmins(test){
        get('users/admins').then(users => ok(test, users.length > 1 && users.length < 4));
    },

    putUser(test){
        put('users/1', Object.assign({}, nicolas, {name: 'toto'}))
            .then(user => ok(test, user.name === 'toto', true))
            .then(() => get('users/1'))
            .then(user => ok(test, user.name === 'toto'));
    },

    postUser(test){

        const newUser = Object.assign({}, nicolas, {email: 'toto2@rra.io'});

        let size = undefined;
        let id = undefined;

        get('users').then(users => size = users.length)
            .then(()=>post('users', newUser))
            .then(user => {
                ok(test, user.id > 8, true);
                id = user.id;
                console.log('id:', id);
            })
            .then(()=>get('users'))
            .then(users => ok(test, users.length === size + 1, true))
            .then(() => del('users/' + id))
            .then(()=>get('users'))
            .then(users => ok(test, users.length === size));
    }


};
