import jwt from 'jsonwebtoken';

const authAdmin = async(req, res, next) => {

    try{
        const {atoken} = req.headers;
        
        if(!atoken) return res.status(400).json({success: false, message: "Invalid Authentication"});

        const decoded = jwt.verify(atoken, process.env.JWT_SECRET);

        if(decoded !== process.env.Admin_email + process.env.Admin_password){
             return res.status(400).json({success: false, message: "Invalid Authentication"});
        }
        next();

    }
    catch(err){
        return res.status(500).json({success: false, message: err.message});
    }
  


}

export default authAdmin;