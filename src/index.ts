import 'module-alias/register'
import app from '@/main/config/app'

app.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
