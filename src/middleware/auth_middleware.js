const User = require("../model/User.js");
const asyncHandler = require("../utils/async_handler.js");
const AppError = require("../utils/Error.js");
const firebaseAdmin = require("../utils/firebase");
const jwt = require("jsonwebtoken");

module.exports = asyncHandler(async (req, res, next) => {
  let token;
  let adminToken;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies && req.cookies.adminToken) {
    adminToken = req.cookies.adminToken;
  } else if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Admin")
  ) {
    adminToken = req.headers.authorization.split(" ")[1];
  }
  if (!(token || adminToken)) {
    return next(new AppError("Not authorized to access this route", 401));
  }

  if (adminToken) {
    const decoded = jwt.verify(adminToken, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return next(new AppError("User not found", 401));
    req.user = user;
  }

  if (token) {
    const payload = await firebaseAdmin.auth().verifyIdToken(token);
    if (!payload.uid) return next(new AppError("User not found", 404));
    req.firebaseUser = payload;
    // console.log(payload.);
  }
  next();
});
