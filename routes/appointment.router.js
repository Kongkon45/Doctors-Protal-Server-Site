const express = require('express');
const { getAllAppointment, createAppointment } = require('../controller/appointment.controller');
const router = express.Router();

router.get("/appointment", getAllAppointment);
router.post("/appointment", createAppointment)


module.exports = router;