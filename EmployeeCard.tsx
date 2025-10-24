import React from "react";
import "./EmployeeCard.css";

interface EmployeeProps {
  id: number;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  image: string;
  onClick: () => void;
}

const EmployeeCard: React.FC<EmployeeProps> = ({
  name,
  role,
  department,
  email,
  phone,
  image,
  onClick,
}) => {
  return (
    <div className="employee-card" onClick={onClick}>
      <img src={image} alt={name} />
      <div className="employee-info">
        <h3>{name}</h3>
        <p>{role}</p>
        <span>{department}</span>
      </div>
    </div>
  );
};

export default EmployeeCard;
