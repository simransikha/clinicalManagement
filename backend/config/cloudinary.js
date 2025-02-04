import {v2 as cloudinary} from 'cloudinary';


const cloudinaryStorage = async (req, res, next) => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });
       
    }
    catch (err) {
        console.log(err.message);
    }
}


export default cloudinaryStorage;