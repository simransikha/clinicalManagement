import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({
    userId: { type: String },
    doctorId: { type: String },
    slotDate : { type: String },
    slotTime : { type: String },
    userData : { type: Object },
    docData : { type: Object },
    amount : { type: Number },
    date : { type: Number},
    cancelled : { type: Boolean, default: false },
    payment  : { type: Boolean, default: false },
    isCompleted : { type: Boolean, default: false },

});

const appointmentModel = mongoose.model('appointment', appointmentSchema);
export default appointmentModel;




