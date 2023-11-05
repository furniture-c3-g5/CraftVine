const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '123',
  host: 'localhost',
  port: 5432,
  database: 'eco',
});

const submitRating = async (user_id, product_id, rating, review) => {
  const insertQuery = 'INSERT INTO product_ratings (user_id, product_id, rating, review) VALUES ($1, $2, $3, $4)';
  const insertValues = [user_id, product_id, rating, review];

  try {
    await pool.query(insertQuery, insertValues);
    return 'Rating submitted successfully.';
  } catch (error) {
    console.error('An error occurred while submitting the rating:', error);
    return 'An error occurred while submitting the rating.';
  }
};

const updateRating = async (user_id, product_id, newRating) => {
  const deleteQuery = 'DELETE FROM product_ratings WHERE user_id = $1 AND product_id = $2';
  const insertQuery = 'INSERT INTO product_ratings (user_id, product_id, rating) VALUES ($1, $2, $3)';
  const deleteValues = [user_id, product_id];
  const insertValues = [user_id, product_id, newRating];

  try {
    await pool.query(deleteQuery, deleteValues);
    await pool.query(insertQuery, insertValues);
    return 'Rating updated successfully.';
  } catch (error) {
    console.error('An error occurred while updating the rating:', error);
    return 'An error occurred while updating the rating.';
  }
};

const getRatings = async () => {
  const query = 'SELECT * FROM product_ratings';

  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error('An error occurred while getting ratings:', error);
    return [];
  }
};

module.exports = {
  submitRating,
  updateRating,
  getRatings,
};
