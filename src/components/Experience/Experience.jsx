import React from "react";
import "./Experience.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience">
      <div className="achievement">
        <div className="circle">Łódź</div>
        <span style={{ color: darkMode ? "var(--blueCard)" : "" }}>
          5 maja 1983'
        </span>
        <span>Teatr Muzyczny</span>
      </div>
      <div className="achievement">
        <div className="circle">Lublin</div>
        <span style={{ color: darkMode ? "var(--blueCard)" : "" }}>
          25 listopada 1994'
        </span>
        <span>Teatr Muzyczny</span>
      </div>
      <div className="achievement">
        <div className="circle">Wrocław</div>
        <span style={{ color: darkMode ? "var(--blueCard)" : "" }}>
          10 października 2008'
        </span>
        <span>Opera Wrocławska</span>
      </div>
      <div className="achievement">
        <div className="circle">Białystok</div>
        <span style={{ color: darkMode ? "var(--blueCard)" : "" }}>
          28 września 2014'
        </span>
        <span>Opera i Filharmonia Podlaska</span>
      </div>
    </div>
  );
};

export default Experience;
