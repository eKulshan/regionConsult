install:
	npm install

lint:
	npx eslint .

test:
	npm test -s --experimental-vm-modules
	
dev: 
	npx nodemon ./server/bin/server.js
