import Doctor from "../model/doctorModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import jsonwebtoken from "jsonwebtoken";

//api for adding doctor

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      address,
      speciality,
      password,
      about,
      degree,
      fees,
      experience,
    } = req.body;
    const image = req.file;

    //cchecking for all data to doctor
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !speciality ||
      !password ||
      !about ||
      !degree ||
      !fees ||
      !experience ||
      !image
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid details" });
    }
    //checking for email validation

    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    //checking for password length
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be atleast 8 characters",
      });
    }

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_typ: "image",
    });
    const image_url = imageUpload.secure_url;

    //creating doctor
    const doctorData = {
      name,
      email,
      phone,
      address: JSON.parse(address),
      speciality,
      password: hashedPassword,
      about,
      degree,
      fees,
      experience,
      image: image_url,
      date: new Date(),
    };

    //saving doctor
    const newDoctor = new Doctor(doctorData);
    await newDoctor.save();
    return res
      .status(201)
      .json({ success: true, message: "Doctor added successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//api for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jsonwebtoken.sign(email + password, process.env.JWT_SECRET);

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

//api for getting all doctors
const getDoctors = async (req, res) => {};

//api for getting doctor by id
const getDoctorById = async (req, res) => {};

//api for updating doctor by id
const updateDoctor = async (req, res) => {};

//api for deleting doctor by id
const deleteDoctor = async (req, res) => {};

export {
  addDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
  adminLogin,
};
