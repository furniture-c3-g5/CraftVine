const express = require("express")
const productsRoter = require("./Routes/routes")
// const createNewProductRoter = require("./routes/routes")
// const multer = require("multer")
// const path = require("path")


const app = express()
const port = 5000

app.use(express.json())
// app.use("/products", productsRoter)
// // app.use("/createNewProduct", createNewProductRoter)

// // Storage Image By Multer Start
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage: storage });
// // Storage Image By Multer End

// app.post("/Add_Product", upload.single("image"), (req, res) => {
//   res.send("image uploaded")
// })

// app.use("/products/",require("./controllers/product_controller"));

const products_Router = require("./Routes/products_routes");
const admin_Router = require("./Routes/admin_routes");
const orders_Router = require("./Routes/orders_routes");

app.use(products_Router);
app.use(admin_Router);
app.use(orders_Router);

app.listen(port, () => {
  console.log(`Server Run On Port ${port}`)
})

