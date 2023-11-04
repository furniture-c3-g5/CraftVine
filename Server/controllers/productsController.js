const pool = require("../models/db")

// get all products start
const getProducts = (req, res) => {
  pool.query("SELECT * FROM products", (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
};
// get all products end

// Add Product Start
const addProduct = (req, res) => {
  pool.query("INSERT INTO ")
}

module.exports = {
  getProducts
}