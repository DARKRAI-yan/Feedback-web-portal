import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-box">🛠</div>
        <span className="logo-text">Feedback Nexus</span>
      </div>

      <div className="header-right">

        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "nav-button active"
              : "nav-button"
          }
        >
          ✚ Submit Feedback
        </Link>

        <Link
          to="/feedbacks"
          className={
            location.pathname === "/feedbacks"
              ? "nav-button active"
              : "nav-button"
          }
        >
          ☰ View Feedback
        </Link>

      </div>
    </header>
  );
};

export default Header;