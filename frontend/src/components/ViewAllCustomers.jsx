import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect , useState } from "react";
import UserCard from "../cards/UserCard";
import axios from "axios";
const ViewAllCustomers = () => {

  const navigate = useNavigate();
  
  const handleCardClick = (user) => {
    navigate("/user", { state: { user } })
  };

    const [users , setUsers]= useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/getallusers");
        console.log(data)
        setUsers(data);
        
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);


  
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {users.map((u, index) => (
        <UserCard key={index} user={u} onClick={handleCardClick} />
      ))}
    </div>
  );
};

export default ViewAllCustomers;
