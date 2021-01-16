install:
	npm install

lint:
	npx eslint .

test:
	npm test -s --experimental-vm-modules
	
dev: 
	npx nodemon ./server/bin/server.js

dev-db:
	make db-migrate db-seed

db-migrate:
	npx knex --esm migrate:latest

db-seed:
	npx knex --esm seed:run


