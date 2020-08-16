require('dotenv').config();
const { Pool } = require('pg');


const pool = new Pool({
    user: 'nucternal',
    host: 'localhost',
    database: 'aawork',
    password: 'M@mb@',
    port: 5432
})

module.exports = pool;