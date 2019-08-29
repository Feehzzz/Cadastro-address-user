const User = require('../models/User');
module.exports = {
    create(req,res) {
      const { name, email, password} = req.body;
      User.create({name, email, password}).then(user => [
        res.json(user)
      ])
      
     
  },

}