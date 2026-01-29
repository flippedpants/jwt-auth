const jwt = require("jsonwebtoken");

// console.log("JWT SERVICE LOADED");
const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_KEY, {algorithm : "HS256", expiresIn: "1h"});
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_KEY, {algorithm : "HS256"});
}

module.exports = {generateToken, verifyToken};