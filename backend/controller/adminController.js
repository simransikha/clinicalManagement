
import validator from "validator";
import bcrypt from "bcrypt";
import {v2 as cloudinary} from "cloudinary";
import jsonwebtoken from "jsonwebtoken";
import doctorModel from "../model/doctorModel.js";

// API for adding doctor
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      image,
      address,
      speciality,
      password,
      about,
      degree,
      fees,
      experience,
    } = req.body;
    

    // Checking for all required data
    if (
      !name ||
      !email ||
      
      !address ||
      !speciality ||
      !password ||
      !about ||
      !degree ||
      !fees ||
      !experience
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid details" });
    }

    // Checking for email validation
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    // Checking for password length
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    

    // Creating doctor
    const doctorData = {
      name,
      email,
      address: address,
      speciality,
      password: hashedPassword,
      about,
      degree,
      fees,
      experience,
      date: new Date(),
      image,
    };

    // Saving doctor
    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();
    return res
      .status(201)
      .json({ success: true, message: "Doctor added successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// API for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.Admin_email &&
      password === process.env.Admin_password
    ) {
      const token = jsonwebtoken.sign({ email }, process.env.JWT_SECRET, {
        expiresIn:  "20h",
      });

      res.json({ success: true, token });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// API for getting all doctors list for admin panel
const getDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select("-password"); // Selecting all doctors except password
    return res.status(200).json({ success: true, doctors });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// API for getting doctor by id
const getDoctorById = async (req, res) => {
  try {
    const doctor = await doctorModel.findById(req.params.id).select("-password");
    if (!doctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }
    return res.status(200).json({ success: true, doctor });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// API for updating doctor by id
const updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await doctorModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).select("-password");
    if (!updatedDoctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }
    return res.status(200).json({ success: true, doctor: updatedDoctor });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// API for deleting doctor by id
const deleteDoctor = async (req, res) => {
  try {
    const deletedDoctor = await doctorModel.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }
    return res.status(200).json({ success: true, message: "Doctor deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export {
  addDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
  adminLogin,
};