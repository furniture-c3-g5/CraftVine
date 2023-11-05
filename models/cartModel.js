const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '123',
  host: 'localhost',
  port: 5432,
  database: 'eco',
});

class CartModel {
  async createCartTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS cart (
        user_id INT,
        product_id INT,
        quantity INT,
        price NUMERIC,
        total_price NUMERIC
      );
    `;

    try {
      await pool.query(query);
      console.log('Cart table created or already exists.');
    } catch (error) {
      console.error('Error creating cart table:', error);
    }
  }

  async addItemToCart(user_id, product_id, quantity, price, total_price) {
    // نقل الكود المتعلق بإضافة المنتج إلى السلة هنا
    const insertQuery = 'INSERT INTO cart (user_id, product_id, quantity, price, total_price) VALUES ($1, $2, $3, $4, $5)';
    const values = [user_id, product_id, quantity, price, total_price];

    try {
      await pool.query(insertQuery, values);
      console.log('Product added to the cart successfully.');
    } catch (error) {
      console.error('Error adding product to cart:', error);
      throw error;
    }
  }

  async getCartItems() {
    // نقل الكود المتعلق بالحصول على عناصر السلة هنا
    const query = 'SELECT cart_id, user_id, product_id, quantity, price, created_at FROM cart';

    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error getting cart items:', error);
      throw error;
    }
  }

  async removeItemFromCart(user_id, product_id, quantity) {
    // نقل الكود المتعلق بإزالة المنتج من السلة هنا
    const findQuery = 'SELECT quantity FROM cart WHERE user_id = $1 AND product_id = $2';
    const findResult = await pool.query(findQuery, [user_id, product_id]);
    const currentQuantity = findResult.rows[0].quantity;

    if (quantity <= currentQuantity) {
      const newQuantity = currentQuantity - quantity;
      if (newQuantity > 0) {
        const updateQuery = 'UPDATE cart SET quantity = $1 WHERE user_id = $2 AND product_id = $3';
        await pool.query(updateQuery, [newQuantity, user_id, product_id]);
      } else {
        const deleteQuery = 'DELETE FROM cart WHERE user_id = $1 AND product_id = $2';
        await pool.query(deleteQuery, [user_id, product_id]);
      }
      console.log('Product quantity removed from the cart successfully.');
    } else {
      console.error('Requested quantity exceeds available quantity in the cart.');
      throw new Error('Requested quantity exceeds available quantity in the cart.');
    }
  }
}

module.exports = new CartModel();
