import React, { useState } from "react";
import employeesData from "../data/employees.json";
import EmployeeCard from "../components/EmployeeCard";
import SearchBar from "../components/SearchBar";
import "./EmployeeList.css";

export interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  image: string;
}

const EmployeeList: React.FC<{ onSelect: (employee: Employee) => void }> = ({
  onSelect,
}) => {
  const [search, setSearch] = useState("");

  const filteredEmployees = employeesData.filter(
    (emp:any) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.department.toLowerCase().includes(search.toLowerCase()) ||
      emp.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="employee-list">
      <h1>Employee Directory</h1>
      <SearchBar value={search} onChange={setSearch} />
      <div className="employee-grid">
        {filteredEmployees.map((emp:any) => (
          <EmployeeCard key={emp.id} {...emp} onClick={() => onSelect(emp)} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
