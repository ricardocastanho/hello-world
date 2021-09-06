import 'module-alias/register'
import buildApp from '@/main/config/app'
import env from '@/main/config/env'

const app = buildApp()

// eslint-disable-next-line @typescript-eslint/no-floating-promises
app.listen({ port: env.appPort })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
