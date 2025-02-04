import express from 'express';
import { addDoctor, adminLogin, getDoctors } from '../controller/adminController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';
import { checkAvailable } from '../controller/doctorController.js';

const adminRouter = express.Router();

// API for adding doctor
adminRouter.post('/addDoctor', authAdmin, upload.single('image'), addDoctor);
adminRouter.post('/login', adminLogin);
adminRouter.get('/all-doctors', authAdmin, getDoctors); // Changed to GET request
adminRouter.post('/change-availability', authAdmin, checkAvailable);

export default adminRouter;
