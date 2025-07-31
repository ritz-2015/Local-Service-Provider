// src/pages/ProviderForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../pagescss/ProviderForm.css';

function ProviderForm() {
  const [formData, setFormData] = useState({
    category: "",
    experience: "",
    timeSlots: [],
    bio: "",
    rate: "",
    idProof: null,
  });

  const categories = ["Maid", "Plumber", "Electrician", "Nanny","Any"];
  const timeOptions = ["Morning", "Afternoon", "Evening","Any"];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleTimeSlotChange = (slot) => {
    const newSlots = formData.timeSlots.includes(slot)
      ? formData.timeSlots.filter((s) => s !== slot)
      : [...formData.timeSlots, slot];
    setFormData({ ...formData, timeSlots: newSlots });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Provider Data:", formData);

    // Example: POST to server
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => formDataToSend.append(key, v));
      } else {
        formDataToSend.append(key, value);
      }
    });

    axios.post('http://localhost:3001/providers', formDataToSend)
      .then((res) => {
        alert("Provider details submitted!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="provider-form">
      <h2>Service Provider Details</h2>
      <form onSubmit={handleSubmit}>
        <label>Category of Service</label>
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <label>Experience (in years)</label>
        <input type="number" name="experience" value={formData.experience} onChange={handleChange} required />

        <label>Available Time Slots</label>
        <div className="time-slots">
          {timeOptions.map((slot) => (
            <label key={slot}>
              <input
                type="checkbox"
                checked={formData.timeSlots.includes(slot)}
                onChange={() => handleTimeSlotChange(slot)}
              />
              {slot}
            </label>
          ))}
        </div>

        <label>ID Proof (optional)</label>
        <input type="file" name="idProof" onChange={handleChange} />

        <label>Short Bio / Description</label>
        <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Describe your services..." />

        <label>Rate (per hour/job)</label>
        <input type="text" name="rate" value={formData.rate} onChange={handleChange} placeholder="e.g. $20/hour" required />

        <button type="submit">Submit Provider Details</button>
      </form>
    </div>
  );
}

export default ProviderForm;
