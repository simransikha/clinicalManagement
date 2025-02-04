import jwt from 'jsonwebtoken';

const authAdmin = async (req, res, next) => {
  try {
    const atoken = req.headers.authorization?.split(' ')[1];

    if (!atoken) {
      console.log('atoken:', atoken);
      return res.status(400).json({ success: false, message: "Invalid Authentication" });
    }

    const decoded = jwt.verify(atoken, process.env.JWT_SECRET);

    if (decoded.email !== process.env.Admin_email) {
      console.log('decoded:', decoded);
      console.log('process.env.Admin_email:', process.env.Admin_email);
      return res.status(400).json({ success: false, message: "Invalid Authentication" });
    }

    next();
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export default authAdmin;