import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const sidebarStyle: React.CSSProperties = {
    width: "220px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    height: "fit-content",
  };

  const linkStyle: React.CSSProperties = {
    color: "#1E3A8A", // deep blue (same tone as navbar)
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: 500,
    transition: "all 0.25s ease",
  };

  const activeStyle: React.CSSProperties = {
    backgroundColor: "#EEF2FF",
    color: "#1E40AF",
    fontWeight: 600,
  };

  const [hovered, setHovered] = React.useState<string | null>(null);

  const hoverStyle: React.CSSProperties = {
    backgroundColor: "rgba(37,99,235,0.1)",
  };

  const links = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/employees", label: "Employee List" },
    { path: "/departments", label: "Departments" },
  ];

  return (
    <aside style={sidebarStyle}>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          style={{
            ...linkStyle,
            ...(location.pathname === link.path ? activeStyle : {}),
            ...(hovered === link.path ? hoverStyle : {}),
          }}
          onMouseEnter={() => setHovered(link.path)}
          onMouseLeave={() => setHovered(null)}
        >
          {link.label}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
