let userService = require('./services/user.services');
let mongoose = require('mongoose')

module.exports = function (app) {
  
    app.get('/test', (req, res) => {
        res.status(200).json({
            'message' : 'API is working well !'
        });
    });

    app.post('/addUser', (req, res) => {
        userService
        .createUser(req.body)
        .then(result => {
            res.status(200).json("User has successfully created");
        })
        .catch(err => {
            res.status(400).json(err);
        })
    });

    app.get('/getUsers', (req, res) => {
        userService
        .getUsers()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(400).json(err);
        })
    })

    app.delete('/deleteUser', (req, res) => {
        userService
        .deleteUser(req.body.user.email)
        .then(result => {
            res.status(200).json("User was successfully deleted");
        })
        .catch(err => {
            res.status(400).json(err);
        })
    })

    app.post('/getUserById', (req, res) => {
        let _id = mongoose.Types.ObjectId(req.body.id)
        userService
        .getUserById(_id)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(400).json(err);
        })
    });

    app.put('/updateUser', (req, res) => {
        console.log(req.body)
        let _id = mongoose.Types.ObjectId(req.body.id);
        userService
        .updateUser(req.body.user, _id)
        .then(result => {
            res.status(200).json('User was successfully updated');
        })
        .catch(err => {
            res.status(400).json(err);
        })
    })
}