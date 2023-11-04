
const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
app.use(express.json());
var cors = require("cors");
app.use(cors());
=======
const express = require("express")
const productsRoutes = require("./routes/productsRoute")
const multer = require("multer")
const path = require("path")





const user_router = require("./routes/users_route");
const google_router = require("./routes/google_route");

app.use(user_router);
app.use(google_router);
=======
app.use(express.json())
app.use("/products", productsRoutes)

// Storage Image By Multer Start
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
// Storage Image By Multer End

// app.post("/Add_Product", upload.single("image"), (req, res) => {
//   res.send("image uploaded")
// })

app.listen(port, () => {
  console.log(`Server Run On Port ${port}`)
})



