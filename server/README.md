# SERVER

- Node.js
- GraphQL
- [apollo-server-express](https://www.apollographql.com/docs/apollo-server/integrations/middleware/) : GraphQL Server with express as a middleware.

- [graphql-tools](https://www.graphql-tools.com/docs/introduction) : Stitch multiple GraphQL Schemas

### RUN

Download the docker if not installed from following [link](https://www.docker.com/products/docker-desktop)

```sh
# development mode
$ docker-compose -f docker-compose.dev.yml  up --build

# production mode
$ docker-compose up -d --build
# -d run the container in detached mode (in the background)

```

Run without `Docker`

```sh
# dev mode
$ npm run dev

# prod mode
$ npm start
```

##### Before connecting to the client (dev mode) . Run

```sh
$ ngrok http http://localhost:4000
```

And copy the new generated url to the `client/.env`

```
GRAPHQL_ENDPOINT=" "
```

Save it and follow client readme to run the app locally.

#### [How to deploy to AWS ?](DEPLOY.md)
