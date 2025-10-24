import React from "react";
import "./EmployeeDetails.css";

interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  image: string;
}

const EmployeeDetails: React.FC<{
  employee: Employee;
  onBack: () => void;
}> = ({ employee, onBack }) => {
  return (
    <div className="employee-details">
      <button onClick={onBack} className="back-btn">← Back</button>
      <div className="details-card">
        <img src={employee.image} alt={employee.name} />
        <h2>{employee.name}</h2>
        <p><strong>Role:</strong> {employee.role}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
      </div>
    </div>
  );
};

export default EmployeeDetails;
