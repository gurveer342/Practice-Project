const jwt = require('jsonwebtoken')

const createToken = jwt.sign(payload,process.env,PRIVATE_KEY,(err,token)=>{
    if(err){
        console.error("INVAILD: ",err.message)
    }
    else{
        console.log(token);
    }
})

const validateToken = jwt.verify(token, process.env.PRIVATE_KEY);

jwt.verify(token, process.env.PRIVATE_KEY, FUNCTION(ERR,DECODED){
    console.log(decoded.foo)
});