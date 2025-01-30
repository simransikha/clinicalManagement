import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import connectDatabase from './config/mongodb.js';
import cloudinaryStorage from './config/cloudinary.js';
import adminRouter from './routes/adminRoutes.js';


//connect to database




//app config
const app = express();
const port = process.env.PORT || 8001;
connectDatabase();
cloudinaryStorage();

//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//api endpoints
app.use('/api/v1', adminRouter);

//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));



