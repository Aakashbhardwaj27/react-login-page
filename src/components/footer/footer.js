import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <h5 className="footer-child">
        BET SOFTWARE ©{new Date().getFullYear()} All rights reserved
      </h5>
    </footer>
  );
}
