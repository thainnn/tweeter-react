# tweeter-react

## Set up Postgresql database
Fill in .env with .env.example

- Log in Postgresql:

sudo -u postgres psql

- Create user: 

CREATE ROLE DB_USER.value WITH LOGIN PASSWORD 'DB_PASS.value';

- Create database:

CREATE DATABASE DB_NAME.value WITH OWNER DB_USER.value;

- Access database:

\c DB_NAME.value;

### Create DB
- In server folder:

npm run db:reset