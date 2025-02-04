import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import connectDatabase from './config/mongodb.js';
import cloudinaryStorage from './config/cloudinary.js';
import adminRouter from './routes/adminRoutes.js';
import doctorRouter from './routes/doctorRoutes.js';
import userRouter from './routes/userRoutes.js';

// Connect to database
connectDatabase();
cloudinaryStorage();

// App config
const app = express();
const port = process.env.PORT || 8002;

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API endpoints
app.use('/api/v1', adminRouter);
app.use('/api/v1/doctor',doctorRouter)
app.use('/api/user',userRouter)

// Listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));