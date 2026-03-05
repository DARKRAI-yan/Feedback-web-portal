import React from "react";

const Footer = () => {
     const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footerp">© {year} GatherPulse. All rights reserved.</p>
    </footer>
  );
};

export default Footer;