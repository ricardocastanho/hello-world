import 'module-alias/register'
import app from '@/main/config/app'

app.listen()
  .then(({ url }): void => {
    console.log(`🚀  Server ready at ${url}`)
  })
  .catch(error => {
    console.log(error)
  })
