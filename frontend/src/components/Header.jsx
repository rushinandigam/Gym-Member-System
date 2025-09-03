import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Header = () => {

  const navigate = useNavigate();

  const movetoRegister = ()=> {
    navigate("/register")
  }

  const onLogoClick = ()=> {
    navigate("/")
  }

  const movetoViewAll = ()=> {
    navigate("/viewallcustomers")
  }

  return (
    <div id="main-div">
      <h1 id="main-heading" onClick={onLogoClick}>Gym</h1>
      <div id="sub-div">
        <h2 className="nav-link" onClick={movetoViewAll}>Our Team</h2>
        <h2 className="nav-link" onClick={movetoRegister}>Register</h2>
      </div>
    </div>
  );
};

export default Header;
