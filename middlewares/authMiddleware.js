const {verifyToken} = require("../services/jwtService.js");

module.exports = (req,res,next) => {
    const authHeader = req.headers["authorization"];

    if(!authHeader){
        return res.status(401).json({message : "No token providied"});
    }

    const token = authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({message : "Incorrect Token"});
    }

    try{
        const decodeToken = verifyToken(token);

        req.user = decodeToken;                                               //attaching user info to request
        next();
    }
    catch(err){
        res.status(401).json({ message: "Invalid or expired token" });
    }
}