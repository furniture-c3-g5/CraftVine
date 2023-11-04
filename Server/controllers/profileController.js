const pool = require("../models/db");
const multer = require("multer");
const path = require("path");

// Storage Image By Multer Start
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "imagesProfile"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const addImage = multer({ storage: storage });
const imageProfile = addImage.single("image") 
// Storage Image By Multer End

// Update Information Profile Start
const updateProfile = async (req, res) => {
  try {
    const { email, first_name, last_name, phone } = req.body;
    const profile_image_name = req.file ? req.file.filename : null;
    const query = "UPDATE users SET first_name = $1, last_name = $2, profile_image_name = $3, phone = $4 WHERE email = $5";
    const result = await pool.query(query, [first_name, last_name, profile_image_name, phone, email]);
    if (result.rowCount > 0) {
      res.status(200).json({ message: "Profile updated successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("An error occurred while updating the profile:", error);
    res.status(500).json({ error: "An error occurred while updating the profile" });
  }
}
// Update Information Profile End

module.exports = {
  imageProfile,
  updateProfile
}