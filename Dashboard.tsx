import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import employeesData from "../data/employees.json";

const Dashboard: React.FC = () => {
  const totalEmployees = employeesData.length;

  // Main page wrapper
  const pageStyle: React.CSSProperties = {
    display: "flex",
    gap: "24px",
    padding: "24px",
    backgroundColor: "#F4F7FB",
    minHeight: "100vh",
    fontFamily: "Inter, system-ui, sans-serif",
  };

  // Dashboard content (right side)
  const contentStyle: React.CSSProperties = {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    display: "flex",
    flexDirection: "column",
  };

  // Heading style
  const headingStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: 700,
    color: "#1E3A8A",
    marginBottom: "20px",
  };

  // Dashboard cards grid
  const cardsStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  };

  return (
    <div style={pageStyle}>
      <Sidebar />
      <div style={contentStyle}>
        <h2 style={headingStyle}>Dashboard</h2>
        <div style={cardsStyle}>
          <DashboardCard title="Total Employees" value={totalEmployees} />
          {/* Add more cards later, like Total Departments, etc. */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
