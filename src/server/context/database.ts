const path = require('path')
const { config } = require('../../infra')

require('dotenv').config({
  path: path.join(__dirname, '../../../.env')
})

const database = require('knex')(config)

export { database }
