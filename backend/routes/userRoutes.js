import express from 'express';  

import { bookAppointment, cancelAppointment, getUserAppointment, getUserProfile, loginUser, registerUser, updateUserProfile } from '../controller/userController.js';
import authUser from '../middlewares/authUser.js';
import upload from '../middlewares/multer.js'

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/getProfile',authUser, getUserProfile);
userRouter.post('/updateProfile',upload.single('imagee'),authUser,updateUserProfile);
userRouter.post('/book-appointment',authUser, bookAppointment);
userRouter.get('/list-appointment',authUser, getUserAppointment);
userRouter.post('/cancel-appointment',authUser, cancelAppointment);
export default userRouter;
