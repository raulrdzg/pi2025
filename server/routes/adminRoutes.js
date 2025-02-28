const express = require('express');
const Doctor = require('../models/Doctor');
const router = express.Router();

// Add Doctor
router.post('/doctors', async (req, res) => {
  const { name, specialty } = req.body;
  try {
    const doctor = new Doctor({ name, specialty });
    await doctor.save();
    res.status(201).json(doctor);
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