require('dotenv').config()

const config = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DB_NAME,
    host: 'localhost',
    dialect: 'postgres'
  },

  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DB_TEST,
    host: 'localhost',
    dialect: 'postgres'
  },
  docker: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres', 
    port: process.env.PGPORT
  },
}
console.log(config)
module.exports = config
