const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'vocabulary',
  password: 'kirill13',
  port: 5432,
})

module.exports = pool
