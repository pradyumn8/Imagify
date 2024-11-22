import jwt from 'jsonwebtoken'

const userAuth = async (req, res, next)=>{
    console.log("Request received:", req.method, req.url);

    const {token}= req.headers;
    if(!token){
        return res.json({success:false,message:'Not Authorized. Login Again'})
    }
    try {
        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);
        
        if (tokenDecode.id) {
            req.body.userId = tokenDecode.id;
        } else {

            return res.json({success:false,message:'Not Authorized. Login Again'})
        }
        next();
    } catch (error) {
        
        return res.json({success:false,message:error.message})
    }
};

export default userAuth