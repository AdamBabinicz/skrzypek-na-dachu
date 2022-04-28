import React, { useState } from "react";
import "./Works.css";
import img from "../../assets/15.png";
import img1 from "../../assets/16.png";
import img2 from "../../assets/17.png";
import img3 from "../../assets/18.png";
import img4 from "../../assets/19.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Modal from "../Portal/Modal";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="works" id="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "var(--blueCard)" : "" }}>
          Inne znaczące produkcje
        </span>
        <span>Australia i Nowa Zelandia</span>
        <span
          className="l"
          style={{ color: darkMode ? "var(--blueCard)" : "" }}
        >
          Oryginalna australijska produkcja miała premierę 16 czerwca 1967 w Her
          Majesty’s Theatre w Sydney. W rolach głównych wystąpili Hayes Gordon
          jako Tevye i Brigid Lenihan jako Golde[60]. Produkcja trwała dwa lata.
          Trasa koncertowa została zorganizowana przez Australijską Operę w 1984
          roku, a Gordon ponownie zagrał rolę Tevye.
          <br />W 2005 i 2007 roku Topol po raz kolejny odtwarzał rolę Tevyego –
          w australijskich produkcjach, z sezonami w Sydney, Brisbane,
          Melbourne, Perth, Wellington i Auckland. Musical został wznowiony w
          Melbourne i Sydney w latach 2015–2016 z Anthonym Warlowem jako Tevye,
          Sigrid Thornton jako Golde. <br />
          Na wrzesień 2020 zaplanowano w Sydney i Melbourne wystawienie wersji w
          języku jidysz (z napisami angielskimi) w reżyserii Joela Greya.
        </span>
        <button className="button s-button" onClick={() => Toggle()}>
          Więcej
        </button>
        <Modal show={modal} close={Toggle} title="'Skrzypek na dachu' - wątek">
          <p>
            Akcja musicalu toczy się w 1905 roku w fikcyjnej rosyjskiej wsi
            Anatewka [Ukraina], która od dziesięcioleci jest zamieszkiwana przez
            dwie społeczności – żydowską i prawosławną. Głównym bohaterem
            "Skrzypka na dachu" jest ubogi mleczarz Tewje (Zero Mostel), ojciec
            pięciu córek – Cejtł (Joanna Merlin), Hudł (Julia Migenes), Chawy
            (Tanya Evertt), Szpryncy (Merylin Rogers) i Bejłki (Pia Zadora).
            Według tradycji musi wydać je za mąż przy pomocy swatki. Dziewczyny
            nie chcą się jednak zgodzić na zaaranżowane małżeństwa – według nich
            związek powinien się przede wszystkim opierać na uczuciu.
          </p>
          <br />
          <p>
            <em>
              www.polskieradio.pl/39/156/Artykul/2811622,Skrzypek-na-dachu-arcydzielo-sztuki-musicalowej
            </em>
          </p>
        </Modal>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <motion.div
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        viewport={{ margin: "-40px" }}
        transition={{ duration: 3.5, type: "spring" }}
        className="w-right"
      >
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={img2} alt="..." />
            <p style={{ color: darkMode ? "var(--black)" : "" }}>1</p>
          </div>
          <div className="w-secCircle">
            <img src={img1} alt="..." />
            <p style={{ color: darkMode ? "var(--black)" : "" }}>2</p>
          </div>
          <div className="w-secCircle">
            <img src={img} alt="..." />
            <p style={{ color: darkMode ? "var(--black)" : "" }}>3</p>
          </div>
          <div className="w-secCircle">
            <img src={img3} alt="..." />
            <p style={{ color: darkMode ? "var(--black)" : "" }}>4</p>
          </div>
          <div className="w-secCircle">
            <img src={img4} alt="..." />
            <p style={{ color: darkMode ? "var(--black)" : "" }}>5</p>
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
        <div
          className="actory"
          style={{ color: darkMode ? "var(--blueCard)" : "" }}
        >
          <p>
            <b>Znani odtwórcy roli Tevye mleczarza:</b>
          </p>
          <em>1 Steeven Skybell</em>
          <em>2 Chaim Topol</em>
          <em>3 Zero Mostal</em>
          <em>4 Henry Goodman</em>
          <em>5 Andy Nyman</em>
        </div>
      </motion.div>
    </div>
  );
};

export default Works;
