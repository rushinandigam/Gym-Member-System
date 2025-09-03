// SingleUserPage.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import axios from "axios";
import '../App.css';

const SingleUserPage = () => {
  const location = useLocation();
  // Use the passed user data if available, otherwise use sample data
  const userFromNav = location.state?.user;
  
  const sampleUser = {
    name: "John Doe",
    mobile: "9876543210",
    email: "john@example.com",
    age: 28,
    height: 175,
    weight: 72,
    healthCondition: "Asthma",
    profile: null,
  };

  // Use the passed user or fallback to sample user
  const user = userFromNav ? {
    ...userFromNav,
    age: userFromNav.age || 25,
    height: userFromNav.height || 170,
    weight: userFromNav.weight || 70,
    healthCondition: userFromNav.healthCondition || "None"
  } : sampleUser;

  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate("/updateuser", { state: { user } });
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:5000/deleteuser/${user._id}`);
        navigate("/message", { 
          state: { 
            type: "success", 
            message: "User deleted successfully!", 
            redirectPath: "/viewallcustomers" 
          } 
        });
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete user. Please try again.");
      }
    }
  };

  return (
    <UserDetails
      user={user}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
    />
  );
};

export default SingleUserPage;
