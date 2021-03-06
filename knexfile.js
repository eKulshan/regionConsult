const path = require('path');

const migrations = {
  directory: path.join(__dirname, 'server', 'migrations'),
};
const seeds = {
  directory: path.join(__dirname, 'server', 'seeds'),
};

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database.sqlite',
    },
    useNullAsDefault: true,
    migrations,
    seeds,
  },
  test: {
    client: 'sqlite3',
    connection: ':memory:',
    useNullAsDefault: true,
    migrations,
  },
};
