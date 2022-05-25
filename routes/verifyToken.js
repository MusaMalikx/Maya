const jwt = require("jsonwebtoken");

//Checks the token passed from frontend in the request header and server verifies it. 
const verifyToken = (req,res,next) => {
    const authHeader = req.headers.token;

    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token , process.env.JWT_SEC , (err,user) =>{
            if(err) 
               return res.status(403).json("Token is not valid!!");
            
            //If token is verified return everything stored in jwt tokken at the time of login and return it as re.user to the next function
            req.user = user;
            next();
        }) 
    }else {
        return res.status(401).json("You are not authenticated!");
    }
};


//This method can be used if we pass the id seprately in params along with jwt token , NOT CURRENTLY USED
const verifyTokenandAuthorization = (req,res,next) => {
    verifyToken(req,res, () => {

        if(req.user.id === req.params.id){
            next();
        } else {
            res.status(403).json("User ID not valid!!");
        }
    });
};

module.exports = {verifyToken ,verifyTokenandAuthorization};