import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const pageStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #EEF2FF, #DBEAFE)",
    fontFamily: "Inter, system-ui, sans-serif",
    textAlign: "center",
    color: "#1E3A8A",
    padding: "24px",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "36px",
    fontWeight: 700,
    marginBottom: "12px",
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: "18px",
    color: "#374151",
    marginBottom: "32px",
    maxWidth: "600px",
  };

  const cardContainer: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "24px",
    marginBottom: "40px",
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    width: "250px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  const cardImage: React.CSSProperties = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "12px",
  };

  const cardTitle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: 600,
    color: "#1E3A8A",
    marginBottom: "8px",
  };

  const buttonContainer: React.CSSProperties = {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#1E3A8A",
    color: "#fff",
    textDecoration: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    fontWeight: 600,
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  const hoverStyle: React.CSSProperties = {
    backgroundColor: "#1D4ED8",
    transform: "translateY(-2px)",
  };

  const [hovered, setHovered] = React.useState<string | null>(null);

  const cards = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      title: "Employee Management",
      desc: "Add, edit, or remove employees easily with just a few clicks.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
      title: "Department Overview",
      desc: "View employees by departments and manage teams effectively.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135800.png",
      title: "Analytics Dashboard",
      desc: "Get key statistics and insights about your workforce.",
    },
  ];

  const buttons = [
    { label: "Go to Employee List", path: "/employees" },
    { label: "View Dashboard", path: "/dashboard" },
  ];

  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>Welcome to Employee Directory</h2>
      <p style={paragraphStyle}>
        A simple and smart way to manage all your company employees — track details, view departments, and monitor stats effortlessly.
      </p>

      <div style={cardContainer}>
        {cards.map((card, i) => (
          <div key={i} style={cardStyle}>
            <img src={card.img} alt={card.title} style={cardImage} />
            <h3 style={cardTitle}>{card.title}</h3>
            <p style={{ color: "#4B5563" }}>{card.desc}</p>
          </div>
        ))}
      </div>

      <div style={buttonContainer}>
        {buttons.map((btn) => (
          <Link
            key={btn.path}
            to={btn.path}
            style={{
              ...buttonStyle,
              ...(hovered === btn.path ? hoverStyle : {}),
            }}
            onMouseEnter={() => setHovered(btn.path)}
            onMouseLeave={() => setHovered(null)}
          >
            {btn.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
