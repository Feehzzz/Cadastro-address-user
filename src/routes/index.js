const routes = require('express').Router();

routes.get('/', (req,res) => {
res.send('teste')
})


module.exports = routes