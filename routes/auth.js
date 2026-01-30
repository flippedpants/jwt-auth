const express = require("express");
const router = express.Router();
const {register, login , profile} = require("../controllers/authController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

// console.log({
//   register,
//   login,
//   profile,
//   authMiddleware
// });

router.post("/register", register);

router.post("/login", login);

router.post("/profile" , authMiddleware , profile);

module.exports = router;