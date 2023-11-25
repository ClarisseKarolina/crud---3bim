//conexão com o banco de dados através da conexão string

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'host=177.136.201.182 port=5439 dbname=postgres user=aluno_20201214010003 sslmode=prefer connect_timeout=10',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

module.exports = pool;