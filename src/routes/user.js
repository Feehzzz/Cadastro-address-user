const routes = require('express').Router();
const UserController = require('../controller/User.controller')

routes.post('/user', UserController.create)

module.exports = routes;