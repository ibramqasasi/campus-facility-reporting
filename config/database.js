const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,

  ssl: {
    rejectUnauthorized: false
  },

  max: 5,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000
});

module.exports = pool;