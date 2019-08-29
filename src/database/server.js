const Sequelize = require('sequelize')
const uri = `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`

const sequelize = new Sequelize(uri)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connect with database successfully');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err.message);
  });

module.exports = sequelize