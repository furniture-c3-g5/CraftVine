const { Router } = require("express");
const profileController = require("../controllers/profileController"); 
const router = Router();

router.put("/Update_Information_Profile", profileController.imageProfile, profileController.updateProfile)

module.exports = router;