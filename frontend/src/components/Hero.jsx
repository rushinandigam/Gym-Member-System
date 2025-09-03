import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
import gym from "../assets/gym.jpg";

const Hero = () => {
  const navigate = useNavigate();


  const movetoRegister = ()=> {
    navigate("/register")
  }

  return (
    <div className="hero-container">
      <img src={gym} alt="Gym" className="hero-img" />

      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to Gym!</h1>
        <p className="hero-subtitle">
          Transform your body. Transform your life.
        </p>
        <button className="hero-btn" onClick={movetoRegister}>Join Now</button>
      </div>
    </div>
  );
};

export default Hero;
