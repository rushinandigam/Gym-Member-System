import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import gymBg from "../assets/gym.jpg"; 
import axios from 'axios'
const Register = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    age: "",
    height: "",
    weight: "",
    email: "",
    healthCondition: "",
    profile: null, // new field
  });

  const handleChange = (e) => {
    if (e.target.name === "profile") {
      setFormData({ ...formData, profile: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);

    try{
      const response  = await axios.post("http://localhost:5000/registeruser", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      navigate("/message", { 
        state: { 
          type: "success", 
          message: "User registered successfully!", 
          redirectPath: "/viewallcustomers" 
        } 
      });
      
    }
    catch(error){
      alert("Unable to register");
      navigate(-1);
    }
      
  };

  return (
    <div
      className="register-container"
      style={{
        backgroundImage: `url(${gymBg})`,
      }}
    >
      <div className="register-card">
        <h1>Register Now </h1>
        <p>Join our fitness family today!</p>

        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <div className="form-row">
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              value={formData.height}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={formData.weight}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="healthCondition"
            placeholder="Health Condition (if any)"
            rows="3"
            value={formData.healthCondition}
            onChange={handleChange}
          />

          {/* File Upload Section */}
          <label className="file-label">
            Upload Profile Photo:
            <input
              type="file"
              name="profile"
              accept="image/*"
              onChange={handleChange}
              className="file-input"
            />
          </label>

          {/* Preview selected image */}
          {formData.profile && (
            <div className="preview">
              <img
                src={URL.createObjectURL(formData.profile)}
                alt="Preview"
              />
            </div>
          )}

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
