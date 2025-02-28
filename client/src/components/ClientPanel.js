import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientPanel = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('/api/client/doctors', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setDoctors(response.data);
    } catch (error) {
      alert(error.response?.data?.error || 'Failed to fetch doctors');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/client/appointments', { doctorId, date }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert('Appointment booked successfully!');
    } catch (error) {
      alert(error.response?.data?.error || 'Failed to book appointment');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1 className="mb-4">Client Panel</h1>
          <div className="card mb-4">
            <div className="card-header bg-primary text-white">
              <h2 className="card-title">Doctors List</h2>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {doctors.map((doctor) => (
                  <li key={doctor._id} className="list-group-item">
                    {doctor.name} - {doctor.specialty}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h2 className="card-title">Book Appointment</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="doctorId" className="form-label">Doctor:</label>
                  <select
                    id="doctorId"
                    className="form-select"
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                    required
                  >
                    <option value="">Select a doctor</option>
                    {doctors.map((doctor) => (
                      <option key={doctor._id} value={doctor._id}>
                        {doctor.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="appointmentDate" className="form-label">Date:</label>
                  <input
                    type="datetime-local"
                    id="appointmentDate"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Book Appointment</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPanel;