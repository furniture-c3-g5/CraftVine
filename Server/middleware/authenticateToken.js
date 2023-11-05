// Middleware AuthenticateToken
const jwt = require("jsonwebtoken");

function authorize(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access is forbidden. You must authenticate first" });
  }

  try {
    const secretKey = process.env.SECRET_KEY;
    const decodedToken = jwt.verify(token, secretKey);
    const userRole = decodedToken.user_role;

    checkPermissionForUser(req, res, next, userRole);
  } catch (error) {
    res.status(401).json({ message: "Access is forbidden. Invalid token." });
  }
}

function checkPermissionForUser(req, res, next, userRole) {
  if (
    userRole === "user" &&
    (req.path === "/Add_New_product" ||
      req.path === "/Update_Product_By_Id" ||
      req.path === "/Delete_Product_By_Id")
  ) {
    return res
      .status(403)
      .json({ message: "Access is prohibited. You do not have permission." });
  } else if (userRole === "superuser" && req.path === "/Delete_Product_By_Id") {
    return res
      .status(403)
      .json({ message: "Access is prohibited. You do not have permission." });
  }
  next();
}

function checkPermissionForUser(req, res, next, userRole) {
  if (
    (userRole === "admin" || userRole === "superuser") &&
    (req.path === "/All_products" || req.path === "/Update_Product_By_Id")
  ) {
    return res
      .status(403)
      .json({ message: "Access is prohibited. You do not have permission." });
  }
  next();
}

module.exports = {
  authorize,
};
