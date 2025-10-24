import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const navbarStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1E3A8A", // deep blue
    color: "white",
    padding: "12px 24px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  };

  const titleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: "22px",
    fontWeight: 700,
    letterSpacing: "0.5px",
  };

  const linkContainerStyle: React.CSSProperties = {
    display: "flex",
    gap: "16px",
  };

  const linkStyle: React.CSSProperties = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 500,
    padding: "6px 10px",
    borderRadius: "6px",
    transition: "background 0.3s ease",
  };

  const linkHoverStyle: React.CSSProperties = {
    backgroundColor: "rgba(255,255,255,0.15)",
  };

  // Handle hover with a little React state (optional)
  const [hovered, setHovered] = React.useState<string | null>(null);

  return (
    <nav style={navbarStyle}>
      <h1 style={titleStyle}>Employee Directory</h1>
      <div style={linkContainerStyle}>
        {["Home", "Dashboard", "Employees"].map((name, i) => {
          const path =
            name === "Home"
              ? "/"
              : `/${name.toLowerCase().replace(" ", "")}`;
          return (
            <Link
              key={i}
              to={path}
              style={{
                ...linkStyle,
                ...(hovered === name ? linkHoverStyle : {}),
              }}
              onMouseEnter={() => setHovered(name)}
              onMouseLeave={() => setHovered(null)}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
