const config = Object.freeze({
  client: 'pg',
  connection: Object.freeze({
    port: process.env.DB_PORT || '14832',
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'scrum'
  })
})

module.exports = { config }
