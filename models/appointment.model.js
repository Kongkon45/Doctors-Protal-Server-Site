const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    firstName: {
        type: String,required:true
    },
    lastName: {
        type: String,required:true
    },
    email: {
        type: String,required:true
    },
    phoneNumber: {
        type: String,
    },
    createOn: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("appointment", appointmentSchema)