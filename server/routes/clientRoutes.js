const express = require('express');
const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');
const router = express.Router();

// Book Appointment
router.post('/appointments', async (req, res) => {
  const { doctorId, date } = req.body;
  try {
    const appointment = new Appointment({ doctor: doctorId, user: req.user.id, date });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Doctors
router.get('/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;