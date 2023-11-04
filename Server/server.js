const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
app.use(express.json());
var cors = require("cors");
app.use(cors());

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const user_router = require("./routes/users_route");
const google_router = require("./routes/google_route");

app.use(user_router);
app.use(google_router);

app.listen(5000, () => {
  console.log("server running at http://localhost:5000");
});
