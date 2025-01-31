import express from 'express';

import { addDoctor, adminLogin,} from'../controller/adminController.js';
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js';

const adminRouter = express.Router();
//api for adding doctor 
adminRouter.post('/addDoctor',authAdmin ,upload.single('image'), addDoctor);
adminRouter.post('/login',adminLogin);

export default adminRouter;

