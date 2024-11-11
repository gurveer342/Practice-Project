var jwt = require('jsonwebtoken');

const generateToken=(userData)=>{
    return jwt.sign(userData,process.env.PRIVATE_KEY)
}

const validatejwtToken=(req,res,next)=>{
    //first we are checking that jwt token is available or not.
    const authorization = req.headers.authorization;
    //Output 1. Bearer jsnadjlasndf
    //Output 2. dskajdfhasjldhlskan
    //Output 3. 
    //Output 4. TOKEN BANA HE NAHI H, LOCAL HO YA ENDPOINT TESTING SE BHEJA HO,WITHOUT TOKEN HEADER SEND KARA H

    if(!authorization){
        return res.status(401).json
        ({err:'Token not available'})
    }
    const token=req.headers.authorization.split(' ')[1]

    if(!token){
        return res.status(401).json({err:'Unauthorized User'});
    }
    try{

        // in this error handler try catch : we are handling , if token is validated or verified , then move to next middleware or respond back to client.
        const validateToken=jwt.verify(token,process.env.PRIVATE_KEY);

        req.user=validateToken;
        next();
        

        } catch(err){
            console.error("Error Occured: ")
        }
    }

    module.exports={generateToken,validateJwtToken}