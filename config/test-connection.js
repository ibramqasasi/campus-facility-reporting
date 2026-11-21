require('dotenv').config();

const pool = require('./database');

async function testConnection() {
  try {
    const result = await pool.query(
      'SELECT NOW() AS current_time'
    );

    console.log('Supabase connected successfully!');
    console.log('Database time:', result.rows[0].current_time);

  } catch (error) {
    console.error('Connection failed:', error.message);
    process.exitCode = 1;

  } finally {
    await pool.end();
  }
}

testConnection();