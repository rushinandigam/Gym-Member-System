import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';
import "../App.css"; // using your existing styling

const Message = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { type, message, redirectPath } = location.state || { 
    type: "success", 
    message: "Operation completed successfully!", 
    redirectPath: "/viewallcustomers" 
  };

  // Auto redirect after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(redirectPath || "/viewallcustomers");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, redirectPath]);

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="checkmark"> <CheckIcon /></div>
        <h1>{message}</h1>
        <p>You will be redirected shortly.</p>
        <button className="success-btn" onClick={() => navigate(redirectPath || "/viewallcustomers")}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Message;
