import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import EmployeeList from "./pages/EmployeeList";
import EmployeeDetails from "./pages/EmployeeDetails";
import Home from "./pages/Home"; // ✅ Import Home
import type { Employee } from "./pages/EmployeeList";

const App: React.FC = () => {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const handleSelect = (employee: Employee) => {
    setSelectedEmployee(employee);
  };

  const handleBack = () => {
    setSelectedEmployee(null);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* ✅ Add Home route */}
        <Route path="/" element={<Home />} /> 

        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/employees"
          element={<EmployeeList onSelect={handleSelect} />}
        />
        <Route
          path="/employees/:id"
          element={
            selectedEmployee ? (
              <EmployeeDetails
                employee={selectedEmployee}
                onBack={handleBack}
              />
            ) : (
              <EmployeeList onSelect={handleSelect} />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
