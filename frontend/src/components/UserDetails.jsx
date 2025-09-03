import React from "react";
import '../App.css'
const UserDetails = ({ user, onUpdate, onDelete }) => {
  if (!user) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>No user found</p>;
  }

  return (
    <div className="user-details-container">
      {/* Profile Image */}
      <div>
        {user.profile ? (
          <img
            src={user.profile}
            alt={user.name}
            className="user-profile-image"
          />
        ) : (
          <div className="user-profile-placeholder">
            {user.name.charAt(0)}
          </div>
        )}
      </div>

      {/* User Info */}
      <h2 className="user-name">{user.name}</h2>
      <p className="user-details-info"><strong>Mobile:</strong> {user.mobile}</p>
      <p className="user-details-info"><strong>Email:</strong> {user.email}</p>
      <p className="user-details-info"><strong>Age:</strong> {user.age} years</p>
      <p className="user-details-info"><strong>Height:</strong> {user.height} cm</p>
      <p className="user-details-info"><strong>Weight:</strong> {user.weight} kg</p>
      <p className="user-details-info"><strong>Health Condition:</strong> {user.healthCondition || "None"}</p>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button
          onClick={onUpdate}
          className="update-button"
        >
          Update
        </button>

        <button
          onClick={onDelete}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
