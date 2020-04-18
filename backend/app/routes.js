let userService = require('./services/user.services');

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
            res.status(200).json(result);
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
            res.status(400).json(err)
        })
    })

    
}