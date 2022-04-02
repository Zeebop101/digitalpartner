import React from "react";
import "./Footer.scss";
import logo from "./img/logo.svg";

const Footer = () => {
  return (
    <div class="footer">
      <div class="footer-container">
        <a
          class="footer-links"
          href="https://www.ihr-digital-partner.de/impressum"
        >
          Impressum
        </a>
        <a
          class="footer-links"
          href="https://www.ihr-digital-partner.de/datenschutz"
        >
          Datenschutzhinweise
        </a>
        <a
          class="footer-links"
          href="https://www.ihr-digital-partner.de/haftung"
        >
          Haftungsausschluss
        </a>

        <img class="footer-logo" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
