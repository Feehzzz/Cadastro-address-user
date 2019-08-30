const routes = require('express').Router();
const { User } = require('../models');
const axios = require('axios');



routes.get('/', async (req,res) => {
 const user = await User.findAll()
  res.render('layouts/index', {data: user})
})
routes.get('/new', async (req,res) => {
  try {
    const res = await axios.get(`https://viacep.com.br/ws/${req.query.zip}/json/`)
    return res.json(res.data)
  } catch (error) {
    
  }
 
})
routes.post('/', async (req,res) => {
  try {
    
    const user = new User(req.body)
    
    await user.save()
    res.redirect('/')
  } catch (error) {
    res.redirect('/')
    res.status(400).json({Error: "Erro na requisição, tente novamente"})
  }
})


module.exports = routes