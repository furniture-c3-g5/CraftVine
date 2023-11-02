const pool = require("../db")
const queries = require("../models/models")

//_____________________________________________________________________________
//________________________get all Products Start_________________________________
//_____________________________________________________________________________
const getProducts = (req, res) => {
  pool.query(queries.getProducts, (error, result) => {
    if(error) {
      throw error
    } else {
      res.status(200).json(result.rows)
    }
  })
}
//_____________________________________________________________________________
//________________________get all Products End_________________________________
//_____________________________________________________________________________
//_____________________________________________________________________________
//________________________insert new product start_____________________________
//_____________________________________________________________________________
const createNewProduct = (req, res) => {
  const { product_name, category, price, rating, description, quantity } = req.body
  pool.query(queries.createNewProduct, [ product_name, category, price, rating, description,  quantity ] , (error, result) => {
    if(error) { 
      throw error
    } else {
      res.status(200).json(result.rows)
    } 
  })
}
//_____________________________________________________________________________
//________________________insert new product end_______________________________
//_____________________________________________________________________________

module.exports = {
  getProducts,
  createNewProduct
}  