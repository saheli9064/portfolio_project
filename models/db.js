const mysql = require('mysql2/promise');
require('dotenv').config();

// Create the database connection pool
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Function to fetch projects from the database
async function getProjects() {
  const [rows] = await db.query('SELECT * FROM projects');
  return rows;
}

module.exports = {
  db,
  getProjects // Exports the function to fetch projects
};
