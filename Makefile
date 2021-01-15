install:
	npm install

lint:
	npx eslint .

test:
	npm test -s
	
test-coverage:
	npm test -- --coverage --coverageProvider=v8

dev: 
	npx nodemon ./server/bin/server.js
