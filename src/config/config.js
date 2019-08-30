require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

module.exports = {
  host: process.env.CLOUD_HOST,
  username: process.env.CLOUD_USER,
  password: process.env.CLOUD_PASS,
  database: process.env.CLOUD_DB,
  dialect:  process.env.DB_DIALECT || 'postgres',
  operatorAliases: false,
  loggin: false,
  define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      freezeTableName: true  
  },
};