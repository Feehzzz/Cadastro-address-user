require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const indexRoutes = require('./src/routes');
const UserRoutes = require('./src/routes/user')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false, limit: '5mb'}));
app.use(morgan('short'))
app.use(indexRoutes);
app.use(UserRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server up and running ')
})