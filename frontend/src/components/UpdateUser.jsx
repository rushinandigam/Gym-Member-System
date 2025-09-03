import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

const UpdateUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userFromNav = location.state?.user;
  
  const defaultUser = {
    name: "John Doe",
    mobile: "9876543210",
    age: 28,
    height: 175,
    weight: 72,
    email: "john@example.com",
    healthCondition: "Asthma",
    profile: null,
  };

  const [updatedUser, setUpdatedUser] = useState(userFromNav || defaultUser);
  const [profileFile, setProfileFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile" && files.length > 0) {
      setProfileFile(files[0]);
      setUpdatedUser({ 
        ...updatedUser, 
        profilePreview: URL.createObjectURL(files[0]) 
      });
    } else {
      setUpdatedUser({ ...updatedUser, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      
      // Add all user fields to formData
      Object.keys(updatedUser).forEach(key => {
        // Skip profilePreview as it's just for UI
        if (key !== 'profilePreview' && key !== '_id' && key !== '__v') {
          formData.append(key, updatedUser[key]);
        }
      });
      
      // Add profile file if it exists
      if (profileFile) {
        formData.append("profile", profileFile);
      }
      
      // Send update request
      const response = await axios.put(
        `http://localhost:5000/updateuser/${updatedUser._id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      
      // Navigate to success message
      navigate("/message", {
        state: {
          type: "success",
          message: "User updated successfully!",
          redirectPath: "/viewallcustomers"
        }
      });
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user. Please try again.");
    }
  };

  return (
    <div className="update-user-container">
      <div className="update-user-card">
        <form className="update-form" onSubmit={handleSubmit}>
          <h2>Update Profile</h2>

          {/* Profile Photo Upload */}
          <div>
            {(updatedUser.profilePreview || updatedUser.profile) ? (
              <img
                src={updatedUser.profilePreview || updatedUser.profile}
                alt="Profile"
                className="update-profile-pic"
              />
            ) : (
              <div className="update-profile-placeholder">
                {updatedUser.name.charAt(0)}
              </div>
            )}
            <input
              type="file"
              name="profile"
              accept="image/*"
              onChange={handleChange}
              className="file-input"
            />
          </div>

          <input
            type="text"
            name="name"
            value={updatedUser.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />

          <input
            type="tel"
            name="mobile"
            value={updatedUser.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
          />

          <input
            type="number"
            name="age"
            value={updatedUser.age}
            onChange={handleChange}
            placeholder="Age"
            required
          />

          <input
            type="number"
            name="height"
            value={updatedUser.height}
            onChange={handleChange}
            placeholder="Height (cm)"
            required
          />

          <input
            type="number"
            name="weight"
            value={updatedUser.weight}
            onChange={handleChange}
            placeholder="Weight (kg)"
            required
          />

          <input
            type="email"
            name="email"
            value={updatedUser.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          <textarea
            name="healthCondition"
            value={updatedUser.healthCondition}
            onChange={handleChange}
            placeholder="Health Condition (if any)"
          />

          <div className="update-actions">
            <button type="submit" className="update-btn">
              Save Changes
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
