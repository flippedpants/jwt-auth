const {verifyToken} = require("../services/jwtService.js");

module.exports = (req,res,next) => {
    const authHeader = req.headers["authourization"];

    if(!authHeader){
        return res.status(401).json({message : "No token providied"});
    }

    const token = authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({message : "Incorrect Token"});
    }

    try{
        const dcodeToken = verifyToken(token);

        req.user = token;
        next();
    }
    catch(err){
        res.status(401).json({ message: "Invalid or expired token" });
    }
}