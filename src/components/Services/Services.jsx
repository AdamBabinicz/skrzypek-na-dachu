import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import img from "../../assets/11.png";
import img1 from "../../assets/12.png";
import img2 from "../../assets/13.png";
import Resume from "../../assets/resume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      <motion.div
        initial={{ left: "14%" }}
        whileInView={{ left: "1%" }}
        transition={transition}
        className="awesome"
      >
        <span style={{ color: darkMode ? "var(--blueCard" : "" }}>
          Oryginalna produkcja na Broadwayu
        </span>
        <span>mająca premierę w 1964 roku</span>
        <span style={{ color: darkMode ? "var(--blueCard)" : "" }}>
          Jako pierwszy musical w historii przekroczyła 3000 przedstawień będąc
          na afiszu przez prawie 10 lat (rekord pobity 8 lat później przez
          Grease).
          <br />
          Skrzypek na dachu jest oparty na powieści Dzieje Tewji Mleczarza (z
          1894) oraz na cyklu opowiadań powstałych przez kolejne 20 lat
          autorstwa Szolema Alejchema, napisanych w jidysz. Dodatkową inspiracją
          kulturową była również praca Life Is with People autorstwa Marka
          Zborowskiego i Elizabeth Herzog wydana w 1952 roku.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Pobierz tekst</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </motion.div>
      <div className="cards">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
        >
          <Card
            emoji={img}
            heading={"Reżyser, choreograf"}
            detail={"Jerome Robbins"}
          />
        </motion.div>
        <motion.div
          initial={{ rotate: -45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
        >
          <Card
            emoji={img1}
            heading={"Scenograf"}
            detail={"Boris Aronson (scenografia w stylu Chagalla)"}
          />
        </motion.div>
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
        >
          <Card
            emoji={img2}
            heading={"Producent"}
            detail={"Fred Coe"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
