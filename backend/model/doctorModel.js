import mongoose from 'mongoose';

const doctorSchema = mongoose.Schema({
    name: {
        type: String,
      
    },
   email: {
    type: String,
   
    unique: true
    },
    password: {
        type: String,
      
    },
    address: {
        type: String,
       
    },
    speciality: {
        type: String,
       
    },
    experience: {
        type: String,
       
    },
    degree: {
        type: String,
      
    },
    fees: {
        type: String,
    },

    about: {
        type: String,
        
    },
    availabe : {
        type: String,
       
    },
    slot: {
        type: Object,
        default: {}
    },
    date : {
        type: Date,
       
    },

    image: {
        type: String,
      
    }


} , {minimize: false } );

const doctorModel = mongoose.model('doctors', doctorSchema);


export default doctorModel;