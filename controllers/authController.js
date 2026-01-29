const User = require("../models/user.js");
const { hashPassword , comparePassword} = require("../services/hashService.js");
const {generateToken} = require("../services/jwtService.js");

const register = async (req,res) => {
    try{
        const { name , email , password } = req.body;               //desructuring by refrence

        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: "User already Exists!"})
        }

        const hashedPassword = await hashPassword(password);

        const user = new User({name , email, password: hashedPassword});
        await user.save();

        res.status(201).json({ message: "Registration succesful!"});
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
}

const login = async(req,res) => {
    try{
        const { email , password} = req.body;

        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(404).json( {message: "User does not exist"} );
        }

        const match = await comparePassword(password ,existingUser.password);
        if(!match){
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = generateToken({ id:User._id , email: User.email});

        res.json({message : "Login Succesful" , Token: token});
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
}

const profile = (req,res) => {
    res.json({
        message : "Welcome",
        user: req.user
    })
}

module.exports = {register, login , profile};