const getProducts = "SELECT * FROM products"
const createNewProduct = "INSERT INTO products (product_name, category, price, rating, description, quantity) VALUES ($1, $2, $3, $4, $5, $6)";

module.exports = {
  getProducts,
  createNewProduct,
}
