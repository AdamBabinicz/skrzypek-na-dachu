import React from "react";
import "./Card.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Card = ({ emoji, heading, detail }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // const transition = {
  //   duration: 1,
  //   type: "spring",
  // };

  return (
    <div className="card">
      <img src={emoji} alt="..." />
      <span style={{ color: darkMode ? "var(--blueCard)" : "" }}>
        {heading}
      </span>
      <span style={{ color: darkMode ? "var(--blueCard)" : "" }}>{detail}</span>
      <br />
      {/* <button className="button c-button">Czytaj</button> */}
    </div>
  );
};

export default Card;
