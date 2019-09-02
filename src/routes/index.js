const routes = require('express').Router();
const { User } = require('../models');
const axios = require('axios');



routes.get('/', async (req,res) => {
  try {
    let result = [];
    const user = await User.findAll();
    for(data in user){
      result.push(user[data].dataValues)
    }
       
    res.render('layouts/index', {data: result})
    
  } catch (error) {
    res.redirect('/');

  }
})

routes.get('/getaddress', async (req, res) =>{
  try {
    const result = await axios.get(`https://viacep.com.br/ws/${req.query.zip}/json/`);
    const data = result.data;
    if(data.erro === true){
      return res.status(400).json({Error: "Falha na requisição do cep informado"});
    }
    return res.send(data);
  } catch (error) {
    
    return res.status(400).json({Error: "Falha na requisição do cep informado"});
  }
})
routes.post('/', async (req,res) => {
  try {
    let {first_name, last_name, address1, address2, address3, number, city, state, zip } = req.body;
    first_name = first_name.toLowerCase();
    last_name = last_name.toLowerCase();
    if(!first_name || !last_name || !address1 || !address2 || !address3 || !number ){
      res.redirect('/')
    } else if(zip.length < 8){
      res.redirect('/')
    } else {
      const user = await User.create({
        first_name,
        last_name,
        address: {
          address1,
          number,
          address2,
          address3,
          city, 
          state,
          zip
        }
      });
      res.redirect('/');
    }
    
  } catch (error) {
    
    
    return res.status(400).json({Error: "Erro na requisição, tente novamente"})
  }
})


module.exports = routes