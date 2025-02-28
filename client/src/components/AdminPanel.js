import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [doctors, setDoctors] = useState([]);
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('/api/admin/doctors', {
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
      await axios.post('/api/admin/doctors', { name, specialty }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert('Doctor added successfully!');
      fetchDoctors();
    } catch (error) {
      alert(error.response?.data?.error || 'Failed to add doctor');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1 className="mb-4">Admin Panel</h1>
          <div className="card mb-4">
            <div className="card-header bg-primary text-white">
              <h2 className="card-title">Add Doctor</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="doctorName" className="form-label">Doctor Name:</label>
                  <input
                    type="text"
                    id="doctorName"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="specialty" className="form-label">Specialty:</label>
                  <input
                    type="text"
                    id="specialty"
                    className="form-control"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Add Doctor</button>
              </form>
            </div>
          </div>
          <div className="card">
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
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;