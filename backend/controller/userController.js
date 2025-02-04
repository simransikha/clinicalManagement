import Validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../model/userModel.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../model/doctorModel.js";
import appointmentModel from "../model/appointmentModel.js";

//Api to register a new user

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all the fields" });
    }

    if (!Validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid Email" });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be atleast 6 characters",
      });
    }

    //hashing user password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userData = {
      name,
      email,
      password: hashedPassword,
    };
    //saving user data to database

    const newuser = await userModel(userData);
    const user = await newuser.save();

    //token generation
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(201).json({ success: true, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

//Api to login a user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.status(200).json({ success: true, token: token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

//api to get User Profile data
const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId).select("-password");
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: userData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Api to update user profile
const updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const { name, phone, address, dob, gender } = req.body;
    const imageeFile = req.file;

    if (!name || !phone || !dob || !gender) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all the fields" });
    }

    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      gender,
    });

    if (imageeFile) {
      //upload image to cloudinary
      const uploadImage = await cloudinary.uploader.upload(imageeFile.path, {
        resource_type: "image",
      });

      const imageurl = uploadImage.secure_url;
      await userModel.findByIdAndUpdate(userId, { image: imageurl });
    }

    res.status(200).json({ success: true, message: "Profile Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

//Api to book appointment
const bookAppointment = async (req, res) => {
  try {
    const { userId, docId, slotDate, slotTime } = req.body;

    const docData = await doctorModel.findById(docId).select("-password");

    if(!docData){

      return res.status(404).json({success: false, message: "Doctor not found"});
    }

    let slots_booked = docData.slots_booked || {};

    //check for slot availability
    if(slots_booked?.[slotDate]){
      if(slots_booked[slotDate].includes(slotTime)){
        return res.status(400).json({success: false, message: "Slot not available"});
      }
      else{
        slots_booked[slotDate].push(slotTime);
      }
    }
    else{
      slots_booked[slotDate] = [];
      slots_booked[slotDate].push(slotTime);
      }

      const userData = await userModel.findById(userId).select("-password");

      delete docData.slots_booked;

      const appointmentData = {
        userId,
        docId,
        slotDate,
        slotTime,
        userData,
        docData,
        amount: docData.fees,
        date: Date.now(),
      }
      const newappointment = new appointmentModel(appointmentData);
      await newappointment.save();

      //save new slot data to docData
      await doctorModel.findByIdAndUpdate(docId, {slots_booked});
      res.status(201).json({success: true, message: "Appointment booked successfully"});
      


  }

  catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

//Api to get user appointment
const getUserAppointment = async (req, res) => {
  try {
    const { userId } = req.body;

    const appointments = await appointmentModel.find({  userId });

    res.status(200).json({ success: true,  appointments });
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// api to cancel the appointment
const cancelAppointment = async (req, res) => {
  try {
    const { userId, appointmentId } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId);

    if (!appointmentData) {
      return res.status(404).json({ success: false, message: "Appointment not found" });
    }

    if (appointmentData.userId !== userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    //delete appointment
    await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true });

    //delete slot from doctor data
     
    const { docId, slotDate, slotTime } = appointmentData;

   
    const docData = await doctorModel.findById(docId).select("-password");

    let slots_booked = docData.slots_booked;
  
    slots_booked[slotDate] = slots_booked[slotDate].filter((e) => e !==slotTime);

    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    res.status(200).json({ success: true, message: "Appointment cancelled successfully" });
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export { registerUser, loginUser, getUserProfile, updateUserProfile, bookAppointment, getUserAppointment, cancelAppointment };
