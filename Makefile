install:
	npm install

setup: install dev-db

dev-db:
	make db-migrate db-seed

db-migrate:
	npx knex migrate:latest

db-seed:
	npx knex seed:run

start:
	npx babel-node server/bin/server.js

dev: 
	npx nodemon --exec npx babel-node server/bin/server.js

lint:
	npx eslint .

test:
	npm test -s
