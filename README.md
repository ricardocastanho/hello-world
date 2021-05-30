<h1 align="center">
  ↗️ Scrum API ↗️
</h1>

<p align="center">🚀 Make awesome things! 🚀</p>
<br>

#### 📥 First clone this repository
```shell
git clone <https://github.com/ricardocastanho/scrum-api.git>
```

#### ➡️ Then access this project
```shell
cd scrum-api
```

#### ⬆️ Install the dependencies
```shell
yarn
```

#### 🗄️ Make the database instance
```shell
docker-compose up -d
```

#### 🗃️ Migrate the database
```shell
yarn knex migrate:latest
```

#### 🌱 Seed fake data
```shell
yarn knex seed:run
```

#### ✅ Test everything
```shell
yarn test
```

#### 🔨 Build the aplication
```shell
yarn build
```

#### 🆙 Start server
```shell
yarn start
```
<br>
<h2 align="center">🎉 And done! 🎉</h2>
<p align="center">
  💻 <a href="http://localhost:4000">Access server</a>
  <br>
  ✡️ Write in GraphQL playground!
</p>

<br>
<h3>🛠 Tecnologies used<h3/>

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [GraphQL](https://www.graphql.org/)
- [Jest.js](https://www.jestjs.io/)
- [Knex.js](https://www.knex.org/)
- [Lodash](https://www.lodash.com/)
- [Argon2](https://argon2.online/)
- [Faker.js](https://github.com/marak/Faker.js/)
