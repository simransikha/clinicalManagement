import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   email: {
    type: String,
    required: true,
    unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        
    },
    

    image: {
        type: String,
        default : 'data:image/jpeg;base64,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'
    },
    gender: {
        type: String,
        default : 'Not Selected'
    },
    phone: {
        type: String,
        default : 'Not Selected'
    },
    dob: {
        type: String,
       default : 'Not Selected'
    },


});

const userModel =  mongoose.model('user', userSchema);


export default userModel;