require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path')

const indexRoutes = require('./src/routes');
const bodyParser = require('body-parser');
const app = express();



// template engine
app.engine('.hbs', handlebars({defaultLayout: '../main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, './public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false, limit: '5mb'}));
app.use(morgan('short'));
app.use(indexRoutes);


app.listen(process.env.PORT || 3000, () => {
  console.log('Server up and running ')
})