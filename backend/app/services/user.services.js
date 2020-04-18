let User = require('../models/user');

function getUser(email) {
    return new Promise((resolve, reject) => {
        User.findOne({ 'email': email })
            .then(user => {
                resolve(user);
            })
            .catch(err => {
                reject(err);
            });
    });
}

function getUsers() {
    return new Promise((resolve, reject) => {
        User.find({})
            .then(users => {
                resolve(users);
            })
            .catch(err => {
                reject(err);
            });
    });
}

function createUser(user) {
    return new Promise((resolve, reject) => {
        getUser(user.email)
        .then(result => {
            if(result){
                reject('This email is already taken !');
            }
            else {
                const newUser = new User(user);
                newUser.save()
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                })
            }
        })
    })
}

module.exports = {
    getUser,
    getUsers,
    createUser
}