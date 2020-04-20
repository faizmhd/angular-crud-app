let User = require('../models/user');
let firebase = require("firebase/app");

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
                if (result) {
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

function deleteUser(email) {
    return new Promise((resolve, reject) => {
        getUser(email)
            .then(res => {
                if (res) {
                    User.deleteOne({ "email": email })
                        .then(result => {
                            resolve(result);
                        })
                        .catch(err => {
                            reject(err);
                        })
                }
                else {
                    reject('User not exist')
                }
            })

    })
}

function getUserById(id) {
    return new Promise((resolve, reject) => {
        User.findById(id)
            .then(user => {
                if (user) {
                    resolve(user);
                }
                else {
                    reject('No user found')
                }
            })
            .catch(err => {
                reject(err);
            });
    });
}

function updateUser(user, id){
    return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(id, user)
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err)
        })
    })
}

function signIn(email, password){
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            resolve("Firebase user was successfully logged in");
        })
        .catch(error => {
            reject(error.message)
        })
    })
}

function signUp(email, password){
    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            resolve("Firebase user was successfully created")
        })
        .catch(error => {
            reject(error.message)
        })
    })
}

module.exports = {
    getUser,
    getUsers,
    createUser,
    deleteUser,
    getUserById,
    updateUser,
    signIn,
    signUp
}