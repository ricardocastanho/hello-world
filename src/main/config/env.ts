import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.join(__dirname, '../../../.env')
})

export default {
  dbHost: process.env.DB_HOST || '127.0.0.1',
  dbPort: process.env.DB_PORT || '1000',
  dbName: process.env.DB_NAME || 'local',
  dbUser: process.env.DB_USER || 'root',
  dbPassword: process.env.DB_PASSWORD || 'root'
}
