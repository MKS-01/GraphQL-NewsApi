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

## AWS EC2 SETUP

- Create a free instance.[Port configuration reference](https://medium.com/@chandupriya93/deploying-docker-containers-with-aws-ec2-instance-265038bba674)

Once you create the instance. Installs following:

- Install Git

```sh
sudo yum install git -y

git version # Check git version
```

- Install NVM

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

- Install Docker [Gist For Reference](https://gist.github.com/npearce/6f3c7826c7499587f00957fee62f8ee9)

##### Docker CE Install

```sh
sudo amazon-linux-extras install docker
sudo service docker start
sudo usermod -a -G docker ec2-user
```

Make docker auto-start

```sh
sudo chkconfig docker on
```

Because you always need it....

```sh
sudo yum install -y git
```

Reboot to verify it all loads fine on its own.

```sh
sudo reboot
```

##### Docker-compose install

```sh
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
```

- [Create a personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token). Use this in place of your password to access the repo.

- Pull the repo and go inside `server/`.

```sh
npm install

docker-compose up -d --build

#check docker image
docker ps
```
