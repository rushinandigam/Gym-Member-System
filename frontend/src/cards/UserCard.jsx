import React from "react";
import "../App.css"; // make sure your css file is imported

const UserCard = ({ user, onClick }) => {
  console.log(user)
  return (
    <div className="user-card" onClick={() => onClick(user)}>
      {/* Profile Image */}
      {user.profile ? (
        <img
          src={user.profile}
          alt={user.name}
          className="user-card-img"
        />
      ) : (
        <div className="user-card-placeholder">
          {user.name.charAt(0)}
        </div>
      )}

      {/* User Info */}
      <h3 className="user-card-name">{user.name}</h3>
      <p className="user-card-mobile">{user.mobile}</p>
      <p className="user-card-email">{user.email}</p>
    </div>
  );
};

export default UserCard;
