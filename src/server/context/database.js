const path = require('path')

require('dotenv').config({
  path: path.join(__dirname, '../../../.env')
})

const database = require('knex')({
  client: 'pg',
  connection: {
    port: process.env.DB_PORT || '14832',
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'scrum'
  }
})

module.exports = database
