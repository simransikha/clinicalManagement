import express from 'express';
import { doctorList } from '../controller/doctorController.js';

const doctorRouter = express.Router();

// API for getting all doctors
doctorRouter.get('/list', doctorList);

export default doctorRouter;

