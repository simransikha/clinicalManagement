import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(400).json({ success: false, message: "Invalid Authentication" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
 
    req.body.userId = decoded.id;
 

    next();
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export default  authUser