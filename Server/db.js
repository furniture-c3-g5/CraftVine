const { Pool } = require("pg");

const pool = new Pool({
  user: "CraftVine_ayoub",
  password: "0788386721",
  host: "localhost",
  port: "5432",
  database: "CraftVine"
});

module.exports = {
  query: (text, params) => pool.query(text, params)
}


