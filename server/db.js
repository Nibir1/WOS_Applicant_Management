const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "chronophase",
  host: "localhost",
  port: 5432,
  database: "wos_student_management",
});

module.exports = pool;
