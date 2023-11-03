const express = require("express");
const app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());

const user_router = require("./routes/users_route");

app.use(user_router);

app.listen(5000, () => {
  console.log("server running at http://localhost:5000");
});
