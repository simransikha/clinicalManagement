import express from 'express';

import { addDoctor, adminLogin,} from'../controller/adminController.js';
import upload from '../middlewares/multer.js'

const adminRouter = express.Router();
//api for adding doctor 
adminRouter.post('/addDoctor', upload.single('image'), addDoctor);
adminRouter.post('/login',adminLogin);

export default adminRouter;

