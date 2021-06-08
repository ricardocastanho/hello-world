const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

type MockedEnv = {
  DB_NAME: string
  DB_USER: string
  DB_PASSWORD: string
  DB_PORT: string
  DB_HOST: string
}

export default () => {
  const envConfig: MockedEnv = dotenv
    .parse(fs.readFileSync(path.join(__dirname, '.env.test')))

  Object.entries(envConfig)
    .forEach(([key, value]): void => {
      process.env[key] = value
    })
}
