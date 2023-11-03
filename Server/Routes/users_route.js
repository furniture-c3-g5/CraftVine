const { Router } = require("express");
const userController = require("../Controllers/users");
const router = Router();

router.post("/registration", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/user", userController.getUserDetails);

module.exports = router;
