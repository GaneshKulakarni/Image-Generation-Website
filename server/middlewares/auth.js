import jwt from "jsonwebtoken"

const userAuth=async(req,res,next)=>{
    // Check for token in Authorization header first, then in body
    const authHeader = req.headers.authorization;
    let token;
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.substring(7); // Remove 'Bearer ' prefix
    } else {
        token = req.body.token;
    }

    if(!token){
        return res.status(401).json({success:false,message:"Not Authorized. Login Again"});
    }
    try{
        const tokenDecode=jwt.verify(token,process.env.JWT_SECRET);

        if(tokenDecode.id){
            req.body.userId=tokenDecode.id;
        }
        else{
             return res.status(401).json({success:false,message:"Not Authorized. Login Again"});

        }
        next();
    }
    catch(error){
        return res.status(401).json({success:false,message:"Invalid token. Login Again"});
    }
}
export default userAuth