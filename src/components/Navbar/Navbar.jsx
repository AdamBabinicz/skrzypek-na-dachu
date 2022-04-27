import React, { useState } from "react";
import "./Navbar.css";
import { FaMenorah } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="n-wrapper" id="navbar">
      <div className="n-left">
        <div className="n-name">
          <FaMenorah />
        </div>
        <Toggle />
      </div>
      <div className="n-right">
        <div
          className={sidebar ? "nav-links-sidebar" : "nav-links"}
          onClick={() => setSidebar(false)}
        >
          <ul>
            <li>
              <Link
                activeClass="active"
                to="navbar"
                spy={true}
                smooth={true}
                onClick={() => setSidebar(false)}
              >
                Start
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                onClick={() => setSidebar(false)}
              >
                Premiera
              </Link>
            </li>
            <li>
              <Link
                to="works"
                spy={true}
                smooth={true}
                onClick={() => setSidebar(false)}
              >
                Inne wystawienia
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                onClick={() => setSidebar(false)}
              >
                Kadry
              </Link>
            </li>
            <li>
              <Link
                to="testimonial"
                spy={true}
                smooth={true}
                onClick={() => setSidebar(false)}
              >
                Opinie
              </Link>
            </li>
            <li>
              <Link
                to="kontakt"
                spy={true}
                smooth={true}
                onClick={() => setSidebar(false)}
              >
                <button className="button n-button">Kontakt</button>
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="navbar-items-icon"
          onClick={() => setSidebar(!sidebar)}
        >
          {sidebar ? <MdClose /> : <GiHamburgerMenu />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
