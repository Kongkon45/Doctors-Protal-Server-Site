const appointment = require("../models/appointment.model")

// getAllAppointment 
const getAllAppointment = async (req, res) => {
  try {
    const appointmentData = await appointment.find();
    res.status(200).json({
      message: "All Appointment data",
      success: true,
      data: appointmentData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// createAppointment 
const createAppointment = async (req, res) => {
  try {
    const firstName = req.body?.firstName;
    const lastName = req.body?.lastName;
    const email = req.body?.email;
    const phoneNumber = req.body?.phoneNumber;

    // if (!firstName || !lastName || !email || !phoneNumber) {
    //   return res.status(400).json({
    //     message: "All fields are required.",
    //     success: false,
    //   });
    // }

    const newAppointment = new appointment({
      firstName,
      lastName,
      email,
      phoneNumber,
    });
    const appointmentData = await newAppointment.save();

    res.status(200).json({
      message: "Appointment created successfully",
      success: true,
      data: appointmentData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllAppointment, createAppointment };
