const mysql = require('mysql2/promise');
const dbName = 'TransactionsDB';
require ('dotenv').config();

(async () => {
  const connection = await mysql.createConnection({ 
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASS 
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
  console.log(`Data Base '${dbName}' verified/created successfully.`);
  await connection.end();
})();
