const User = require("../models/user.js");
const { hashPassword , comparePassword } = require("../services/hashService.js");
const generateToken = require("../services/jwtService.js");

const register = (req,res) => {
    const { name , email , password } = req.body;

    
}