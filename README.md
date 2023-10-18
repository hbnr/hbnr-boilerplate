#  HBNR Boilerplate
This is a base project with a backend written in Nest.js and a frontend written in Angular

## Backend
I intend to write a backend with some basic authorization features and tests

### Setup

```
docker-compose up -d          # run the docker container
cd backend                    # navigate to the backend-directory
vi .env                       # uncomment and change environment variables
yarn                          # install all dependencies
yarn prisma migrate dev       # fill your database
yarn start                    # start the backend, which by default can be found on http://localhost:3000
```

** Create user / login / get account-data**
```
# create first user 
curl -d "email=test%40email.lol&password=supersecret" http://localhost:3000/auth/signup
# get access token
curl -d "email=test%40email.lol&password=supersecret" http://localhost:3000/auth/signin
# get your account data
curl -H "Authorization: Bearer <ACCESS_TOKEN>" http://localhost:3000/users/me
```

## Frontend
The frontend should also have default sign in, sign out functionality and the basic tailwind configuration.

## Documentation
There will also be a folder where I write down how certain things work. Since this project is also
for me to learn Nest.js.
