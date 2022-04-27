import React from "react";
import "./Footer.css";
import Wave from "../../assets/2.png";
import { FaPinterestP, FaFacebookF, FaTwitter } from "react-icons/fa";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="footer"
      style={{ color: darkMode ? "var(--blueCard)" : "" }}
    >
      <img src={Wave} alt="..." />
      <div className="f-content">
        <div className="f-icons">
          <a href="#" target="_blank" rel="noopener noreferer">
            <FaFacebookF />
          </a>
          <a href="#" target="_blank" rel="noopener noreferer">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferer">
            <FaPinterestP />
          </a>
        </div>
        <span>Anatewka (Ukraina)</span>
      </div>
      <p>Radom 2022 - {new Date().getFullYear()}.</p>
    </div>
  );
};

export default Footer;
